import styled from "styled-components";
import { BurgerIconProps } from "../type/burgerProps";
import { BurgerSvgProps } from "../type/stylesType";

function BurgerIcon({ showBurgerMenu, setShowBurgerMenu }: BurgerIconProps) {
  return (
    <Svg
      showBurgerMenu={showBurgerMenu}
      onClick={() => setShowBurgerMenu((value) => !value)}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="17"
    >
      <g>
        <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
      </g>
    </Svg>
  );
}

export default BurgerIcon;

const Svg = styled.svg<BurgerSvgProps>`
  display: none;
  fill: white;
  opacity: ${({ showBurgerMenu }) => (showBurgerMenu ? "0.25" : "")};

  @media (max-width: 680px) {
    display: flex;
    align-self: center;
  }
`;
