import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

type RootContainer = {
  bgColor?: string;
  border?: string;
};
const RootContainer = styled.div<RootContainer>`
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
  background-color: ${(props) => props.bgColor};
  border: ${(props) => props.bgColor};
`;
type ButtonDownload = {
  bg?: string;
  txtColor?: string;
};
const BtnDownload = styled.a<ButtonDownload>`
  position: relative;
  overflow-x: auto;
  background-color: ${(props) => props.bg || props.theme.colors.blue[700]};
  padding: 10px;
  border-radius: 20px;
  font-size: 12px;
  max-width: 110px;
  width: 100px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-weight: bold;
  transition: 0.2s linear;
  color: ${(props) => props.txtColor || "#ffff"};
  z-index: 2; /* Defina um valor de z-index maior que os elementos abaixo */
  :hover {
    text-decoration: underline;
    transform: scaleX(1.5) translateX(10px);
    text-align: left;
  }
`;
export { Container, BtnDownload, RootContainer };
