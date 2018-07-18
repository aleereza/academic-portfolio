import React from 'react'
import Link from 'gatsby-link'
import styles from "./navtitlelink.module.css"

const NavTitleLink = props =>
  <div>
    <Link to={props.to}>
      {props.children}
    </Link>
  </div>

export default NavTitleLink
