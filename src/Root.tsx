import { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import BurgerMenu from "./components/burger/BurgerMenu";
import { Helmet } from "react-helmet";

function Root() {
  const [showBurgerMenu, setShowBurgerMenu] = useState<boolean>(false);

  return (
    <>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio&family=League+Spartan:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
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
