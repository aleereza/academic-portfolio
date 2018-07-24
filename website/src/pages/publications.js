import React from 'react'
//import Link from 'gatsby-link'
import Publication from "../components/Content/Publication/Publication"

class PublicationPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { s: 1 }
  }

  render() {
    const data = this.props.data.allPublicationsRefereedJournalsCsv.edges
    return (
      <div>
        <h2>REFEREED PUBLICATIONS</h2>
        <h3>Journals</h3>
        {data.map((row,i) => (
          <Publication key={i}
            number={i+1}
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
    allPublicationsRefereedJournalsCsv {
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
