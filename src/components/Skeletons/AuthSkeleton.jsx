import React from "react";
import ContentLoader from "react-content-loader";

export const AuthSkeleton = () => (
  <ContentLoader
    speed={2}
    width={180}
    height={30}
    viewBox="0 0 180 30"
    backgroundColor="#f3f3f3"
    foregroundColor="#C3C3C3"
  >
    <rect x="0" y="0" rx="100%" ry="100%" radius={"100%"} width="30" height="30" />
    <rect x="40" y="0" rx="6" ry="6" width="140" height="30" />
  </ContentLoader>
);
