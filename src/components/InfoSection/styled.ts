import styled from "styled-components";

const InfoSectionRoot = styled.div`
  min-height: 1639px;
  background: transparent linear-gradient(180deg, #213257 0%, #0031a4 100%) 0%
    0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TextArea = styled.div`
  margin-top: 20%;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 588px;
  h1 {
    font: normal normal 600 35px/44px "Assistant Regular";
    color: ${(props) => props.theme.colors.white};
  }
  p {
    font: normal normal normal 23px/32px "Assistant Regular";
    color: ${(props) => props.theme.colors.white};
  }
  hr {
    width: 60px;
    height: 4px;
    border: none;
    background: #1f8ceb 0% 0% no-repeat padding-box;
    justify-self: center;
  }
`;

const CardArea = styled.div`
  max-width: 23.313rem;
  min-height: 26.938rem;
  box-shadow: 0px 0px 6px #00000014;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 25px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    object-fit: cover;
    max-width: 47px;
    max-height: 42px;
  }

  p {
    font: normal normal normal 19px/28px "Assistant Regular";
  }
    @media (max-width: 768px) {
      min-height: 20rem;
      max-width:  80%;
      margin: 2rem auto 2rem;
  }
`;

const CardRow = styled.div`
  max-width: 100%;
  gap: 2rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
     flex-direction: column;
  }
`;
const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  img {
    object-fit: cover;
    border-radius: 100%;
    max-width: 74px;
    max-height: 75px;
  }
  span {
    font: normal normal 600 19px/28px "Assistant Regular";
    color: #587084;
  }
  p {
    font: normal normal normal 17px/28px "Assistant Regular";
  }
`;

export { InfoSectionRoot, TextArea, CardFooter, CardArea, CardRow };
