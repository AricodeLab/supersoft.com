import styled from "styled-components";

const AutomationSectionRoot = styled.div`
  display: flex;
  min-height: 850px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img {
    object-fit: fill;
    max-width: 60%;
    width: 59.063;
    height: 49.284rem;
    align-self: flex-end;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    min-height: fit-content;
    padding-top: 2rem;
    img {
      object-fit: fill;
      max-width: 60%;
      height: 25%;
      justify-self: center;
      align-self: flex-end;
    }
  }
`;

const TextArea = styled.div`
  max-width: 32.063rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 3rem;

  h1 {
    max-width: 38.438rem;
    font: normal normal 900 4.313rem/3.375rem "Segoe UI Bold";
    color: ${(props) => props.theme.colors.white};

     @media screen and (max-width: 768px) {
    font: normal normal 900 3rem/3rem "Segoe UI Bold";

     }
  }
  p {
    font-family: "Segoe UI Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    color: ${(props) => props.theme.colors.white};

    line-height: 33px;
  }
  hr {
    width: 60px;
    height: 4px;
    border: none;
    background: #1f8ceb 0% 0% no-repeat padding-box;
  }
  font: normal normal normal 21px/31px "Assistant Regular";
  letter-spacing: 0px;

  @media screen and (max-width: 768px) {
    margin-bottom: 5rem;
  }
`;

export { AutomationSectionRoot, TextArea };
