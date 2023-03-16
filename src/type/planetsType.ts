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

interface MaxSize {
  tablet: number;
  mobile: number;
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
  maxSize: MaxSize;
  images: Images;
}

export interface PlanetOptionsProps {
  option: string;
  setOption: React.Dispatch<React.SetStateAction<string>>;
}

export interface PlanetInfoProps extends PlanetOptionsProps {
  currentPlanet: PlanetsData | null;
}
