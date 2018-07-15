import React from "react"

import Header from "../components/Header/Header"
import NavTitle from "../components/Header/NavTitle/NavTitle"


class Index extends React.Component {
  constructor() {
    super()
    this.state = { Yscroll: 0 }
  }
  updateYscroll = () => {
    var w = window;
    var y = w.scrollY
    this.setState({ Yscroll: y });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.updateYscroll);
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateYscroll);
  };

  render() {
    return (
      <Header yscroll={this.state.Yscroll}/>
    )
  }
}

export default Index
