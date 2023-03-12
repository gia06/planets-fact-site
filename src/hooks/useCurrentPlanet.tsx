import { useEffect, useState } from "react";
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
    // setImgPath(planet.images);
  };

  const filterOptions = (option: string) => {
    switch (option) {
      default:
        setImgPath(images.planet.replace(".", "src"));
        break;
      // return imgPath?.planet.replace(".", "src");
      case "structure":
        // return imgPath?.internal.replace(".", "src");
        setImgPath(images.internal.replace(".", "src"));
        break;

      case "surface":
        // return imgPath?.geology.replace(".", "src");
        setImgPath(images.geology.replace(".", "src"));
        break;
    }
  };

  useEffect(() => {
    data.map((planet) =>
      planet.name === planetName ? setPlanetData(planet) : null
    );
    option ? filterOptions(option) : null;
  }, [planetName, option]);

  return { currentPlanet, imgPath };
}

export default useCurrentPlanet;
