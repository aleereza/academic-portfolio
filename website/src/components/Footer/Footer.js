import React from "react"
import styles from "./footer.module.css"

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.footerdiv}>
        <p>Footer data ...</p>
        </div>
      </div>
    )
  }
}


export default Footer
