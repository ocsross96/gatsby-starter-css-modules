module.exports = {
  siteMetadata: {
    title: `Cost guides`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-plugin-module-local-ident-name`,
      options: {
        localIdentName: "[local]-[hash:base64:5]",
        includeSASS: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    }
  ]
};
