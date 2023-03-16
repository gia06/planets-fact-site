import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import useCurrentPlanet from "../hooks/useCurrentPlanet";
import { PlanetOptionsProps } from "../type/planetsType";
import { HighlightProps } from "../type/stylesType";

function PlanetOptionsDesk({ option, setOption }: PlanetOptionsProps) {
  const { currentPlanet } = useCurrentPlanet();

  return (
    <OptionsContainer>
      <Option
        isHighlighted={option === "overview"}
        currentColor={currentPlanet?.color}
        onClick={() => setOption("overview")}
      >
        <p>01</p>
        <p>Overview</p>
      </Option>

      <Option
        isHighlighted={option === "structure"}
        currentColor={currentPlanet?.color}
        onClick={() => setOption("structure")}
      >
        <p>02</p>
        <p>Internal Structure</p>
      </Option>

      <Option
        isHighlighted={option === "surface"}
        currentColor={currentPlanet?.color}
        onClick={() => setOption("surface")}
      >
        <p>01</p>
        <p>Surface Geology</p>
      </Option>
    </OptionsContainer>
  );
}

export default PlanetOptionsDesk;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media (max-width: 680px) {
    display: none;
  }
`;

const Option = styled.div<HighlightProps>`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  width: 100%;
  height: 48px;
  border: 1px solid
    ${({ isHighlighted, currentColor }) =>
      isHighlighted ? currentColor : "rgba(255, 255, 255, 0.2)"};
  color: white;
  background: ${({ isHighlighted, currentColor }) =>
    isHighlighted ? currentColor : "transparent"};

  p {
    margin-left: 28px;
    font-family: "League Spartan";
    font-weight: 700;
    font-size: 12px;
    line-height: 25px;
    letter-spacing: 1.92857px;
    text-transform: uppercase;

    :first-child {
      opacity: 0.5;
    }
  }

  @media (min-width: 775px) {
    p {
      font-size: 9px;
      line-height: 25px;
      letter-spacing: 1.92857px;
    }

    :hover {
      cursor: pointer;
      background: rgba(216, 216, 216, 0.2);
      border: none;
    }
  }
`;
