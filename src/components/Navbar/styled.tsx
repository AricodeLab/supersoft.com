import styled from "styled-components";

const NavBarRoot = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
  }
`;

const NavMenuItem = styled.li`
  margin-left: 20px;

  @media (max-width: 768px) {
    margin: 0;
    margin-top: 10px;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
const HamburgerIcon = styled.div`
  width: 30px;
  height: 3px;
  background-color: #fff;
  margin: 5px 0;
`;
export { HamburgerIcon, NavBarRoot, NavMenu, NavMenuItem, HamburgerMenu };
