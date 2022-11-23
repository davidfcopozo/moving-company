import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faHouseChimney,
  faTruckFast,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";
import navStyles from "../styles/components/Nav.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

const Nav = ({ navIsOpen, closeNav }) => {
  const slideIn = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: "0",
      transition: {
        delay: 0.2,
        type: "spring",
        damping: 25,
        stiffness: 100,
      },
    },
  };

  const handleNavContainerClick = (e) => {
    const navContainer = document.getElementById("navDiv");
    const navLi = document.querySelector("navLi");

    navContainer.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target === navContainer || e.target.classList.contains("navLi")) {
        e.stopPropagation();
        closeNav();
      }
    });
  };

  return (
    <motion.nav
      variants={slideIn}
      initial="hidden"
      animate={navIsOpen ? "visible" : "hidden"}
      className={`${navStyles.navContainer} ${
        navIsOpen && navStyles.navActive
      }`}
      id="navDiv"
      onClick={handleNavContainerClick}
    >
      <ul className={`${navStyles.nav}`}>
        <li>
          <Link href="/">
            <a className="navLi">
              <FontAwesomeIcon icon={faHouseChimney} /> Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#services">
            <a className="navLi">
              <FontAwesomeIcon icon={faTruckFast} /> Services
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact" legacyBehavior>
            <a className="navLi">
              <FontAwesomeIcon icon={faHeadset} /> Contact
            </a>
          </Link>
        </li>

        <li>
          <Link href="/about">
            <a className="navLi">
              <FontAwesomeIcon icon={faChalkboardUser} /> About Us
            </a>
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Nav;
