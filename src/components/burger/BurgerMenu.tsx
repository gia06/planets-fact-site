import { Link } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../../hooks/useFetch";
import chevronIcon from "/assets/icon-chevron.svg";
import { BurgerMenuProps } from "../../types/burgerProps";

function BurgerMenu({ setShowBurgerMenu }: BurgerMenuProps) {
  const { planetsData } = useFetch();

  return (
    <BurgerWrapper>
      <PlanetsContainer>
        {planetsData.map((planet) => (
          <Link
            key={planet.name}
            to={`${planet.name}`}
            onClick={() => setShowBurgerMenu((value) => !value)}
          >
            <Planet>
              <Circle color={planet.color}></Circle>
              {planet.name}
            </Planet>
            <img src={chevronIcon} />
          </Link>
        ))}
      </PlanetsContainer>
    </BurgerWrapper>
  );
}

export default BurgerMenu;

const BurgerWrapper = styled.div`
  display: none;
  z-index: 2;

  @media (max-width: 680px) {
    display: block;
    position: absolute;
    top: 68px;
    width: 100%;
    height: 100%;
    background: #070724;

    font-family: "League Spartan";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 1.36px;
    text-transform: uppercase;
  }
`;

const PlanetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  gap: 20px;
  margin-top: 44px;

  a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 20px;
    color: white;

    :last-child {
      border-bottom: none;
    }
  }

  img {
    align-self: center;
    margin-right: 8px;
  }
`;

const Circle = styled.span`
  display: inline-flex;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ color }) => color};
  margin-right: 24px;
`;

const Planet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
