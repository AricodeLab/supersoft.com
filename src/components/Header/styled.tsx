import styled from "styled-components";
import { motion } from "framer-motion";

const NavBarRoot = styled.nav`
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  height: 5.625rem;
  justify-content: space-between;
  max-width: 100%;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const NavMenu = styled.ul`
  position: relative;
  display: flex;
  list-style: none;
  margin: 0 auto;
  min-width: fit-content;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
    display: none;
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


const MenuButton = styled(motion.div)`
  display: none;
  max-width: 2rem;
  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
    color: #000;
    cursor: pointer;
  }
  svg {
   color: #000;
   font-size: 2rem;
   transition: all 0.2s ease-in-out;
 }
`;






export { NavBarRoot, NavMenu, NavMenuItem, SuperSoftIcon,MenuButton };
