import React, { useEffect, useState } from "react";
import formSuccessStyles from "../styles/components/FormSuccess.module.scss";
import { motion } from "framer-motion";
import xMark from "../assets/xMark.svg";
import checkMark from "../assets/check.svg";
import Image from "next/image";

const FormSuccess = ({ success, fail }) => {
  const [open, setOpen] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setOpen(success.success);
    if (success || fail) {
      setFormSubmitted(true);
    }
  }, [success]);

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 2,
        type: "spring",
        damping: 25,
        stiffness: 100,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      duration: 2,
      stiffness: 200,
    },
  };

  const handleModalContainerClick = (e) => {
    e.stopPropagation();
    const modalContainer = document.getElementById("successContainer");
    modalContainer.addEventListener("click", (e) => {
      if (e.target === modalContainer) {
        setFormSubmitted(false);
      }
    });
  };

  const bgColor = open ? "#43C467" : "#ff0000";

  return (
    <motion.div
      initial="hidden"
      variants={dropIn}
      animate={formSubmitted ? "visible" : "hidden"}
      exit="exit"
      className={`${formSuccessStyles.successContainer} ${
        formSubmitted && formSuccessStyles.isActive
      }`}
      id="successContainer"
      onClick={handleModalContainerClick}
    >
      <div className={formSuccessStyles.messageBox}>
        <div className={formSuccessStyles.imgContainer}>
          <Image
            layout="responsive"
            width="100%"
            height="100%"
            objectFit="cover"
            objectPosition="center"
            src={open ? checkMark.src : xMark.src}
            alt={open ? "Green checkmark" : "Red X"}
          />
        </div>

        <h2>{open ? "Thank you!" : "Sorry!"}</h2>
        <p>
          {open
            ? "You will be hearing from us soon."
            : "Something went wrong. Please try again"}
        </p>
        <motion.button
          style={{ backgroundColor: `${bgColor}` }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setFormSubmitted(false)}
        >
          {open ? "Ok!" : "Try Again"}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FormSuccess;
