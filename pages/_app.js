import Layout from "../components/Layout";
import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { AnimatePresence, motion } from "framer-motion";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps, router }) {
  const pageTransition = {
    pageInitial: {
      opacity: 0,
    },
    pageAnimate: {
      opacity: 1,

      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    pageExit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={pageTransition}
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
