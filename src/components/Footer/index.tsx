import { Container, RootContainer, BtnDownload } from "@components/defaults";
import * as S from "./styled";
import Link from "next/link";
import Image from "next/image";
import footerLink from "./footerlinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import theme from "@styles/theme";
import logo from "../../../public/images/Logo Supersoft.svg";
import LanguageTranslate from "./LanguageTranslator";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const footerComponent = footerLink.map((value, i) => {
    return (
   
        <S.FooterMenuItem key={i}>
          <h3>{t(value.title)}</h3>
          <ul>
            {value.links.map((linkValue, index) => {
              return (
                <li key={index}>
                  <Link href={linkValue.link}>{t(linkValue.name)}</Link>
                </li>
              );
            })}
          </ul>
        </S.FooterMenuItem>
    );
  });
  return (
    <>
      <RootContainer>
        <Container style={{marginBottom: "9.313rem", justifySelf: "flex-end"}}>
          <S.FooterRoot>
            <S.FooterLogoDiv>
              <Image src={logo} alt="" width={200} style={{marginBottom: 15}}/>
              <BtnDownload
                href="#"
                download
                bg={theme.colors.green}
                txtColor={theme.colors.black}
              >
                {t("download")} <img src="https://cdn-icons-png.flaticon.com/512/724/724933.png" width={10} height={10}  />
              </BtnDownload>
            </S.FooterLogoDiv>

            <S.FooterMenu>{footerComponent}</S.FooterMenu>
          </S.FooterRoot>
          <S.FooterCredits>
            <p>
              2023
              <br /> SuperSoft
            </p>
            <Link href={""}>{t("terms_of_service")}</Link>
            <S.FooterButtons>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </S.FooterButtons>
            <LanguageTranslate />
          </S.FooterCredits>
        </Container>
      </RootContainer>
    </>
  );
}

export default Footer;
