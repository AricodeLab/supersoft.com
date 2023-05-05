import styled from "styled-components";
const NavBarRoot = styled.nav`
  display: flex;
  align-items: center;
  height: 5.625rem;
  max-width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 auto;
  min-width: fit-content;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
  }
`;

const NavMenuItem = styled.li`
  display: flex;
  align-items: center;
  margin-left: 20px;

  p {
    text-align: left;
    font: normal normal 600 0.875rem/0.688rem "Segoe UI Regular";
    letter-spacing: 0px;
    color: #111b21;
    opacity: 1;
    margin: 0;
    :hover {
      text-decoration: underline;
    }
  }

  select {
    font: normal normal 600 0.875rem/0.688rem "Segoe UI Regular";
    color: #111b21;
    border: none;
    background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    width: fit-content;

    &:focus {
      outline: none;
    }
  }

  option {
    font: normal normal 600 0.875rem/0.688rem "Segoe UI Regular";
    color: #111b21;
    background-color: white;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin: 0;
    margin-top: 10px;
  }
`;

const SuperSoftIcon = styled.img`
  width: 11.813rem;
  margin: auto 0;
  height: 3rem;
`;

export { NavBarRoot, NavMenu, NavMenuItem, SuperSoftIcon };
