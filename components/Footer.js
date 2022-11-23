import React from "react";
import footerStyles from "../styles/components/Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelopesBulk,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import logoIcon from "../assets/juank.svg";
import Image from "next/image";
import Footprint from "./Footprint";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className={footerStyles.footer}>
        <div className={footerStyles.contactIcons}>
          <div>
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+34664067981">664 067 981</a>
          </div>

          <div>
            <FontAwesomeIcon icon={faEnvelopesBulk} />
            <a href="emailto:indidseo@gmail.com">example@mail.com</a>
          </div>

          {/* <div>
          <FontAwesomeIcon icon={faLocationCrosshairs} />
          <a href="emailto:indidseo@gmail.com">example@mail.com</a>
        </div> */}
        </div>

        <hr />

        <div className={footerStyles.socialFooter}>
          <div className={footerStyles.imgContainer}>
            <Link href="/">
              <a>
                <Image
                  src={logoIcon.src}
                  width="100%"
                  height="100%"
                  alt="Logo"
                />
              </a>
            </Link>
          </div>

          <div className={footerStyles.footprint}>
            <div>
              <FontAwesomeIcon icon={faFacebookF} />
            </div>

            <div>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
      </footer>
      <Footprint />
    </>
  );
};

export default Footer;
