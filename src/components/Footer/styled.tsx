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
  width: 60%;
  ul{
    li{
      margin-bottom: 10px;
    }
  }
  
  a{
    color:#fff;
    font-weight: bold;
    :hover{
      text-decoration: underline;
    }
  }
 
  div:last-child{
    grid-column-start:3;
  grid-column-end: 4; 
  grid-row: 1; 
  text-align: right;
  
  
 
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
  }
`;

const FooterLogoDiv = styled.div`
  img{
    filter:brightness(0%);
    filter: invert(100%);
    margin-bottom: 10px;
  }

`

const FooterMenuItem = styled.div`

 h3{
    color:#fff;
    font-size: 14px;
    margin-bottom: 24px;
    font-weight: normal;
 }
`;
const FooterCredits = styled.div`
  border-top:1px solid ${theme.colors.blue[600]} ;
  box-sizing: border-box;
  padding: 10px;
  color:#fff;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  
  a{
    color:#fff;
    :hover{
      text-decoration: underline;
    }
  }

div{
    grid-column-start:3;
  grid-column-end: 5; 
  grid-row: 1; 
  }

`
const FooterButtons = styled.div`

width: 100%;
button{
  width: 40px;
  height: 40px;
  margin-right:10px ;
  border-radius: 100%;
  border: 1px solid #fff;
  background-color: ${theme.colors.blue[900]};
}
`
const FooterLangSection = styled.select`
  border-radius: 50px;
  background-color: ${theme.colors.blue[900]};
  color: #fff;
  border-color: #fff;
  font-weight: bold;
  cursor:pointer
`

export { FooterRoot, FooterMenu, FooterMenuItem, FooterLogoDiv, FooterCredits, FooterButtons, FooterLangSection };