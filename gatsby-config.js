module.exports = {
    siteMetadata: {
      title: `The Staycation Collection`,
        siteUrl: `https://www.staycationcolletion.com`,
    },
    plugins: [
      'gatsby-plugin-postcss',
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`, // Needed for dynamic images
      `gatsby-plugin-fontawesome-css`,
    ]
}