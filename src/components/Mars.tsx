import React from "react";
import { Link } from "react-router-dom";

function Mars() {
  return (
    <div>
      Mars
      <Link to="/earth">Earth</Link>
    </div>
  );
}

export default Mars;
