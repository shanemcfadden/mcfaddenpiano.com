const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'mcfaddenpiano.com',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'markdown-pages',
    //     path: path.join(__dirname, 'src', 'markdown-pages'),
    //   },
    // },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
  ],
};
