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
  console.log(imgPath);

  return (
    <PlanetContainer>
      <PlanetOptionsMobile option={option} setOption={setOption} />

      {currentPlanet ? (
        <PlanetInfoContainer>
          <PlanetImage
            tabletSize={currentPlanet.maxSize.tablet}
            mobileSize={currentPlanet.maxSize.mobile}
          >
            {imgPath ? <img src={imgPath} alt="image of the planet" /> : null}
          </PlanetImage>

          {/* <img src=/> */}

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

  @media (max-width: 775px) {
    /* display: flex; */
    height: calc(100vh - 192px);
    /* justify-content: space-around; */
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

  @media (max-width: 775px) {
    /* height: 75%; */
    flex-direction: column;
    justify-content: space-around;
  }

  @media (max-width: 680px) {
    height: 65%;
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
