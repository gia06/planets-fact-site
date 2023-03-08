import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import BurgerMenu from "./components/BurgerMenu";

function Root() {
  const [showBurgerMenu, setShowBurgerMenu] = useState<boolean>(false);

  return (
    <>
      <GlobalStyles />
      <Navbar setShowBurgerMenu={setShowBurgerMenu} />
      <Outlet />
      {showBurgerMenu ? <BurgerMenu /> : null}
    </>
  );
}

export default Root;
