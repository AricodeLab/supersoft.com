import { Container, RootContainer,BtnDownload } from "@components/defaults";
import * as S from "./styled";
import Link from "next/link";
import Image from 'next/image'
import footerLink from "./footerlinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import theme from "@styles/theme";
import logo from '../../../public/images/Logo Supersoft.svg'
function Footer() {
  const footerComponent = footerLink.map(value => {
    return <S.FooterMenuItem>
      <h3>{value.title}</h3>
      <ul>
        {value.links.map((linkValue, index) => {
          return <li key={index}>
            <Link href={linkValue.link}>
              {linkValue.name}
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
              Baixar <FontAwesomeIcon icon={faDownload} width={12} />
            </BtnDownload>
          </S.FooterLogoDiv>

          <S.FooterMenu>
            {footerComponent}
          </S.FooterMenu>

        </S.FooterRoot>

      </Container>
    </RootContainer>


  </>
}

export default Footer