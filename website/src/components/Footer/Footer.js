import React from "react"
import styles from "./footer.module.css"

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.footercontainer}>
        <p>Footer data ...</p>
      </div>
    )
  }
}


export default Footer
