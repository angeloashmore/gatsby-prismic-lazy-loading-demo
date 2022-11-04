import * as React from "react";

export const components = {
  text: React.lazy(() => import("./Text")),
  image: React.lazy(() => import("./Image")),
  heavy_payload: React.lazy(() => import("./HeavyPayload")),
};
