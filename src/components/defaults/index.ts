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
  background: ${(props) => props.bgColor};
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
padding: 1rem;
border-radius: 2rem;
font-size: 1rem;
max-width: 10.125rem;
width: 100%;
height: 3.313rem;
background: #0050ff 0% 0% no-repeat padding-box;
border-radius: 1.688rem;
font: normal normal bold 1.125rem/1.063rem "Segoe UI Bold";
display: flex;
justify-content: space-around;
text-align: center;
align-items: center;
font-weight: bold;
transition: 0.2s linear;
color: ${(props) => props.txtColor || "#ffff"};
z-index: 2; /* Defina um valor de z-index maior que os elementos abaixo */

@media screen and (min-width: 768px) {
  font-size: 1.2rem;
}

@media screen and (min-width: 992px) {
  max-width: 12.5rem;
}

:hover {
  text-decoration: underline;
    transform: translateX(10px);
  text-align: left;
}
`;

export { Container, BtnDownload, RootContainer };
