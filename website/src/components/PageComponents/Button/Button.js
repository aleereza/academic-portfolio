import React from 'react'
import Link from 'gatsby-link'
import styles from "./button.module.css"

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.container}>
        <a href={this.props.to} download className={styles.button}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

export default Button
