import React from 'react'
import Link from 'gatsby-link'
import styles from "./navtitle.module.css"
import NavTitleLink from "./NavTitleLink/NavTitleLink"
//import "./navtitle.css"

//test---
//import CSSTransition from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
import { TransitionGroup } from 'react-transition-group';
import MyTransition from "../../Transition/MyTransition"
//test---

class NavTitle extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // var component_opacity
    // if (this.props.yscroll < 300){
    //   component_opacity = 1;
    // }
    // else {
    //   component_opacity = 0;
    // }

    return (
      <div className={styles.container}>
        <div className={styles.titlecontainer}>
          <Link to="/">
            <h1>Rabab Kreidieh Ward</h1>
            <p>Professor Emeritus, Electrical and Computer Engineering</p>
          </Link>
        </div>
        <div className={styles.navcontainer}>
          <NavTitleLink to="/me">About Me</NavTitleLink>
          <NavTitleLink to="/publications">Publications</NavTitleLink>
          <NavTitleLink to="/research">Research</NavTitleLink>
          <NavTitleLink to="/teaching">Teaching</NavTitleLink>
        </div>
      </div>
    )
  }
}

// <nav>
// <NavTitleLink to="/">Home</NavTitleLink>
// <NavTitleLink to="/me">About Me</NavTitleLink>
// <NavTitleLink to="/research">Research</NavTitleLink>
// <NavTitleLink to="/publications">Publications</NavTitleLink>
// <NavTitleLink to="/teaching">Teaching</NavTitleLink>
// </nav>

export default NavTitle
