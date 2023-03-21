import React from "react";

export interface BurgerMenuProps {
  setShowBurgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface BurgerIconProps {
  showBurgerMenu: boolean;
  setShowBurgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
