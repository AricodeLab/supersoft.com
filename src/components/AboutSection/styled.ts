import styled from "styled-components";

const AboutSectionRoot = styled.div`
  margin: 0;
  margin-top: 7.875rem;
  margin-bottom: 7.875rem;
  display: flex;

  flex-direction: row;
  justify-content: space-between;

  img {
    object-fit: cover;
    max-width: 37.375rem;
    max-height: 24.125rem;
  }
  p {
    color: #587084;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;

    img {
      object-fit: contain;
      margin: 0 auto;
      max-width: 15rem;
      max-height: 24.125rem;
    }
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  grid-gap: 20px;
  width: 100%;
  p {
    color: #636363;
  }
  @media (max-width: 768px) {
    margin-top: 7.875rem;
    grid-gap: 5px;
    grid-template-columns: 1fr;
    column-gap: 1rem;
    max-width: fit-content;

  }
`;

const GridItem = styled.div`
  word-wrap: break-word;
  max-width: 19.063rem;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 1rem;
  img {
    object-fit: cover;
    width: 29px;
    height: 36px;
  }

  h1 {
    font: normal normal 600 29px/51px "Assistant Regular";
    color: ${(props) => props.theme.colors.slate[600]};
    letter-spacing: 0px;
  }
  p {
    font: normal normal normal 18px/29px "Assistant Regular";
    letter-spacing: 0px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const TextArea = styled.div`
  max-width: 32.063rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 2rem;

  h1 {
    font: normal normal 600 2.563rem/3.25rem "Assistant Regular";
    color: ${(props) => props.theme.colors.slate[600]};
  }
  hr {
    width: 60px;
    height: 4px;
    border: none;
    background: #1f8ceb 0% 0% no-repeat padding-box;
  }
  font: normal normal normal 21px/31px "Assistant Regular";
  letter-spacing: 0px;
`;

export { GridContainer, GridItem, TextArea, AboutSectionRoot };
