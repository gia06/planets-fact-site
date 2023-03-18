import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PlanetOptionsMobile from "../components/PlanetOptionsMobile";
import useCurrentPlanet from "../hooks/useCurrentPlanet";
import PlanetStats from "../components/PlanetStats";
import PlanetInfo from "../components/PlanetInfo";
import PlanetImage from "../components/PlanetImage";

function Planet() {
  const [option, setOption] = useState<string>("overview");
  const { currentPlanet } = useCurrentPlanet(option);

  return (
    <PlanetContainer>
      <PlanetOptionsMobile option={option} setOption={setOption} />

      {currentPlanet ? (
        <PlanetInfoContainer>
          <PlanetImage
            tabletSize={currentPlanet.maxSize.tablet}
            mobileSize={currentPlanet.maxSize.mobile}
            option={option}
          />

          <PlanetInfo
            currentPlanet={currentPlanet}
            option={option}
            setOption={setOption}
          />
        </PlanetInfoContainer>
      ) : null}

      <PlanetStats />
    </PlanetContainer>
  );
}

export default Planet;

const PlanetContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1130px) {
    height: calc(100vh - 192px);
  }

  @media (max-width: 680px) {
    height: calc(100vh - 68px);
  }
`;

const PlanetInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 1130px) {
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
  }

  @media (max-width: 680px) {
    height: 65%;
  }
`;
