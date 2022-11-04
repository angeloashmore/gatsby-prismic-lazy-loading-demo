import { graphql } from "gatsby";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export default function Text({ slice }: SliceComponentProps) {
  return (
    <section>
      <PrismicRichText field={slice.primary.text.richText} />
    </section>
  );
}

export const fragment = graphql`
  fragment PrismicPageDataBodyText on PrismicPageDataBodyText {
    primary {
      text {
        richText
      }
    }
  }
`;
