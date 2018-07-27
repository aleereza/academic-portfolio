import React from "react"
import NavTitle from "./NavTitle/NavTitle"
import styles from "./header.module.css"


class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.container}>
        <NavTitle yscroll={this.props.yscroll} winwidth={this.props.winwidth}/>
      </div>
    )
  }
}


export default Header
