import React from "react";
import ContentLoader from "react-content-loader";

export const TestsGridSkeleton = () => (
  <ContentLoader
    speed={2}
    width={270}
    height={330}
    viewBox="0 0 270 330"
    backgroundColor="#f3f3f3"
    foregroundColor="#C3C3C3"
  >
    <rect x="0" y="0" rx="16" ry="16" width="270" height="330" />
  </ContentLoader>
);
