import React from "react";
import { Link, Outlet } from "react-router-dom";

const layout = () => {
  return (
    <div>
      <h1>Layout of Policy</h1>
      <div style={divStyle}>
        <Link to="term">Term</Link>
        <Link to="service">Service</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default layout;

const divStyle = {
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "row",
} as const;
