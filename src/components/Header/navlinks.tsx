import data from "./data.json";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { NavMenuItem } from "./styled";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {data.map((link: NavLink) => {
        if (link.options) {
          return (
            <NavMenuItem key={link.title} style={{ position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "row"}}>
  <div
    onClick={toggleDropdown}
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",

    }}
  >
    <p style={{ margin: "0", fontWeight: "bold" }}>{t(link.title)}</p>
    <FontAwesomeIcon
      icon={isOpen ? faAngleUp : faAngleDown}
      width={12}
      style={{ marginLeft: 5 }}
    />
  </div>
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 1 }}
    style={{
      display: isOpen ? "block" : "none",
      position: "absolute",
      top: "100%",
      left: "0",
      backgroundColor: "#fff",
      minWidth: "100%",
      zIndex: 10,
      padding: "5px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      textAlign: "left"
    }}
  >
    {isOpen &&
      link.options.map((option) => (
        <a key={option.link} href={option.link}>
          <p style={{ margin: "5px 25px", padding: "5px ", fontWeight: "normal" }}>
            {t(option.name)}
          </p>
        </a>
      ))}
  </motion.div>
</div>

            </NavMenuItem>
          );
        } else {
          return (
            <NavMenuItem key={link.title}>
              <a href={link.link}>
                <p>{t(link.title)}</p>
              </a>
            </NavMenuItem>
          );
        }
      })}
    </>
  );
}

export default NavLinks;
