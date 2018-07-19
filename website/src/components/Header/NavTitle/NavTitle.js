import React from 'react'
import Link from 'gatsby-link'
import styles from "./navtitle.module.css"
import NavTitleLink from "./NavTitleLink/NavTitleLink"
import "./navtitle.css"

//test---
//import CSSTransition from 'react-transition-group';
import { TransitionGroup } from 'react-transition-group';
import MyTransition from "../../Transition/MyTransition"
//test---

class NavTitle extends React.Component {
  constructor(props) {
    super(props)
    //test---
    this.state = {items: ['hello', 'world', 'click', 'me']};
    this.handleAdd = this.handleAdd.bind(this);
    //test---
  }

  //test---
  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }
  //test---

  render() {
    //test---
    const items = this.state.items.map((item, i) => (
      <MyTransition key={i}>
        <div key={item} onClick={() => this.handleRemove(i)}>
          {item}
        </div>
      </MyTransition>
    ));
    //test---

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <TransitionGroup>
        {items}
        </TransitionGroup>
      </div>
    )
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
