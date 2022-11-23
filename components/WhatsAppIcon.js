import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import whatsAppIconStyles from "../styles/components/WhatsAppIcon.module.scss";

const WhatsAppIcon = () => {
  const iconStyles = {
    width: "2em",
    color: "#ffffff",
    height: "2em",
  };
  return (
    <a
      href="https://wa.me/3412312312"
      target="_blank"
      rel="noreferrer"
      className={whatsAppIconStyles.iconContainer}
    >
      <FontAwesomeIcon style={iconStyles} icon={faWhatsapp} />
    </a>
  );
};

export default WhatsAppIcon;
