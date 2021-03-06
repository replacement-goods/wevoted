module.exports = {
  siteMetadata: {
    title: `We Voted`,
    description: `Great home products unseat terrible politicians`,
    author: `@wevotedofficial`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: 'src/images/wevoted-checkmark-800x800.png',
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-W3TPBL5`,
        includeInDevelopment: false,
        defaultDataLayer: { platform: "web" },
      },
    },
  ],
}
