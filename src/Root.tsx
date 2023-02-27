import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function Root() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Outlet />
    </>
  );
}

export default Root;
