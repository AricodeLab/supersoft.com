import { Container, RootContainer } from "@components/defaults";
import React from "react";
import * as S from "./styled";
import { Footer } from "@components/index";
import { useTranslation} from "react-i18next"
function InfoSection() {
  const { t} = useTranslation()
  return (
    <RootContainer bgColor=" transparent linear-gradient(180deg, #213257 0%, #0031A4 100%) 0% 0% no-repeat padding-box">
      <Container>
        <S.InfoSectionRoot>
          {/* Esqueci de add nos Jsons */}
          <h1>Somos mais de 7 mil clientes</h1>
          <Footer />
        </S.InfoSectionRoot>
      </Container>
    </RootContainer>
  );
}

export default InfoSection;
