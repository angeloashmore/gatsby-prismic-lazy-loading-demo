import { graphql, PageProps } from "gatsby";
import { SliceZone } from "@prismicio/react";

import { components } from "../slices";

export default function Page({ data }: PageProps<Queries.PageQuery>) {
  return (
    <main>
      <SliceZone slices={data.prismicPage?.data.body} components={components} />
    </main>
  );
}

export const query = graphql`
  query Page($id: String!) {
    prismicPage(id: { eq: $id }) {
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
