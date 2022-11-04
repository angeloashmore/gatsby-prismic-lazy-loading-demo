import type { GatsbyConfig } from "gatsby";
import { PluginOptions as GatsbySourcePrismicPluginOptions } from "gatsby-source-prismic";
import { PluginOptions as GatsbyPluginPrismicPreviewsPluginOptions } from "gatsby-plugin-prismic-previews";

const repositoryName = "gatsby-lazy-load-demo";
const routes = [
  {
    type: "page",
    path: "/:uid",
  },
  {
    type: "page",
    uid: "home",
    path: "/",
  },
];

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-lazy-load-demo`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  jsxRuntime: "automatic",
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName,
        routes,
        schemas: {
          page: require("./customtypes/page.json"),
        },
      } as GatsbySourcePrismicPluginOptions,
    },
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        repositoryName,
        routes,
      } as GatsbyPluginPrismicPreviewsPluginOptions,
    },
  ],
};

export default config;
