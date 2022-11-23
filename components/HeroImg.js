import React from "react";
import Button from "./Button";
import heroImgStyles from "../styles/components/HeroImg.module.scss";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const ref = React.createRef();

const HeroImg = ({ img, imgAlt, title, btnValue }) => {
  const { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <motion.div className={heroImgStyles.heroContainer} style={{ y }}>
      <div className={heroImgStyles.heroImgContainer}>
        <Image
          src={img}
          layout="responsive"
          width="100%"
          height="100%"
          objectFit="cover"
          objectPosition="center"
          alt={imgAlt}
          priority
        />
      </div>
      <div className={heroImgStyles.heroText} style={{ y }}>
        <h1>{title}</h1>
        <Link href="/contact" passHref legacyBehavior>
          <Button ref={ref} value={btnValue} />
        </Link>
      </div>
    </motion.div>
  );
};

export default HeroImg;
