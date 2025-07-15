import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./index.css";

import Header from "../components/Header/Header";
import NavTitle from "../components/Header/NavTitle/NavTitle";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
//import Transition from "../components/Transition/MyTransition"

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Window: 0, Yscroll: 0, Width: 0, Height: 0 };
  }
  updateYscroll = () => {
    if (typeof window !== "undefined") {
      var w = window;
      // var w = this.state.Window
      var y = w.scrollY;
      this.setState({ Yscroll: y });
    }
  };
  updateDimensions = () => {
    if (typeof window !== "undefined") {
      var w = window;
      // var w = this.state.Window
      var width = w.innerWidth;
      var height = w.innerHeight;
      this.setState({ Width: width, Height: height });
    }
  };
  componentWillMount() {
    // this.setState({Window: window})
    this.updateDimensions();
  }
  componentDidMount() {
    window.addEventListener("scroll", this.updateYscroll);
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateYscroll);
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div>
        <Helmet
          title="Rabab Kreidieh Ward"
          meta={[
            {
              name: "description",
              content:
                "Professor Emeritus, Electrical and Computer Engineering",
            },
            {
              name: "keywords",
              content: "Professor, UBC, Image Processing, Signal Processing",
            },
          ]}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans|Noto+Serif"
            rel="stylesheet"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Helmet>
        <Header yscroll={this.state.Yscroll} winwidth={this.state.Width} />
        <Content yscroll={this.state.Yscroll} winwidth={this.state.Width}>
          {this.props.children()}
        </Content>
        <Footer />
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.func,
};

export default MainLayout;

// export const query = graphql`
//   query LayoutQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `

// <Search/>
// <Warning content="The deadline for regular and special session papers has been extended to April 25"/>
