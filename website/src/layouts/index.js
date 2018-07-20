import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

import Header from "../components/Header/Header"
import NavTitle from "../components/Header/NavTitle/NavTitle"
import Content from "../components/Content/Content"
import Footer from "../components/Footer/Footer"
//import Transition from "../components/Transition/MyTransition"

class MainLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { Yscroll: 0 }
  }
  updateYscroll = () => {
    var w = window;
    var y = w.scrollY
    this.setState({ Yscroll: y });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.updateYscroll);
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateYscroll);
  };

  render() {
    return (
      <div>
        <Helmet
          title="Rabab Kreidieh Ward"
          meta={[
            { name: 'description', content: 'Professor Emeritus, Electrical and Computer Engineering' },
            { name: 'keywords', content: 'Professor, UBC, Image Processing, Signal Processing'},
          ]}
        />
        <Header yscroll={this.state.Yscroll}/>
          <Content>
            {this.props.children()}
          </Content>
        <Footer/>
      </div>
    )
  }
};

MainLayout.propTypes = {
  children: PropTypes.func,
}

export default MainLayout

// <Search/>
// <Warning content="The deadline for regular and special session papers has been extended to April 25"/>
