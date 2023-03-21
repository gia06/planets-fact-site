// import { useState } from "react";
import styled from "styled-components";
import useCurrentPlanet from "../hooks/useCurrentPlanet";
import { PlanetOptionsProps } from "../types/planetsType";
import { HighlightProps } from "../types/stylesType";

function PlanetOptionsMobile({ option, setOption }: PlanetOptionsProps) {
  const { currentPlanet } = useCurrentPlanet();

  return (
    <div>
      <PlanetOptions>
        <Option onClick={() => setOption("overview")}>
          <h2>Overview</h2>
          <Highlight
            isHighlighted={option === "overview"}
            currentColor={currentPlanet?.color}
          ></Highlight>
        </Option>
        <Option onClick={() => setOption("structure")}>
          <h2>Structure</h2>
          <Highlight
            isHighlighted={option === "structure"}
            currentColor={currentPlanet?.color}
          ></Highlight>
        </Option>
        <Option onClick={() => setOption("surface")}>
          <h2>Surface</h2>
          <Highlight
            isHighlighted={option === "surface"}
            currentColor={currentPlanet?.color}
          ></Highlight>
        </Option>
      </PlanetOptions>
    </div>
  );
}

export default PlanetOptionsMobile;

const PlanetOptions = styled.div`
  display: none;
  width: 100%;
  height: 50px;
  padding: 0px 24px 0px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  color: white;

  font-family: "League Spartan";
  font-weight: 700;
  font-size: 9px;
  line-height: 10px;
  letter-spacing: 1.93px;

  @media (max-width: 680px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 20px;
  }
`;

const Highlight = styled.span<HighlightProps>`
  display: block;
  align-self: flex-end;
  width: 100%;
  height: 4px;
  background: ${({ isHighlighted, currentColor }) =>
    isHighlighted ? currentColor : "transparent"};
  margin-top: 15px;
`;
