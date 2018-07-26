import React from 'react'
import Link from 'gatsby-link'
import styles from "./button.module.css"

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <a href={this.props.to} download className={styles.button}>
          {this.props.children}
        </a>
    );
  }
}

export default Button
