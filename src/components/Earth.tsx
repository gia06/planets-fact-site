import React from "react";
import { Link, Outlet } from "react-router-dom";

function Earth() {
  return (
    <div>
      Earth
      <Link to="/mercury">Mercury</Link>
      <Outlet />
    </div>
  );
}

export default Earth;
