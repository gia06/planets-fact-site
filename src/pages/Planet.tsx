import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import PlanetOptionsMobile from "../components/PlanetOptionsMobile";
import useCurrentPlanet from "../hooks/useCurrentPlanet";
import { HighlightProps } from "../type/stylesType";
import image from "../assets/planet-mercury.svg";

function Planet() {
  const planet = useLocation().pathname.slice(1);

  const [option, setOption] = useState<string>("overview");
  const { currentPlanet, imgPath } = useCurrentPlanet(planet, option);

  // console.log(imgPath);

  // const filterOptions = (option: string) => {
  //   switch (option) {
  //     default:
  //       return imgPath?.planet.replace(".", "src");
  //     case "structure":
  //       return imgPath?.internal.replace(".", "src");
  //     case "structure":
  //       return imgPath?.geology.replace(".", "src");
  //   }
  // };

  return (
    <div>
      <PlanetOptionsMobile option={option} setOption={setOption} />

      {imgPath ? <PlanetImage path={imgPath} /> : null}
      {planet}
    </div>
  );
}

export default Planet;

interface PlanetImageProps {
  path?: string;
}

const PlanetImage = styled.div<PlanetImageProps>`
  width: 100%;
  height: 300px;
  background-image: url(${({ path }) => [path]});
  background-repeat: no-repeat;
`;
