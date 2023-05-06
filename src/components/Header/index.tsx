import { useState } from "react";
import * as S from "./styled";
import { faBars, faDownload, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Container, RootContainer, BtnDownload,BoxButton } from "@components/defaults";
import NavLinks from "./navlinks";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState(faBars);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIcon(icon === faBars ? faTimes : faBars);
  };

  const menuVariants = {
    open: { display: "flex" },
    closed: { display: "none" },
  };

  const iconVariants = {
    open: { rotate: 45 },
    closed: { rotate: 0 },
  };

  return (
    <RootContainer
      border="1px solid #70707030"
      style={{
        border: "1px solid #70707030",
        opacity: 1,
        backdropFilter: "blur(7px)",
        WebkitBackdropFilter: "blur(7px)",
      }}
    >
      <Container>
        <S.NavBarRoot>
          <S.SuperSoftIcon src="/images/Logo Supersoft.svg" alt="icon" />
          <S.NavMenu>
            <NavLinks />
          </S.NavMenu>
        <BoxButton>

            <BtnDownload style={{ justifySelf: "right" }}>{t("download")} <FontAwesomeIcon icon={faDownload} width={12} /></BtnDownload>
          
        </BoxButton>
        </S.NavBarRoot>
        {/* <NavLinks /> */}
      </Container>
    </RootContainer>
  );
}

export default NavBar;
