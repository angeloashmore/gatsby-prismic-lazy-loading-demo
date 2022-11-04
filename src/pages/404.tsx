import { withPrismicUnpublishedPreview } from "gatsby-plugin-prismic-previews";

function NotFoundPage() {
  return <p>Not found</p>;
}

export default withPrismicUnpublishedPreview(NotFoundPage);
