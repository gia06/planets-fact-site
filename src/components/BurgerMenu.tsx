import { Link } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import chevronIcon from "../assets/icon-chevron.svg";

function BurgerMenu() {
  const { planetsData } = useFetch();

  return (
    <Div>
      {planetsData.map((planet) => (
        <Link key={planet.name} to={`${planet.name}`}>
          <span>circle</span>
          planet.name
          <img src={chevronIcon} />
        </Link>
      ))}
    </Div>
  );
}

export default BurgerMenu;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 68px;
  width: 100%;
  height: 100%;
  background: #070724;
  color: white;
`;
