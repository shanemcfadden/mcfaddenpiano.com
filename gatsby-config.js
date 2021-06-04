const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Shane McFadden - Collaborative Pianist',
    description:
      'A classical pianist, accompanist, and vocal coach based in Chicago.',
    author: 'Shane McFadden',
    siteUrl: 'https://www.mcfaddenpiano.com',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: path.join(__dirname, 'src', 'markdown-pages'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: path.join(__dirname, 'src', 'data'),
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-7B5F2MF19Y`,
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/success'],
      },
    },
    'gatsby-plugin-robots-txt',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
  ],
};
