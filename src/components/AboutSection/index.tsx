import { Container, RootContainer } from "@components/defaults";
import React from "react";
import * as S from "./styled";
import { useTranslation } from "react-i18next";
function AboutSection() {
  const { t } = useTranslation();
  const keys_locale = [
    "about_section.services.30_years_experience.",
    "about_section.services.security_guaranteed.",
    "about_section.services.differentiated_support.",
    "about_section.services.accessible.",
  ];

  return (
    <RootContainer >
      <Container>
        <S.AboutSectionRoot>
        <S.TextArea style={{textAlign: "left"}}>
          <h1>{t("about_section.we_are_super")}</h1>
          <hr />
          <p>{t("about_section.nooven_systems_programs", 'style="font: normal normal bold 21px/31px Assistant Regular;"')}</p>
          <p>{t("about_section.the_economy")}</p>
        </S.TextArea>
        <S.GridContainer>
          {keys_locale.map((service) => {
            const title = service + 'title';
            const text = service + 'text';

            return (
              <S.GridItem key={service.toString()} style={{textAlign: "left"}}>
                <img
                  src={
                    service === "about_section.services.accessible"
                      ? "/images/Wallet.svg"
                      : "/images/icon-18@2x.png"
                  }
                  width={50}
                  alt="icon"
                />
                <h1>{t(title)}</h1>
                <p>{t(text)}</p>
              </S.GridItem>
            );
          })}
        </S.GridContainer>
        </S.AboutSectionRoot>
        <S.AboutSectionRoot >
          <img src="/images/Camada 1@2x.png" alt="Camada 1@2x.png"/>
          <S.TextArea style={{marginTop: "2rem", textAlign: "left"}} >
            <h1 color="#0093FB">{t("about_section.sslegis")}</h1>
            <p>{t("about_section.consulting")}</p>
            <p>{t("about_section.legislative_consulting")}</p>
          </S.TextArea>
        </S.AboutSectionRoot>
        
        
      </Container>
    </RootContainer>
  );
}

export default AboutSection;
