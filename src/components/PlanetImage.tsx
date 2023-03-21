import { useRef } from "react";
import styled from "styled-components";
import useCurrentPlanet from "../hooks/useCurrentPlanet";
import { PlanetImageProps } from "../types/planetsType";
import { ImageProps } from "../types/stylesType";

function PlanetImage({ tabletSize, mobileSize, option }: PlanetImageProps) {
  const { currentPlanet, imgPath } = useCurrentPlanet(option);
  const planetRef = useRef<HTMLImageElement>(null);

  return (
    <ImageContainer tabletSize={tabletSize} mobileSize={mobileSize}>
      {imgPath ? (
        <>
          <img
            ref={planetRef}
            id="planet"
            src={imgPath}
            alt={`image of the ${currentPlanet?.name}`}
          />
          {option === "surface" ? (
            <img id="geology" src={currentPlanet?.images.geology} />
          ) : null}
        </>
      ) : null}
    </ImageContainer>
  );
}

export default PlanetImage;

const ImageContainer = styled.div<ImageProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;

  #planet {
    @media (max-width: 1130px) {
      max-width: ${({ tabletSize }) => `${tabletSize}px`};
      max-height: ${({ tabletSize }) => `${tabletSize}px`};
    }

    @media (max-width: 680px) {
      max-width: ${({ mobileSize }) => `${mobileSize}px`};
      max-height: ${({ mobileSize }) => `${mobileSize}px`};
    }
  }

  #geology {
    width: 163px;
    height: 199px;
    position: absolute;
    left: calc(50% - 175px);
    top: 50%;
    transform: translate(-50%, 0);
    z-index: 1;

    @media (max-width: 1130px) {
      width: 120px;
      height: 145px;
      left: 50%;
      top: 40%;
    }

    @media (max-width: 680px) {
      width: 100px;
      height: 120px;
      top: 25%;
    }
  }
`;
