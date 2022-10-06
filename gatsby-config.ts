import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
<<<<<<< HEAD
    siteMetadata: {
        title: `handbook`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-material-ui',
        // 'gatsby-plugin-mui-emotion',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'N/A',
            },
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
    ],
=======
  siteMetadata: {
    title: `handbook`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-react-helmet", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }]
>>>>>>> 286e4fcb33f3568eccfa51ada913bad12ec35fac
};

export default config;
