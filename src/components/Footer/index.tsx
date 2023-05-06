import { Container, RootContainer, BtnDownload } from "@components/defaults";
import * as S from "./styled";
import Link from "next/link";
import Image from 'next/image'
import footerLink from "./footerlinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import theme from "@styles/theme";
import logo from '../../../public/images/Logo Supersoft.svg'
import LanguageTranslate from "./LanguageTranslator";
import { useTranslation } from "react-i18next";


function Footer() {
  const { t } = useTranslation();


  const footerComponent = footerLink.map((value, i) => {
    return <S.FooterMenuItem key={i}>
      <h3>{t(value.title)}</h3>
      <ul>
        {value.links.map((linkValue, index) => {
          return <li key={index}>
            <Link href={linkValue.link}>
              {t(linkValue.name)}
            </Link>
          </li>
        })}
      </ul>
    </S.FooterMenuItem>
  })
  return <>
    <RootContainer bgColor={theme.colors.blue[800]}>
      <Container>
        <S.FooterRoot>

          <S.FooterLogoDiv>
            <Image src={logo} alt="" width={200} />
            <BtnDownload href="#" download
              bg={theme.colors.green}
              txtColor={theme.colors.black}
            >
              {t('Baixar')} <FontAwesomeIcon icon={faDownload} width={12} />
            </BtnDownload>
          </S.FooterLogoDiv>

          <S.FooterMenu>
            {footerComponent}
          </S.FooterMenu>


        </S.FooterRoot>
        <S.FooterCredits>
          <p>2023<br /> SuperSoft</p>
          <Link href={""}>
           {t("Termos de serviço")}
          </Link>
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
}

export default Footer