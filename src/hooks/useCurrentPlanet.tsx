import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import data from "../data/data.json";
import { PlanetsData } from "../type/planetsType";
import { Images } from "../type/planetsType";

function useCurrentPlanet(option?: string) {
  const [currentPlanet, setCurrentPlanet] = useState<null | PlanetsData>(null);
  const [imgPath, setImgPath] = useState<null | string>();
  let images: Images;

  const loc = useLocation().pathname.slice(1);

  const setPlanetData = (planet: PlanetsData) => {
    setCurrentPlanet(planet);
    images = planet.images;
  };

  const filterOptions = (option: string) => {
    switch (option) {
      default:
        setImgPath(images.planet);
        break;
      case "structure":
        setImgPath(images.internal);
        break;
      case "surface":
        setImgPath(images.geology);
        break;
    }
  };

  useMemo(() => {
    data.map((planet) => (planet.name === loc ? setPlanetData(planet) : null));
    option ? filterOptions(option) : null;
  }, [loc, option]);

  return { currentPlanet, imgPath };
}

export default useCurrentPlanet;
