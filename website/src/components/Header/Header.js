import React from "react"
import NavTitle from "./NavTitle/NavTitle"
import NavTopfix from "./NavTopfix/NavTopfix"


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
      <div>
      <NavTitle/>
      <NavTopfix/>
      <p>yscroll: {this.props.yscroll}</p>
      <p>s: {this.state.s}</p>

      </div>
    )
  }
}


export default Header
