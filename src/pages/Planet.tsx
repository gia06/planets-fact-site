import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import PlanetOptionsMobile from "../components/PlanetOptionsMobile";
import useCurrentPlanet from "../hooks/useCurrentPlanet";
import sourceIcon from "../assets/icon-source.svg";
import PlanetOptionsDesk from "../components/PlanetOptionsDesk";
import PlanetStats from "../components/PlanetStats";

function Planet() {
  const planet = useLocation().pathname.slice(1);

  console.log(window.innerHeight);

  const [option, setOption] = useState<string>("overview");
  const { currentPlanet, imgPath } = useCurrentPlanet(option);

  return (
    <div>
      <PlanetOptionsMobile option={option} setOption={setOption} />

      <PlanetContainer>
        <PlanetImage id="image">
          {imgPath ? <img src={imgPath} /> : null}
        </PlanetImage>

        <PlanetInfoContainer>
          <PlanetInfo>
            <PlanetHeader>{currentPlanet?.name}</PlanetHeader>

            <p>{currentPlanet?.overview.content}</p>
            <p id="source">
              Source :{" "}
              <a href={currentPlanet?.overview.source} target="_blank">
                Wikipedia
                <img src={sourceIcon} />
              </a>
            </p>
          </PlanetInfo>

          <PlanetOptionsDesk option={option} setOption={setOption} />
        </PlanetInfoContainer>
      </PlanetContainer>

      <PlanetStats />
    </div>
  );
}

export default Planet;

const PlanetContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  /* align-items: center; */
  width: 90%;
  /* height: calc(100vh - 192px); */
  margin: 126px 165px 0px auto;

  @media (max-width: 775px) {
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-evenly;

    margin: 0 auto;
    /* justify-content: space-evenly; */

    #image {
      align-self: center;
    }
  }
`;

const PlanetImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;

  img {
    @media (max-width: 775px) {
      max-width: 422px;
      max-height: 422px;
    }
  }
`;

const PlanetInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;

  @media (max-width: 775px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: unset;
    margin: 0 auto;
    gap: 69px;
    align-items: center;
  }

  @media (max-width: 680px) {
    flex-direction: row;
    /* justify-content: center; */
  }
`;

const PlanetInfo = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;

  p {
    font-family: "League Spartan";
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;

    @media (max-width: 775px) {
      font-size: 11px;
      line-height: 22px;
    }
  }

  #source {
    margin: 24px 0px 39px 0px;
    color: white;
    opacity: 0.5;

    font-family: "League Spartan";
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;

    @media (max-width: 680px) {
      align-self: center;
    }
  }

  #source > a {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    color: white;
    font-weight: 700;
    text-decoration: underline;

    img {
      margin-left: 8px;
    }
  }
`;

const PlanetHeader = styled.h1`
  margin-bottom: 23px;
  font-family: "Antonio";
  font-weight: 400;
  font-size: 80px;
  line-height: 104px;
  text-transform: uppercase;

  @media (max-width: 775px) {
    font-size: 48px;
    line-height: 62px;
  }

  @media (max-width: 680px) {
    font-size: 40px;
    line-height: 52px;
  }
`;
