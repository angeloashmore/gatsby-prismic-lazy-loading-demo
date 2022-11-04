import { graphql, PageProps } from "gatsby";
import { SliceZone } from "@prismicio/react";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

import { components } from "../slices";

function Page({ data }: PageProps<Queries.PageQuery>) {
  return (
    <main>
      <SliceZone slices={data.prismicPage?.data.body} components={components} />
    </main>
  );
}

export default withPrismicPreview(Page);

export const query = graphql`
  query Page($id: String!) {
    prismicPage(id: { eq: $id }) {
      _previewable
      data {
        title {
          text
        }
        body {
          ... on PrismicSlice {
            id
            slice_type
          }
          ...PrismicPageDataBodyHeavyPayload
          ...PrismicPageDataBodyImage
          ...PrismicPageDataBodyText
        }
      }
    }
  }
`;
