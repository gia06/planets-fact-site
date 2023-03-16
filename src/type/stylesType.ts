export interface LinkContainerProps {
  planet: string;
  route: string;
  color: string;
}

export interface CircleProps {
  color: string;
}

export interface BurgerSvgProps {
  showBurgerMenu: boolean;
}

export interface HighlightProps {
  currentColor: string | undefined;
  isHighlighted: boolean;
}

export interface PlanetImageProps {
  path?: string;
}

export interface PlanetImageProps {
  tabletSize: number;
  mobileSize: number;
}
