import React from "react";
import styles from "./publication.module.css"

class Publication extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <span className={styles.authors}>{this.props.authors}</span>
        <span>, </span>
        <span className={styles.title}>{this.props.title}</span>
        <span>, </span>
        <span className={styles.journal}>{this.props.journal}</span>
      </div>
    )
  }
}

export default Publication
