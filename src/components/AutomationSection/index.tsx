import { Container, RootContainer } from "@components/defaults";
import React from "react";
import * as S from "./styled"
import { useTranslation } from "react-i18next";

function AutomationSection() {
  const { t } = useTranslation();
  return (
    <RootContainer bgColor="#0093FB">
      <Container>
        <S.AutomationSectionRoot>
          <S.TextArea>
          <h1>{t("automation_section.automate_all_areas")}</h1>
          <p>{t("automation_section.total_control_processes")}</p>    
          </S.TextArea>
          <img src="/images/Camada 2@2x.png" alt="" />
        </S.AutomationSectionRoot>

      </Container>
    </RootContainer>
  );
}

export default AutomationSection
