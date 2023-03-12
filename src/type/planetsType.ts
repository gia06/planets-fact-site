import React from "react";

interface PlanetDetails {
  content: string;
  source: string;
}

export interface Images {
  planet: string;
  internal: string;
  geology: string;
}

export interface PlanetsData {
  name: string;
  overview: PlanetDetails;
  structure: PlanetDetails;
  geology: PlanetDetails;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  color: string;
  images: Images;
}

export interface PlanetOptionsProps {
  option: string;
  setOption: React.Dispatch<React.SetStateAction<string>>;
}
