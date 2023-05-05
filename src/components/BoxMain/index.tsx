import { BtnDownload, Container, RootContainer } from "@components/defaults";
import React from "react";
import { RootDiv, ImageDiv, TextArea } from "./style";

function BoxMain() {
  return (
    <RootContainer>
      <Container>
        <RootDiv>
          <ImageDiv>
            <TextArea>
              <h1>
                A solução completa em sistemas para o seu Escritório seu
                Escritório
              </h1>

              <p>
                Mensagens e chamadas privadas simples, seguras e gratuitas*,
                disponíveis em todo o mundo.
              </p>
              <BtnDownload bg="#0050FF">Baixar</BtnDownload>
            </TextArea>
          </ImageDiv>
        </RootDiv>
      </Container>
    </RootContainer>
  );
}

export default BoxMain;
