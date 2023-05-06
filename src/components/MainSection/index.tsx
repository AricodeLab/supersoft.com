import { BtnDownload, Container, RootContainer } from "@components/defaults";
import React from "react";
import { RootDiv, ImageDiv, TextArea } from "./style";
import { useTranslation } from "react-i18next";

function BoxMain() {
  const { t } = useTranslation();
  return (
    <RootContainer>
      <Container>
        <RootDiv>
          <ImageDiv>
            <TextArea>
              <h1>
                {t('descrição grande')}
               
              </h1>

              <p>
               {t("descrição pequena")}
              </p>
              <BtnDownload bg="#0050FF">{t("Baixar")}</BtnDownload>
            </TextArea>
          </ImageDiv>
        </RootDiv>
      </Container>
    </RootContainer>
  );
}

export default BoxMain;
