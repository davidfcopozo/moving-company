const loadAnimation = () => {
  const boxVariants = {
    out: {
      y: 600,
    },
    in: {
      y: 0,
      transition: {
        duration: 0.9,
        // The first child will appear AFTER the parrent has appeared on the screen
        delayChildren: 0.3,
        // The next sibling will appear 0.5s after the previous one
        staggerChildren: 0.5,
        stiffness: 2,
        damping: 1,
      },
    },
  };

  const iconVariants = {
    out: {
      y: 500,
    },
    in: {
      y: 0,
    },
  };

  return {
    boxVariants,
    iconVariants,
  };
};

export default loadAnimation;
