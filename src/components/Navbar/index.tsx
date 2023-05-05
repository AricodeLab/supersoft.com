import { useState } from "react";
import * as S from "./styled";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@components/defaults";

function NavBar() {
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
    <Container>
      <S.NavBarRoot>
        NavBar{" "}
        <S.HamburgerMenu onClick={handleToggle}>
          {" "}
          <motion.div animate="a" variants={iconVariants}>
            <FontAwesomeIcon icon={icon} />
          </motion.div>
        </S.HamburgerMenu>
        <S.NavMenu
          as={motion.ul}
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          <S.NavMenuItem>Link 1</S.NavMenuItem>
          <S.NavMenuItem>Link 2</S.NavMenuItem>
          <S.NavMenuItem>Link 3</S.NavMenuItem>
        </S.NavMenu>
      </S.NavBarRoot>
    </Container>
  );
}

export default NavBar;
