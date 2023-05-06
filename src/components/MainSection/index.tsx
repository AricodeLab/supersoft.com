import { BtnDownload, Container, RootContainer } from "@components/defaults";
import React from "react";
import { RootDiv, ImageDiv, TextArea } from "./style";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function BoxMain() {
  const { t } = useTranslation();
  return (
    <RootContainer style={
      { marginTop: '100px' }
    }>
      <Container>
        <RootDiv>
          <ImageDiv>
            <TextArea>
              <h1>
                {t('main_section.full_solution_systems')}

              </h1>

              <p>
                {t("main_section.private_messages_and_calls")}
              </p>
              <BtnDownload bg="#0050FF">{t("download")} <FontAwesomeIcon icon={faDownload} width={12} /></BtnDownload>
            </TextArea>
          </ImageDiv>
        </RootDiv>
      </Container>
    </RootContainer>
  );
}

export default BoxMain;
