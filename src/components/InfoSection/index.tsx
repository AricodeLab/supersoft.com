import {
  Container,
  RootContainer,
  BoxButton,
  BtnDownload,
} from "@components/defaults";
import React from "react";
import * as S from "./styled";
import { Footer } from "@components/index";
import { useTranslation } from "react-i18next";

function InfoSection() {
  const { t } = useTranslation();
  return (
    <RootContainer bgColor=" transparent linear-gradient(180deg, #213257 0%, #0031A4 100%) 0% 0% no-repeat padding-box">
      <Container>
        <S.InfoSectionRoot>
          <S.TextArea>
            <h1>{t("clientes")}</h1>
            <hr />
            <p>{t("territorio")}</p>
          </S.TextArea>
          <S.CardRow>
          <S.CardArea>
            <img src="/images/Aspas.svg" alt="aspas"/>
            <p>{t("testimonial")}</p>
            <S.CardFooter>
              <img src="/images/1551@2x.png" alt="people"/>
              <div>
                <span>David</span>
                <p>David Ramirez</p>
              </div>
            </S.CardFooter>
          </S.CardArea>
          <S.CardArea>
            <img src="/images/Aspas.svg" alt="aspas"/>
            <p>{t("testimonial")}</p>
            <S.CardFooter>
              <img src="/images/16028@2x.png" alt="people"/>
              <div>
                <span>David</span>
                <p>David Ramirez</p>
              </div>
            </S.CardFooter>
          </S.CardArea>
           <S.CardArea>
            <img src="/images/Aspas.svg" alt="aspas"/>
            <p>{t("testimonial")}</p>
            <S.CardFooter>
              <img src="/images/15740@2x.png" alt="people"/>
              <div>
                <span>David</span>
                <p>David Ramirez</p>
              </div>
            </S.CardFooter>
          </S.CardArea>
            </S.CardRow>
          <Footer />
        </S.InfoSectionRoot>
      </Container>
    </RootContainer>
  );
}

export default InfoSection;
