import React, { useEffect, useState } from "react";
import data from "../data/data.json";
import { PlanetsData } from "../type/planetsType";

function useSinglePlanet(planetName: string) {
  const [singlePlanet, setSinglePlanet] = useState<null | PlanetsData>(null);

  useEffect(() => {
    data.map((planet) =>
      planet.name === planetName ? setSinglePlanet(planet) : null
    );
  }, []);

  return [singlePlanet];
}

export default useSinglePlanet;
