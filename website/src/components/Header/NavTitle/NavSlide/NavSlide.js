import React from 'react'
import styles from "./navslide.module.css"
import cx from "classnames";
import MenuButton from "../MenuButton/MenuButton"
import Link from 'gatsby-link'
import logo from "../../../../images/UBC-logo-white.png"

class NavSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  };
  ChangeNav = () => {
    this.setState(
    (prevState)=>({open: !prevState.open})
    )
  };
  render() {
    // var containerClasses=["sidenav_container"];
    // if (this.state.open){
    //   containerClasses.push("open")
    // }

    let className = cx(styles.sidenav_container, {
      [styles.open]: this.state.open,
    });
    return (
      <div style={{position: "fixed", top: "0", left:"0", width:"100%", height:"100%", padding: "0", margin: "0"}}>
        <div className={styles.navbar}>
          <div className={styles.logocontainer}>
            <img className={styles.logo} src={logo}/>
          </div>
          <div className={styles.title}>
            <Link to="/">
              <h1>Rabab Kreidieh Ward</h1>
              <p>Professor Emeritus, Electrical and Computer Engineering</p>
            </Link>
          </div>
          <div className={styles.menubutton} onClick={() => this.ChangeNav()}>
            <MenuButton state={!this.state.open}/>
          </div>
        </div>
        <div className={className}>
          <div className={styles.sidenav} onClick={() => this.ChangeNav()}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default NavSlide
