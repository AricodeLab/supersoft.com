import { Container } from "@components/defaults";
import * as S from "./styled";
import Link from "next/link";
import footerLink from "./footerlinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
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
        <Container>
            <S.FooterRoot>

                <S.FooterLogoDiv>

                    <S.FooterButtonDownload href="#" download>
                        Baixar <FontAwesomeIcon icon={faDownload} width={12}/>
                    </S.FooterButtonDownload>
                </S.FooterLogoDiv>

                <S.FooterMenu>
                    {footerComponent}
                </S.FooterMenu>

            </S.FooterRoot>

        </Container>
    </>
}

export default Footer