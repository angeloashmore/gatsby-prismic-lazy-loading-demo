import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";

const GatsbyLinkShim = ({ href, ...props }) => {
  return <GatsbyLink to={href} {...props} />;
};

const componentResolver = {
  page: React.lazy(() => import("./src/pages/{PrismicPage.url}")),
};

export const wrapRootElement = ({ element }) => (
  <PrismicProvider internalLinkComponent={GatsbyLinkShim}>
    <PrismicPreviewProvider
      repositoryConfigs={[
        {
          repositoryName: "gatsby-lazy-load-demo",
          componentResolver,
        },
      ]}
    >
      {element}
    </PrismicPreviewProvider>
  </PrismicProvider>
);
