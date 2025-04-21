import React from "react";

const SmallMenuItems = () => {
  if (window.location.href.includes("/watch")) {
    return null;
  }

  return <div>SmallMenuItems</div>;
};

export default SmallMenuItems;
