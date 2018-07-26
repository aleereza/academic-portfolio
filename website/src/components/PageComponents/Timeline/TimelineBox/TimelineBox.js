import React from 'react'
import styles from "./timelinebox.module.css"

class TimelineBox extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className={styles.timelinebox}>
        <div className={styles.year}>
          <p>{this.props.year}</p>
        </div>
          <div className={styles.content}>
            <p>{this.props.content}</p>
          </div>
      </div>
    );
  }
}

export default TimelineBox
