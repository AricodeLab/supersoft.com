import { Container, RootContainer } from "@components/defaults";
import * as S from "./styled";
import Link from "next/link";
import footerLink from "./footerlinks";
function Footer() {
  const footerComponent = footerLink.map((value) => {
    return (
      <S.FooterMenuItem>
        <h3>{value.title}</h3>
        <ul>
          {value.links.map((linkValue) => {
            return (
              <li>
                <Link href={linkValue.link}>{linkValue.name}</Link>
              </li>
            );
          })}
        </ul>
      </S.FooterMenuItem>
    );
  });
  return (
    <>
      <RootContainer bgColor="#0031A4">
        <Container>
          <S.FooterRoot>
            <div></div>

            <S.FooterMenu>{footerComponent}</S.FooterMenu>
          </S.FooterRoot>
        </Container>
      </RootContainer>
    </>
  );
}

export default Footer;
