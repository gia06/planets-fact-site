import React from "react";

export interface NavBarProps {
  showBurgerMenu: boolean;
  setShowBurgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
