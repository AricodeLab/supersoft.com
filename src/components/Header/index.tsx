import { useState } from "react";
import * as S from "./styled";
import { faBars, faDownload, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  RootContainer,
  BtnDownload,
  BoxButton,
} from "@components/defaults";
import NavLinks from "./navlinks";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

function NavBar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState(faBars);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIcon(icon === faBars ? faTimes : faBars);
  };

  return (
    <RootContainer
      border="1px solid #70707030"
      style={{
        border: "1px solid #70707030",
        opacity: 1,
        backdropFilter: "blur(7px)",
        WebkitBackdropFilter: "blur(7px)",
        position: "fixed",
        left: "0",
        top: "0",
        width:'100%',
        zIndex: "1000000",
        background: "#ffffffd1",
      }}
    >
      <Container>
        <S.NavBarRoot>
          <S.SuperSoftIcon src="/images/Logo Supersoft.svg" alt="icon" />
          <S.NavMenu>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <NavLinks />
            </div>
            <BoxButton>
              <BtnDownload>
                {t("download")} <FontAwesomeIcon icon={faDownload} width={12} />
              </BtnDownload>
            </BoxButton>
          </S.NavMenu>
          <S.MenuButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: 180 }}
            onClick={handleToggle}
          >

            <FontAwesomeIcon icon={icon} width={32} />
          </S.MenuButton>
        </S.NavBarRoot>
        {isOpen && (<motion.div style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          gap: "2rem",
          width: "100%",
          flexDirection: "column",
          padding: 10
        }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <NavLinks />
          <BoxButton>
            <BtnDownload>
              {t("download")} <FontAwesomeIcon icon={faDownload} width={12} />
            </BtnDownload>
          </BoxButton>
        </motion.div >)}
      </Container>
    </RootContainer>
  );
}

export default NavBar;
