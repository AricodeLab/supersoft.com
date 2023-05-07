import styled from "styled-components";
import theme from "@styles/theme";
const FooterRoot = styled.nav`
  display: flex;
  
  justify-content: space-between;
  align-items: center;

  color: #fff;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FooterMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  list-style: none;
  gap: 4.688rem;
  min-width: 50%;
  
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.688rem;
    min-height: 100%;
    width: fit-content;
    text-align: left;
    li {
      margin-bottom: 10px;
      font: normal normal 600 1.25rem/0.688rem "Segoe UI Regular";
    }
  }

  a {
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    :hover {
      text-decoration: underline;
    }
  }

  div:last-child {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row: 1;
    text-align: left;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    min-width: 100%;
    text-align: center;
    margin-top: 20px;
  }
`;

const FooterLogoDiv = styled.div`
  img {
    height: auto;
    max-width: 100%;
    filter: brightness(0%);
    filter: invert(100%);
    margin-bottom: 10px;
  }
  @media screen and (max-width: 768px) {
  display: flex;
  justify-content: center;
  gap: 3rem;
}
`;

const FooterMenuItem = styled.div`
  text-align: left;
  h3 {
    font: normal normal 600 0.875rem/0.688rem "Segoe UI Regular";
    color: ${theme.colors.white};
    margin-bottom: 1.813rem;
    font-weight: normal;
  }
  @media screen and (max-width: 768px)  {
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-around;
    h3 {
      margin: 1rem auto;
    }
  }
`;
const FooterCredits = styled.div`
  border-top: 1px solid ${theme.colors.blue[600]};
  box-sizing: border-box;
  padding: 10px;
  color: #fff;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  a {
    color: #fff;
    max-width: 4.125;
    word-wrap: break-word;
    font: normal normal 600 0.875rem/1.063rem "Segoe UI Regular";
    :hover {
      text-decoration: underline;
      
    }
  }

  div {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row: 1;
  }
`;
const FooterButtons = styled.div`
  width: 100%;
  button {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 100%;
    border: 1px solid #fff;
    background-color: ${theme.colors.blue[900]};
    @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
  }
`;
const FooterLangSection = styled.select`
  border-radius: 50px;
  background-color: ${theme.colors.blue[900]};
  color: #fff;
  border-color: #fff;
  font-weight: bold;
  height: 30px;
  cursor: pointer;
  text-align: center;
  option{
    border-radius: 50px;
    transition: 1s linear;
  }
`;

export {
  FooterRoot,
  FooterMenu,
  FooterMenuItem,
  FooterLogoDiv,
  FooterCredits,
  FooterButtons,
  FooterLangSection,
};
