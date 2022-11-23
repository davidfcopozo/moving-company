import React from "react";
import { motion } from "framer-motion";
import btnStyles from "../styles/components/Button.module.scss";

const Button = React.forwardRef(({ onClick, href, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 1.1 }}
      className={btnStyles.btn}
      onClick={onClick}
    >
      {props.value}
    </motion.button>
  );
});
Button.displayName = "Button";
export default Button;
