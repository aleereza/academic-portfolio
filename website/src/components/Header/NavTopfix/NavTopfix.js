import React from 'react'
import Link from 'gatsby-link'
import styles from "./navtopfix.module.css"

import '../../../layouts/bootstrap.min.css'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";

class NavTopfix extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return <div>
        <Navbar color="dark" light>
          <NavbarBrand to="/" className="mr-auto">
            <img src="/static/instar-logo-s.png" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link to="/">
                  <Button color="primary" block>
                    Indoor Cameras
                  </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/page-2/">
                  <Button color="primary" block>
                    Outdoor Cameras
                  </Button>
                </Link>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/mpolinowski/gatsby-reactstrap" target="_blank">
                  <Button color="danger" block>
                    Github Repository
                  </Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>;
  }
}

export default NavTopfix
