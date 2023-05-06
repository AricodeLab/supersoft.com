import styled from "styled-components";

const RootDiv = styled.div`
  position: relative;
  height: 100%;
  min-height: 100vh;
  width: 100%;
`;

const ImageDiv = styled.div`
  height: 100vh;
  border-radius: 2.5rem;
  margin: 1rem 0px;
  padding: 3rem;
  width: 100%;
  background-image: url("/images/bg_img.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0.7;
    border-radius: 2.5rem;
  }
`;

const TextArea = styled.div`
  position: absolute;
  top: 0;
  left: 10;
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  text-align: left;

  h1 {
    max-width: 38.438rem;
    font: normal normal 600 4.313rem/3.375rem "Segoe UI SemiBold" ;
  }
  p{
    max-width: 23.625rem;
    font: normal normal normal 1.563rem/2.125rem "Segoe UI Regular";
  }

  & > div {
    max-width: 50%;
    display: flex;
    flex-direction: column;
  }
`;

export { RootDiv, ImageDiv, TextArea };
