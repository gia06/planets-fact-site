import { useState } from "react";
import data from "../data/data.json";
import { PlanetsData } from "../types/planetsType";

function useFetch() {
  const [planetsData, setPlanetsData] = useState<PlanetsData[]>(data);

  return { planetsData };
}

export default useFetch;
