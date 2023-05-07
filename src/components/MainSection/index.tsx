import { BtnDownload, Container, RootContainer } from "@components/defaults";
import React from "react";
import { RootDiv, ImageDiv, TextArea } from "./style";
import { useTranslation } from "react-i18next";


function BoxMain() {
  const { t } = useTranslation();
  return (
    <RootContainer  style={
      {marginTop: '100px',
   
    }
    } >
      <Container>
        <RootDiv>
          <ImageDiv>
            <TextArea>
              <h1>{t("main_section.full_solution_systems")}</h1>

              <p>{t("main_section.private_messages_and_calls")}</p>
              <BtnDownload bg="#0050FF">
                {t("download")}
                <span>

                <img
                  src="https://cdn-icons-png.flaticon.com/512/724/724933.png"
                  width={12}
                  height={12}
                  />
                  </span>
              </BtnDownload>
            </TextArea>
          </ImageDiv>
        </RootDiv>
      </Container>
    </RootContainer>
  );
}

export default BoxMain;
