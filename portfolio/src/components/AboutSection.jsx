import React, { Suspense } from "react";
const LazyImage = React.lazy(() => import("./LazyImage"));

const AboutSection = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyImage src="/path-to-image.webp" alt="About me" />
    <p>
      I'm a seasoned software engineer with a decade of experience, specializing in financial technology...
    </p>
  </Suspense>
);

export default AboutSection;
