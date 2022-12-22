import React from "react";
import ContentLoader from "react-content-loader";

const Sceleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="126" r="120" />
    <rect x="10" y="281" rx="10" ry="10" width="260" height="20" />
    <rect x="7" y="318" rx="0" ry="0" width="268" height="70" />
    <rect x="0" y="414" rx="10" ry="10" width="103" height="35" />
    <rect x="146" y="404" rx="30" ry="30" width="127" height="56" />
  </ContentLoader>
);

export default Sceleton;
