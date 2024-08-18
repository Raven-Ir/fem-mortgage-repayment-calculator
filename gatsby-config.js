/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `mortgage-calculator`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss",
    {
      resolve: 'gatsby-plugin-manifest', 
      options: {
        "icon": "src/images/favicon-32x32.png"
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/
        }
      }
    }
  ]
};