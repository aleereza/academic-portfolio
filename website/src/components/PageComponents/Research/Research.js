import React from 'react'
import styles from "./research.module.css"

class Research extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className={styles.container}>
        <h3 className={styles.title}>{this.props.title}</h3>
        <p>{this.props.content}
        </p>
        {this.props.children}
      </div>
    );
  }
}

export default Research
