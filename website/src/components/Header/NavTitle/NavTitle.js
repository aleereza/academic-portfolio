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
    //test---
    this.state = {opacity: 1};
  }

  //test---
  handleAdd() {
    this.setState({in: true});
  }

  handleRemove(i) {
    this.setState({in: false});
  }
  //test---

  render() {
    var component_opacity
    if (this.props.yscroll < 300){
      component_opacity = 1;
    }
    else {
      component_opacity = 0;
    }

    var disp
    var flexg_title, flexg_nav
    if (this.props.yscroll > 80){
      disp="flex"
      flexg_title = 1
      flexg_nav = 1
    }else{
      disp="block"
      flexg_title = 0
      flexg_nav = 0
    }

    return (
      <div className={styles.container} style={{opacity: component_opacity, display: disp}}>
        <div className={styles.titlecontainer} style={{flexGrow: flexg_title, transition: "flex-grow 2s"}}>
          <h1>Rabab Kreidieh Ward</h1>
          <p>Professor Emeritus, Electrical and Computer Engineering</p>
        </div>
        <div className={styles.navcontainer} style={{flexGrow: flexg_nav}}>
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
