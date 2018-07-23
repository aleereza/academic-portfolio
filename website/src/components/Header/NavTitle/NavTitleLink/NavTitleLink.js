import React from 'react'
import Link from 'gatsby-link'
import styles from "./navtitlelink.module.css"

class NavTitleLink extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {active: false, change: false};
  }

  render() {
    // if (this.props.active && this.props.change){
    //   this.setState({})
    // }
    return(
      <div className={styles.container}>
        <Link to={this.props.to}>
          <div className={styles.innercontainer}>
            <p className={styles.link}>
              {this.props.children}
            </p>
          </div>
        </Link>
      </div>

    )
  }
}

export default NavTitleLink
