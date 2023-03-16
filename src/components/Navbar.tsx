import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import { LinkContainerProps } from "../type/stylesType";
import { NavBarProps } from "../type/navBarProps";
import BurgerIcon from "./burger/BurgerIcon";

function Navbar({ showBurgerMenu, setShowBurgerMenu }: NavBarProps) {
  const { planetsData } = useFetch();
  const route = useLocation().pathname.slice(1);

  return (
    <NavbarContainer>
      <h1>the planets</h1>

      <PlanetsContainer>
        {planetsData.map((planet) => (
          <LinkContainer
            key={planet.name}
            planet={planet.name}
            route={route}
            color={planet.color}
          >
            <span></span>
            <Link to={`${planet.name}`}>{planet.name}</Link>
          </LinkContainer>
        ))}
      </PlanetsContainer>

      <BurgerIcon
        showBurgerMenu={showBurgerMenu}
        setShowBurgerMenu={setShowBurgerMenu}
      />
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 86px;
  padding: 0px 41px 0px 32px;
  background: transparent;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);

  h1 {
    font-family: "Antonio", sans-serif;
    font-weight: 400;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -1.05px;
    text-transform: uppercase;
    align-self: center;
  }

  @media (max-width: 775px) {
    flex-direction: column;
    height: auto;

    h1 {
      margin-top: 32px;
    }
  }

  @media (max-width: 680px) {
    flex-direction: row;
    height: 68px;
    padding: 0px 24px 0px 24px;

    h1 {
      margin-top: 0;
    }
  }
`;

const PlanetsContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 33px;

  a {
    font-family: "League Spartan";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 25px;
    text-transform: uppercase;
  }

  @media (max-width: 775px) {
    margin-top: 39px;
    margin-bottom: 27px;
  }

  @media (max-width: 680px) {
    display: none;
  }
`;

const LinkContainer = styled.div<LinkContainerProps>`
  display: flex;
  flex-direction: column;

  span {
    width: 100%;
    height: 4px;
    margin-bottom: 28px;
    background: ${({ planet, route, color }) =>
      planet === route ? color : "transparent"};
  }

  a {
    color: white;
    opacity: ${({ planet, route }) => (planet === route ? 1 : 0.75)};
  }

  @media (min-width: 776px) {
    :hover {
      span {
        background: ${({ color }) => color};
      }

      a {
        opacity: 1;
      }
    }
  }
`;
