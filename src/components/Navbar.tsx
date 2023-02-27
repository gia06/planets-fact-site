import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../data/data.json";

function Navbar() {
  return (
    <>
      <NavbarContainer>
        <h1>the planets</h1>
        <PlanetsContainer>
          {data.map((planet) => (
            <Link to={`${planet.name.toLowerCase()}`}>{planet.name}</Link>
          ))}
        </PlanetsContainer>
      </NavbarContainer>
    </>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 85px;
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
  }
`;

const PlanetsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;

  a {
    color: white;
    font-family: "Spartan";
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 25px;
    /* identical to box height, or 227% */

    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;
