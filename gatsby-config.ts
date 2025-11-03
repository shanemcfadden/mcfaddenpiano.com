import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Shane McFadden - Collaborative Pianist",
    description:
      "A classical pianist, accompanist, and vocal coach based in Chicago.",
    siteUrl: "https://www.mcfaddenpiano.com",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `markdown`,
        path: `${__dirname}/src/data`,
      },
    },
    "gatsby-plugin-mdx",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
  ],
};

export default config;
