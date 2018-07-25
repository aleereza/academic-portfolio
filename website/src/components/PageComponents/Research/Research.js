import React from 'react'
import styles from "./research.module.css"

class Research extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className={styles.container}>
        <h4 className={styles.title}>{this.props.title}</h4>
        <p>{this.props.content}
        </p>
        {this.props.children}
      </div>
    );
  }
}

export default Research
