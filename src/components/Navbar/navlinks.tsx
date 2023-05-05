import data from "./data.json";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { NavMenuItem } from "./styled";
import { motion } from "framer-motion";

interface NavOption {
  name: string;
  link: string;
}

interface NavLink {
  title: string;
  options?: NavOption[];
  link?: string;
}

function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {data.map((link: NavLink) => {
        if (link.options) {
          return (
            <NavMenuItem key={link.title} style={{ position: "relative" }}>
              <div onClick={toggleDropdown} style={{ display: "flex", flexDirection: "row" }}>
                <p>{link.title}</p>
                <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} />
              </div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1 }}
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  backgroundColor: "#fff",
                  minWidth: "100%",
                  zIndex: 10,
                }}
              >
                {isOpen &&
                  link.options.map((option) => (
                    <a key={option.link} href={option.link}>
                      <p>{option.name} </p>
                    </a>
                  ))}
              </motion.div>
            </NavMenuItem>
          );
        } else {
          return (
            <NavMenuItem key={link.title}>
              <a href={link.link}>
                <p>{link.title}</p>
              </a>
            </NavMenuItem>
          );
        }
      })}
    </>
  );
}

export default NavLinks;
