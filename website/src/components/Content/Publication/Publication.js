import React from "react";

class Publication extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <span>{this.props.title}</span>
        <span>{this.props.authors}</span>
        <span>{this.props.journal}</span>
      </div>
    )
  }
}

export default Publication
