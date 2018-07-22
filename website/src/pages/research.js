import React from 'react'

export default ({ data }) => (
  <div>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>something</p>
  </div>
);

export const query = graphql
`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
