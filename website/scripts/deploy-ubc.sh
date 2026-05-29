#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

ENV_FILE="$REPO_ROOT/.deploy-ubc.env"
if [[ -f "$ENV_FILE" ]]; then
  set -a
  # shellcheck source=/dev/null
  . "$ENV_FILE"
  set +a
fi

REMOTE_USER="${UBC_DEPLOY_REMOTE_USER:-}"
REMOTE_HOST="${UBC_DEPLOY_REMOTE_HOST:-}"
REMOTE_DIR="${UBC_DEPLOY_REMOTE_DIR:-}"
REMOTE_DIR="${REMOTE_DIR%/}"
REMOTE="${REMOTE_USER}@${REMOTE_HOST}"
VPN_HOST="${UBC_DEPLOY_VPN_HOST:-}"
VPN_USER="${UBC_DEPLOY_VPN_USER:-}"
readonly LOCAL_CV_FILE="$REPO_ROOT/src/files/cvrababw.pdf"
readonly LOCAL_RABABW_FILE="$REPO_ROOT/static/rababw.html"
SSH_KEY_FILE="${UBC_SSH_KEY:-}"

MODE="deploy"
DRY_RUN=0
FETCH_LIVE_FILES="${FETCH_LIVE_FILES:-1}"
BUILD_SITE="${BUILD_SITE:-1}"
ASSUME_YES="${DEPLOY_CONFIRM:-0}"
AUTO_VPN="${AUTO_VPN:-1}"
BACKUP_BEFORE_DEPLOY="${UBC_DEPLOY_BACKUP:-1}"
BACKUP_DIR="${UBC_DEPLOY_BACKUP_DIR:-$REPO_ROOT/.deploy-backups}"
if [[ "$BACKUP_DIR" != /* ]]; then
  BACKUP_DIR="$REPO_ROOT/$BACKUP_DIR"
fi
VPN_STARTED_BY_SCRIPT=0
VPN_PID_FILE=""

usage() {
  cat <<'USAGE'
Usage:
  bash scripts/deploy-ubc.sh [options]
  bash scripts/deploy-ubc.sh backup-remote [options]
  bash scripts/deploy-ubc.sh fetch-live-files [options]
  bash scripts/deploy-ubc.sh install-ssh-key [options]

Options:
  --dry-run     Build and preview rsync changes, but do not upload.
  --yes         Skip the final confirmation prompt.
  --skip-fetch  Do not fetch live CV/rababw.html before building.
  --skip-build  Deploy the existing public/ folder without rebuilding it.
  --skip-backup Do not back up the remote site before uploading.
  --skip-vpn    Do not start or stop the UBC VPN.
  --help        Show this help.

Required private values are loaded from .deploy-ubc.env:
  UBC_DEPLOY_REMOTE_USER
  UBC_DEPLOY_REMOTE_HOST
  UBC_DEPLOY_REMOTE_DIR
  UBC_DEPLOY_VPN_HOST
  UBC_DEPLOY_VPN_USER
USAGE
}

die() {
  echo "Error: $*" >&2
  exit 1
}

need_cmd() {
  command -v "$1" >/dev/null 2>&1 || die "Missing required command: $1"
}

while (($#)); do
  case "$1" in
    fetch-live-files|fetch)
      MODE="fetch-live-files"
      FETCH_LIVE_FILES=1
      ;;
    backup-remote|backup)
      MODE="backup-remote"
      ;;
    install-ssh-key|install-key)
      MODE="install-ssh-key"
      ;;
    deploy)
      MODE="deploy"
      ;;
    --dry-run)
      DRY_RUN=1
      ;;
    --yes|-y)
      ASSUME_YES=1
      ;;
    --skip-fetch)
      FETCH_LIVE_FILES=0
      ;;
    --skip-build)
      BUILD_SITE=0
      ;;
    --skip-backup)
      BACKUP_BEFORE_DEPLOY=0
      ;;
    --skip-vpn)
      AUTO_VPN=0
      ;;
    --help|-h)
      usage
      exit 0
      ;;
    *)
      die "Unknown argument: $1"
      ;;
  esac
  shift
done

require_config() {
  [[ -n "$REMOTE_USER" ]] || die "Set UBC_DEPLOY_REMOTE_USER in .deploy-ubc.env"
  [[ -n "$REMOTE_HOST" ]] || die "Set UBC_DEPLOY_REMOTE_HOST in .deploy-ubc.env"
  [[ -n "$REMOTE_DIR" ]] || die "Set UBC_DEPLOY_REMOTE_DIR in .deploy-ubc.env"
  [[ "$REMOTE_DIR" == /* ]] || die "UBC_DEPLOY_REMOTE_DIR must be an absolute path"
  [[ "$REMOTE_DIR" != "/" ]] || die "Refusing to deploy to /"
}

use_ssh_key() {
  [[ -n "$SSH_KEY_FILE" && -f "$SSH_KEY_FILE" ]]
}

ssh_rsh() {
  if use_ssh_key; then
    printf 'ssh -i %s -o IdentitiesOnly=yes -o PreferredAuthentications=publickey,password -o NumberOfPasswordPrompts=1' "$SSH_KEY_FILE"
  else
    printf 'ssh -o PreferredAuthentications=publickey,password -o NumberOfPasswordPrompts=1'
  fi
}

if [[ -n "${UBC_SSH_PASSWORD:-}" && ! -f "${SSH_KEY_FILE:-}" ]]; then
  need_cmd sshpass
fi

run_ssh() {
  if use_ssh_key; then
    ssh \
      -i "$SSH_KEY_FILE" \
      -o IdentitiesOnly=yes \
      -o PreferredAuthentications=publickey,password \
      -o NumberOfPasswordPrompts=1 \
      "$REMOTE" "$@"
  elif [[ -n "${UBC_SSH_PASSWORD:-}" ]]; then
    SSHPASS="$UBC_SSH_PASSWORD" sshpass -e ssh \
      -o PreferredAuthentications=password \
      -o PubkeyAuthentication=no \
      -o NumberOfPasswordPrompts=1 \
      "$REMOTE" "$@"
  else
    ssh \
      -o PreferredAuthentications=publickey,password \
      -o NumberOfPasswordPrompts=1 \
      "$REMOTE" "$@"
  fi
}

run_rsync() {
  if [[ -n "${UBC_SSH_PASSWORD:-}" && ! -f "${SSH_KEY_FILE:-}" ]]; then
    SSHPASS="$UBC_SSH_PASSWORD" sshpass -e rsync "$@"
  else
    rsync "$@"
  fi
}

vpn_active() {
  ip link show tun0 >/dev/null 2>&1
}

start_vpn_if_needed() {
  [[ "$AUTO_VPN" == "1" ]] || return 0

  if vpn_active; then
    echo "VPN tunnel tun0 is already active; leaving it alone."
    return 0
  fi

  need_cmd sudo
  need_cmd openconnect
  [[ -n "$VPN_HOST" ]] || die "Set UBC_DEPLOY_VPN_HOST in .deploy-ubc.env or use --skip-vpn"
  [[ -n "$VPN_USER" ]] || die "Set UBC_DEPLOY_VPN_USER in .deploy-ubc.env or use --skip-vpn"

  echo "Starting UBC VPN. You may be prompted for sudo and/or VPN password."
  sudo -v

  VPN_PID_FILE="${TMPDIR:-/tmp}/ubc-openconnect-${USER:-user}-$$.pid"

  if [[ -n "${UBC_VPN_PASSWORD:-}" ]]; then
    printf '%s\n' "$UBC_VPN_PASSWORD" | sudo openconnect \
      --user="$VPN_USER" \
      --passwd-on-stdin \
      --background \
      --pid-file="$VPN_PID_FILE" \
      "$VPN_HOST"
  else
    sudo openconnect \
      --user="$VPN_USER" \
      --background \
      --pid-file="$VPN_PID_FILE" \
      "$VPN_HOST"
  fi

  VPN_STARTED_BY_SCRIPT=1

  for _ in {1..15}; do
    if vpn_active; then
      echo "VPN tunnel tun0 is active."
      return 0
    fi
    sleep 1
  done

  die "VPN did not appear to become active."
}

stop_vpn_if_started() {
  [[ "$VPN_STARTED_BY_SCRIPT" == "1" ]] || return 0

  echo "Disconnecting VPN started by this script."
  if [[ -n "$VPN_PID_FILE" && -f "$VPN_PID_FILE" ]]; then
    local vpn_pid
    vpn_pid="$(cat "$VPN_PID_FILE")"
    sudo kill "$vpn_pid" >/dev/null 2>&1 || true
    for _ in {1..20}; do
      if ! sudo kill -0 "$vpn_pid" >/dev/null 2>&1; then
        break
      fi
      sleep 0.25
    done
    sudo rm -f "$VPN_PID_FILE" >/dev/null 2>&1 || true
  else
    sudo pkill -f "openconnect .*${VPN_HOST}" >/dev/null 2>&1 || true
  fi

  if vpn_active; then
    echo "Warning: VPN tunnel still appears active."
  else
    echo "VPN disconnected."
  fi
}

cleanup() {
  local status=$?
  stop_vpn_if_started
  exit "$status"
}
trap cleanup EXIT

fetch_live_files() {
  need_cmd rsync
  need_cmd ssh

  echo "Checking remote directory exists: $REMOTE_DIR"
  run_ssh "test -d '$REMOTE_DIR'"

  mkdir -p "$(dirname "$LOCAL_CV_FILE")" "$(dirname "$LOCAL_RABABW_FILE")"

  echo "Finding newest live CV on the server."
  local remote_cv_path
  remote_cv_path="$(
    run_ssh "find '$REMOTE_DIR' -maxdepth 3 -type f -name 'cvrababw*.pdf' -exec ls -t {} + 2>/dev/null | head -n 1"
  )"

  [[ -n "$remote_cv_path" ]] || die "Could not find cvrababw*.pdf under $REMOTE_DIR on the server."

  echo "Fetching CV: $remote_cv_path -> src/files/cvrababw.pdf"
  run_rsync -avz -e "$(ssh_rsh)" "${REMOTE}:${remote_cv_path}" "$LOCAL_CV_FILE"

  echo "Fetching rababw.html -> static/rababw.html"
  run_rsync -avz -e "$(ssh_rsh)" "${REMOTE}:${REMOTE_DIR}/rababw.html" "$LOCAL_RABABW_FILE"
}

install_ssh_key() {
  need_cmd ssh
  need_cmd ssh-keygen
  need_cmd ssh-copy-id
  [[ -n "$SSH_KEY_FILE" ]] || die "Set UBC_SSH_KEY in .deploy-ubc.env before installing a key"

  mkdir -p "$HOME/.ssh"
  chmod 700 "$HOME/.ssh"

  if [[ ! -f "$SSH_KEY_FILE" ]]; then
    echo "Creating SSH key: $SSH_KEY_FILE"
    ssh-keygen -t ed25519 -C "${REMOTE}" -f "$SSH_KEY_FILE" -N ""
  else
    echo "SSH key already exists: $SSH_KEY_FILE"
  fi

  echo "Installing public key on ${REMOTE}. You will be prompted for the remote password once."
  ssh-copy-id \
    -i "${SSH_KEY_FILE}.pub" \
    -o PreferredAuthentications=password \
    -o PubkeyAuthentication=no \
    "$REMOTE"

  echo "Testing key-only login."
  ssh \
    -i "$SSH_KEY_FILE" \
    -o BatchMode=yes \
    -o IdentitiesOnly=yes \
    "$REMOTE" \
    "echo key-login-ok"
}

build_site() {
  need_cmd npm

  echo "Cleaning Gatsby output."
  rm -rf "$REPO_ROOT/public" "$REPO_ROOT/.cache"

  echo "Building Gatsby site."
  npm run build

  [[ -f "$REPO_ROOT/public/index.html" ]] || die "Build did not create public/index.html"
  [[ -f "$REPO_ROOT/public/rababw.html" ]] || die "Build did not copy static/rababw.html into public/"
  compgen -G "$REPO_ROOT/public/static/cvrababw*.pdf" >/dev/null || die "Build did not create public/static/cvrababw*.pdf"
}

backup_remote_site() {
  need_cmd date
  need_cmd rsync
  need_cmd ssh

  local stamp backup_path
  stamp="$(date +%Y%m%d-%H%M%S)"
  backup_path="$BACKUP_DIR/ipl-$stamp"

  if [[ -e "$backup_path" ]]; then
    backup_path="$BACKUP_DIR/ipl-$stamp-$$"
  fi

  mkdir -p "$backup_path"

  {
    echo "Source: ${REMOTE}:${REMOTE_DIR}/"
    echo "Created: $(date -Iseconds)"
  } > "$backup_path/.backup-info.txt"

  echo "Backing up current remote site to:"
  echo "  $backup_path/"

  run_rsync -rlz --no-perms --no-owner --no-group --no-times --itemize-changes -e "$(ssh_rsh)" \
    "${REMOTE}:${REMOTE_DIR}/" \
    "$backup_path/"
}

deploy_site() {
  need_cmd rsync
  need_cmd ssh

  echo "Checking remote directory exists: $REMOTE_DIR"
  run_ssh "test -d '$REMOTE_DIR'"

  echo
  echo "Previewing deploy changes. Deletes are limited to this directory only:"
  echo "  ${REMOTE}:${REMOTE_DIR}/"
  echo

  run_rsync -rlvzn --delete --filter='P /.htaccess' --no-perms --no-owner --no-group --no-times --itemize-changes -e "$(ssh_rsh)" \
    "$REPO_ROOT/public/" \
    "${REMOTE}:${REMOTE_DIR}/"

  if [[ "$DRY_RUN" == "1" ]]; then
    echo
    echo "Dry run complete. Nothing was uploaded or deleted."
    return 0
  fi

  if [[ "$ASSUME_YES" != "1" ]]; then
    echo
    read -r -p "Type 'deploy' to upload and delete only inside ${REMOTE_DIR}/: " answer
    [[ "$answer" == "deploy" ]] || die "Deploy cancelled."
  fi

  if [[ "$BACKUP_BEFORE_DEPLOY" == "1" ]]; then
    backup_remote_site
  else
    echo "Skipping remote backup."
  fi

  echo "Uploading Gatsby public/ to the UBC server."
  run_rsync -rlvz --delete --filter='P /.htaccess' --no-perms --no-owner --no-group --no-times --itemize-changes -e "$(ssh_rsh)" \
    "$REPO_ROOT/public/" \
    "${REMOTE}:${REMOTE_DIR}/"
}

need_cmd ip
require_config
start_vpn_if_needed

if [[ "$MODE" == "fetch-live-files" ]]; then
  fetch_live_files
  echo "Fetched live files into the repo."
  exit 0
fi

if [[ "$MODE" == "backup-remote" ]]; then
  backup_remote_site
  echo "Backed up remote site."
  exit 0
fi

if [[ "$MODE" == "install-ssh-key" ]]; then
  install_ssh_key
  echo "SSH key login is ready."
  exit 0
fi

if [[ "$FETCH_LIVE_FILES" == "1" ]]; then
  fetch_live_files
fi

if [[ "$BUILD_SITE" == "1" ]]; then
  build_site
else
  [[ -f "$REPO_ROOT/public/index.html" ]] || die "public/index.html does not exist"
  [[ -f "$REPO_ROOT/public/rababw.html" ]] || die "public/rababw.html does not exist"
fi

deploy_site

echo "Done."
