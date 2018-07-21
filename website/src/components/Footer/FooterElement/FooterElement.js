import React from "react"
import styles from "./footerelement.module.css"

import email_icon from "../../../images/icons/email.svg"

class FooterElement extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col1}>
            <img className={styles.icon} src={this.props.icon}/>
          </div>
          <div className={styles.col2}>
            <p>{this.props.children}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default FooterElement
