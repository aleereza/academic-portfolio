import React from 'react'
import Link from 'gatsby-link'
import styles from "./navtitle.module.css"
import NavTitleLink from "./NavTitleLink/NavTitleLink"
import NavSlideLink from "./NavSlideLink/NavSlideLink"
import cx from "classnames";

import MenuButton from "./MenuButton/MenuButton"
import NavSlide from "./NavSlide/NavSlide"

import logo from "../../../images/UBC-logo-white.png"


class NavTitle extends React.Component {
  constructor(props) {
    super(props)
  }


  // getRootElementFontSize() {
  // // Returns a number
  //   return parseFloat(
  //     // of the computed font-size, so in px
  //     getComputedStyle(
  //       // for the root <html> element
  //       document.documentElement
  //     ).fontSize
  //   );
  // }


  render() {
    if (this.props.winwidth > 992)

    {
      // var title_height = 5.5 * this.getRootElementFontSize();
      var title_height = 5.5 * 16;

      // var navbarclass
      // if (this.props.yscroll >= title_height){
      //   navbarclass = styles.sticky
      // }
      // else {
      //   navbarclass = styles.navcontainer
      // }

      let navbarclass = cx(styles.navcontainer, {
        [styles.sticky]: (this.props.yscroll >= title_height),
      });

      return (
        <div className={styles.container}>
          <div className={styles.titlecontainer}>
            <div className={styles.namecontainer}>
              <Link to="/">
                <h1>Rabab Kreidieh Ward</h1>
                <p className={styles.sub}>Professor Emeritus, Electrical and Computer Engineering</p>
              </Link>
            </div>
            <div className={styles.logocontainer}>
              <img className={styles.logo} src={logo}/>
            </div>
          </div>
          <div className={navbarclass}>
            <NavTitleLink to="/biography">Biography</NavTitleLink>
            <NavTitleLink to="/awards">Awards and Distinctions</NavTitleLink>
            <NavTitleLink to="/activities">Professional Activites</NavTitleLink>
            <NavTitleLink to="/publications">Publications</NavTitleLink>
            <NavTitleLink to="/research">Research</NavTitleLink>
            <NavTitleLink to="/students">Mentoring and Students</NavTitleLink>
          </div>
        </div>
      )
    }
    else {
      return (
        <NavSlide>
            <NavSlideLink to="/biography">Biography</NavSlideLink>
            <NavSlideLink to="/awards">Awards and Distinctions</NavSlideLink>
            <NavSlideLink to="/activities">Professional Activites</NavSlideLink>
            <NavSlideLink to="/publications">Publications</NavSlideLink>
            <NavSlideLink to="/research">Research</NavSlideLink>
            <NavSlideLink to="/students">Mentoring and Students</NavSlideLink>
        </NavSlide>
      )
    }
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
