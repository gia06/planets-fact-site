import { useState } from "react";
import styled from "styled-components";
import PlanetOptionsMobile from "../components/PlanetOptionsMobile";
import useCurrentPlanet from "../hooks/useCurrentPlanet";
import PlanetStats from "../components/PlanetStats";
import PlanetInfo from "../components/PlanetInfo";
import { PlanetImageProps } from "../type/stylesType";

function Planet() {
  const [option, setOption] = useState<string>("overview");
  const { currentPlanet, imgPath } = useCurrentPlanet(option);

  console.log(currentPlanet?.maxSize.tablet);

  return (
    <div style={{}}>
      <PlanetOptionsMobile option={option} setOption={setOption} />

      {currentPlanet ? (
        <PlanetContainer>
          <PlanetImage
            tabletSize={currentPlanet.maxSize.tablet}
            mobileSize={currentPlanet.maxSize.mobile}
          >
            {imgPath ? <img src={imgPath} alt="image of the planet" /> : null}
          </PlanetImage>

          <PlanetInfo
            currentPlanet={currentPlanet}
            option={option}
            setOption={setOption}
          />
        </PlanetContainer>
      ) : null}

      <PlanetStats />
    </div>
  );
}

export default Planet;

const PlanetContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0px auto 0px auto;

  @media (max-width: 775px) {
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0 auto;
  }
`;

const PlanetImage = styled.div<PlanetImageProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;

  img {
    @media (max-width: 775px) {
      max-width: ${({ tabletSize }) => `${tabletSize}px`};
      max-height: ${({ tabletSize }) => `${tabletSize}px`};
    }

    @media (max-width: 680px) {
      max-width: ${({ mobileSize }) => `${mobileSize}px`};
      max-height: ${({ mobileSize }) => `${mobileSize}px`};
    }
  }
`;
