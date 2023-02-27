import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <>
      <NavbarContainer>Navbar</NavbarContainer>
    </>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background: transparent;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;
