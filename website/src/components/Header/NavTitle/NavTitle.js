import React from 'react'

import styles from "./navtitle.module.css"

import cx from "classnames";

class NavTitle extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
      // var title_height = 5.5 * this.getRootElementFontSize();
    var title_height = 5.5 * 16;

    let navbarclass = cx(styles.navcontainer, {
      [styles.sticky]: (this.props.yscroll >= title_height),
    });

    return (
      <div className={styles.container}>
        <div className={navbarclass}>
          <div className={styles.navdiv}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default NavTitle
