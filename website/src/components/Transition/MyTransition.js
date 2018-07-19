import React from "react"
//import { Transition as ReactTransition } from "react-transition-group"
import { CSSTransition } from 'react-transition-group';
//import getTransitionStyle from "../../utils/getTransitionStyle"
//import { historyExitingEventType, timeout } from "../../../gatsby-browser"

class MyTransition extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CSSTransition
        {...this.props}
        classNames="example"
        timeout={{ enter: 1000, exit: 1000 }}
      />
    )
  }
}

export default MyTransition
