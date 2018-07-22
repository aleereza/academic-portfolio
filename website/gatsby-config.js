module.exports = {
  // Note: it must *not* have a trailing slash.
  pathPrefix: '/rababw',
  siteMetadata: {
    title: 'Rabab Kreidieh Ward',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
  ],
};
