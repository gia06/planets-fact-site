import { useEffect, useState, useMemo } from "react";
import data from "../data/data.json";
import { PlanetsData } from "../type/planetsType";
import { Images } from "../type/planetsType";

function useCurrentPlanet(planetName: string, option?: string) {
  const [currentPlanet, setCurrentPlanet] = useState<null | PlanetsData>(null);
  const [imgPath, setImgPath] = useState<null | string>();
  let images: Images;

  const setPlanetData = (planet: PlanetsData) => {
    setCurrentPlanet(planet);
    images = planet.images;
  };

  const filterOptions = (option: string) => {
    switch (option) {
      default:
        setImgPath(images.planet.replace(".", "src"));
        break;
      case "structure":
        setImgPath(images.internal.replace(".", "src"));
        break;

      case "surface":
        setImgPath(images.geology.replace(".", "src"));
        break;
    }
  };

  useMemo(() => {
    data.map((planet) =>
      planet.name === planetName ? setPlanetData(planet) : null
    );
    option ? filterOptions(option) : null;
  }, [planetName, option]);

  return { currentPlanet, imgPath };
}

export default useCurrentPlanet;
