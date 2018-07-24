import React from 'react'
import Link from 'gatsby-link'

import styles from "./tablerow4.module.css"
//table row for 4 column table

class TableRow4 extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <tr className={styles.container}>
        <td>{this.props.c1}</td>
        <td>{this.props.c2}</td>
        <td>{this.props.c3}</td>
        <td>{this.props.c4}</td>
      </tr>
    );
  }
}

export default TableRow4
