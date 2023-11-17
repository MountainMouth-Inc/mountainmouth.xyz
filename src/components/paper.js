import React from "react";

const Paper = ({ children }) => (
  <div className="row" style={{ paddingLeft: "3em", paddingRight: "3em" }}>
    <div className="paper container">{children}</div>
  </div>
);

export default Paper;
