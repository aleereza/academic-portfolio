import React from 'react'
import Link from 'gatsby-link'
import styles from "./navtitle.module.css"
import NavTitleLink from "./NavTitleLink/NavTitleLink"

class NavTitle extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <nav>
        <NavTitleLink to="/">Home</NavTitleLink>
        <NavTitleLink to="/me">About Me</NavTitleLink>
        <NavTitleLink to="/research">Research</NavTitleLink>
        <NavTitleLink to="/publications">Publications</NavTitleLink>
        <NavTitleLink to="/teaching">Teaching</NavTitleLink>
      </nav>
    )
  }
}

export default NavTitle
