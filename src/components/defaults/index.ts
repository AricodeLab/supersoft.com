import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

type RootContainer = {
  bgColor?: string
  border?: string
}
const RootContainer = styled.div<RootContainer>`
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
  background-color: ${(props) => props.bgColor};
  border: ${(props) => props.bgColor};
  
`;

export { Container, RootContainer };
