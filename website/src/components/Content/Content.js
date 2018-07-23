import React from "react"
import cx from "classnames"

import styles from "./content.module.css"

class Content extends React.Component {
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
    // var title_height = 5.5 * this.getRootElementFontSize();
    var title_height = 5.5 * 16;

    var containerclass
    containerclass = cx(styles.container, {
      [styles.addpadding]: (this.props.yscroll >= title_height && this.props.winwidth > 992),
      [styles.consttoppadding]: (this.props.winwidth <= 992),
    });

    return (
      <div className={containerclass}>
        {this.props.children}
      </div>
    )
  }
}


export default Content
