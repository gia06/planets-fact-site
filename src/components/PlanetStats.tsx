import styled from "styled-components";
import useCurrentPlanet from "../hooks/useCurrentPlanet";

function PlanetStats() {
  const { currentPlanet } = useCurrentPlanet();

  return (
    <StatsContainer>
      <Stat>
        <StatName>rotation time</StatName>

        <StatValue>{currentPlanet?.rotation}</StatValue>
      </Stat>

      <Stat>
        <StatName>revolution time</StatName>

        <StatValue>{currentPlanet?.revolution}</StatValue>
      </Stat>

      <Stat>
        <StatName>radius</StatName>

        <StatValue>{currentPlanet?.radius}</StatValue>
      </Stat>

      <Stat>
        <StatName>average temp.</StatName>

        <StatValue>{currentPlanet?.temperature}</StatValue>
      </Stat>
    </StatsContainer>
  );
}

export default PlanetStats;

const StatsContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 30px;
  width: 90%;
  margin: 87px auto 0px auto;
  margin: 87px 165px 0px auto;

  @media (max-width: 680px) {
    flex-direction: column;
    gap: 8px;
    margin-top: 28px;
  }
`;

const Stat = styled.div`
  width: 255px;
  width: 100%;
  /* max-width: 255px; */
  height: 128px;
  color: white;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px 9px 27px 23px;

  @media (max-width: 775px) {
    width: 164px;
    height: 88px;
  }

  @media (max-width: 680px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 48px;
    padding: 0px 24px 0px 24px;
  }
`;

const StatName = styled.p`
  font-family: "League Spartan";
  font-weight: 700;
  font-size: 11px;
  line-height: 25px;
  letter-spacing: 1px;
  opacity: 0.5;

  @media (max-width: 775px) {
    font-size: 8px;
    line-height: 16px;
    letter-spacing: 0.727273px;
  }
`;

const StatValue = styled.h2`
  font-family: "Antonio";
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  letter-spacing: -1.5px;

  @media (max-width: 775px) {
    font-size: 24px;
    line-height: 31px;
    letter-spacing: -0.9px;
  }

  @media (max-width: 775px) {
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.75px;
  }
`;
