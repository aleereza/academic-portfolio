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
    this.state = {title_height : 0}
    // this.titlecontainer = React.createRef();
  }

  componentDidMount(){

    // var height = this.titlecontainer.current.height();
    var height = this.refs.titlecontainer.height();
    this.setState({title_height : height})
  }



  render() {

    var title_height = this.state.height
    var navbarclass
    if (this.props.yscroll > title_height){
      navbarclass = styles.sticky
    }
    else {
      navbarclass = styles.navcontainer
    }

    return (
      <div className={styles.container}>
        <div className={styles.titlecontainer} ref="titlecontainer">
          <Link to="/">
            <h1>Rabab Kreidieh Ward</h1>
            <p>Professor Emeritus, Electrical and Computer Engineering</p>
          </Link>
        </div>
        <div className={navbarclass}>
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
