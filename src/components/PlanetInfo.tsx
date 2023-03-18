import sourceIcon from "/assets/icon-source.svg";
import styled from "styled-components";
import { PlanetInfoProps } from "../type/planetsType";
import PlanetOptionsDesk from "./PlanetOptionsDesk";

function PlanetInfo({ currentPlanet, option, setOption }: PlanetInfoProps) {
  return (
    <InfoContainer>
      <Info>
        <PlanetHeader>{currentPlanet?.name}</PlanetHeader>

        <p>{currentPlanet?.overview.content}</p>
        <p id="source">
          Source :{" "}
          <a href={currentPlanet?.overview.source} target="_blank">
            Wikipedia
            <img src={sourceIcon} alt="arrow icon" />
          </a>
        </p>
      </Info>

      <PlanetOptionsDesk option={option} setOption={setOption} />
    </InfoContainer>
  );
}

export default PlanetInfo;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  margin-top: 126px;

  @media (max-width: 1130px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: unset;
    margin: 0 auto;
    gap: 69px;
    align-items: center;
  }

  @media (max-width: 680px) {
    /* flex-direction: row; */
    /* justify-content: center; */
  }
`;

const Info = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;

  @media (max-width: 680px) {
    max-width: 950px;
  }

  p {
    font-family: "League Spartan";
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;

    @media (max-width: 1130px) {
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

  @media (max-width: 1130px) {
    font-size: 48px;
    line-height: 62px;
  }

  @media (max-width: 680px) {
    font-size: 40px;
    line-height: 52px;
  }
`;
