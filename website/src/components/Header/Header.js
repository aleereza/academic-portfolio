import React from "react"

import styles from "./header.module.css"

import NavTitle from "./NavTitle/NavTitle"
import NavTitleLink from "./NavTitleLink/NavTitleLink"
import NavSlide from "./NavSlide/NavSlide"
import NavSlideLink from "./NavSlideLink/NavSlideLink"
import Title from "./Title/Title"

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.navslide_container}>
          <NavSlide>
            <NavSlideLink to="/">Home</NavSlideLink>
            <NavSlideLink to="/biography">Biography</NavSlideLink>
            <NavSlideLink to="/recognition">Recognition</NavSlideLink>
            <NavSlideLink to="/activities">Professional Activities</NavSlideLink>
            <NavSlideLink to="/publications">Publications</NavSlideLink>
            <NavSlideLink to="/research">Research</NavSlideLink>
            <NavSlideLink to="/students">Mentoring and Students</NavSlideLink>
          </NavSlide>
        </div>

        <div className={styles.navtitle_container}>
          <Title/>
          <NavTitle yscroll={this.props.yscroll}>
            <NavTitleLink to="/">Home</NavTitleLink>
            <NavTitleLink to="/biography">Biography</NavTitleLink>
            <NavTitleLink to="/recognition">Recognition</NavTitleLink>
            <NavTitleLink to="/activities">Professional Activities</NavTitleLink>
            <NavTitleLink to="/publications">Publications</NavTitleLink>
            <NavTitleLink to="/research">Research</NavTitleLink>
            <NavTitleLink to="/students">Mentoring and Students</NavTitleLink>
          </NavTitle>
        </div>

      </div>
    )
  }
}


export default Header
