import React from "react";
import styles from "./publication.module.css";

class Publication extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <span>{this.props.number}. </span>
        <span className={styles.authors}>{this.props.authors}</span>
        <span>, </span>
        {this.props.link ? (
          <a
            href={this.props.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.titleLink}
          >
            {this.props.title}
          </a>
        ) : (
          <span className={styles.title}>{this.props.title}</span>
        )}
        <span>, </span>
        <span className={styles.journal}>{this.props.journal}</span>
      </div>
    );
  }
}

export default Publication;
