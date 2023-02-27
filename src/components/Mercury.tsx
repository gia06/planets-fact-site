import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import mercury from "../assets/planet-mercury.svg";

function Mercury() {
  const navigate = useNavigate();

  return (
    <PlanetContainer>
      <img src={mercury} />
    </PlanetContainer>
  );
}

export default Mercury;

const PlanetContainer = styled.div``;
