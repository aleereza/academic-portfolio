import React from "react"
import NavTitle from "./NavTitle/NavTitle"
import NavTopfix from "./NavTopfix/NavTopfix"
import styles from "./header.module.css"


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { s: 1 }
    //s=1: NavTitle
    //s=2: NavTopfix
    //s=3: NavSlide
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
