import styled from "styled-components";

const Container = styled.div`
  min-width: 100%;
 
  margin: 0 auto;
  padding: 0 20px;
`;

type RootContainer = {
  bgColor?: string;
  border?: string;
};
const RootContainer = styled.div<RootContainer>`
position: relative;
min-width: 100%;
  margin: 0 auto;
  background: ${(props) => props.bgColor};
  border: ${(props) => props.bgColor};
`;
type ButtonDownload = {
  bg?: string;
  txtColor?: string;
};
const BtnDownload = styled.a<ButtonDownload>`
 
  overflow-x: auto;
  background-color: ${(props) => props.bg || props.theme.colors.blue[700]};
  padding: 10px;
  box-sizing:border-box ;
  border-radius: 20px;
  font-size: 12px;
  width: 110px;
  min-width: 100px;
  height: 35px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-weight: bold;
  transition: 0.2s linear;
  color: ${(props) => props.txtColor || "#ffff"};
  
  :hover {
    text-decoration: underline;
    width: 110px;
    text-align: left;
    cursor: pointer;
  }

`
const BoxButton=styled.div`

min-width: 120px;
`
export { Container, BtnDownload,BoxButton ,RootContainer };
