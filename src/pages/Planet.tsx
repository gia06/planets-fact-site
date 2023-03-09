import { useLocation } from "react-router-dom";
import styled from "styled-components";

function Planet() {
  const { pathname } = useLocation();
  const planet = pathname.slice(1);
  console.log(planet);

  return (
    <div>
      <PlanetOptions>
        <Option>
          <h2>Overview</h2>
          <Highlight></Highlight>
        </Option>

        <Option>
          <h2>Structure</h2>
          <Highlight></Highlight>
        </Option>

        <Option>
          <h2>Surface</h2>
          <Highlight></Highlight>
        </Option>
      </PlanetOptions>

      {planet}
    </div>
  );
}

export default Planet;

const PlanetOptions = styled.div`
  display: none;
  width: 100%;
  height: 50px;
  padding: 0px 24px 0px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  color: white;

  @media (max-width: 680px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  h2 {
    align-self: center;
  }
`;

const Highlight = styled.span`
  display: block;
  align-self: flex-end;
  width: 100%;
  height: 4px;
  background: red;
  /* margin-top: 20px; */
`;
