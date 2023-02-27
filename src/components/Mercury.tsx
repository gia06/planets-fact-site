import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Mercury() {
  const navigate = useNavigate();

  return (
    <div>
      Mercury
      {/* <button onClick={() => navigate("/earth")}>move to about</button> */}
      <Link to="/mars">Mars</Link>
    </div>
  );
}

export default Mercury;
