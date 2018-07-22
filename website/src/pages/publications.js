import React from 'react'
//import Link from 'gatsby-link'
import Publication from "../components/Content/Publication/Publication"

class PublicationPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { s: 1 }
  }

  render() {
    const data = this.props.data.allPublicationsCsv.edges
    return (
      <div>
        <h3>REFEREED PUBLICATIONS</h3>
        <h4>Journals</h4>
        {data.map((row,i) => (
          <Publication
            title={row.node.title}
            authors={row.node.authors}
            journal={row.node.journal}
          />
        ))}
      </div>
    )
  }
}


export default PublicationPage


export const query = graphql
`
  query PublicationsQuery {
    allPublicationsCsv {
      edges {
        node {
          title
          authors
          journal
        }
      }
    }
  }
`;
