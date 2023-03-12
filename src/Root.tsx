import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import BurgerMenu from "./components/burger/BurgerMenu";

function Root() {
  const [showBurgerMenu, setShowBurgerMenu] = useState<boolean>(false);

  return (
    <>
      <GlobalStyles />
      <Navbar
        showBurgerMenu={showBurgerMenu}
        setShowBurgerMenu={setShowBurgerMenu}
      />
      {showBurgerMenu ? (
        <BurgerMenu setShowBurgerMenu={setShowBurgerMenu} />
      ) : null}
      <Outlet />
    </>
  );
}

export default Root;
