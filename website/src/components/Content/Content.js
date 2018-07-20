import React from "react"
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from "./content.module.css"

//import NavTitle from "../components/Header/NavTitle/NavTitle"


class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    )
  }
}


export default Content
