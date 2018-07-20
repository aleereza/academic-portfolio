import React from 'react'
//import Link from 'gatsby-link'

class PublicationPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { s: 1 }
  }

  render() {
    return (
      <div>
        <h3>Publicatio</h3>
        <p>This page contains "Publication"
        </p>
      </div>
    )
  }
}


export default PublicationPage
