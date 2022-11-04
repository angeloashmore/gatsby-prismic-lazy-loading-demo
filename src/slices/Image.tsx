import { graphql } from "gatsby";
import { SliceComponentProps } from "@prismicio/react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Image({ slice }: SliceComponentProps) {
  return (
    <section>
      <GatsbyImage
        image={slice.primary.image.gatsbyImageData}
        alt={slice.primary.image.alt}
      />
    </section>
  );
}

export const fragment = graphql`
  fragment PrismicPageDataBodyImage on PrismicPageDataBodyImage {
    primary {
      image {
        gatsbyImageData(width: 500)
        alt
      }
    }
  }
`;
