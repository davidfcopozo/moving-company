import React from "react";
import Button from "./Button";
import contactHeroImgStyles from "../styles/components/ContactHeroImg.module.scss";
import Image from "next/image";
import Link from "next/link";

const ContactHeroImg = ({ img, imgAlt, title, btnValue }) => {
  return (
    <div className={contactHeroImgStyles.heroContainer}>
      <div className={contactHeroImgStyles.heroImgContainer}>
        <Image
          layout="responsive"
          width="100%"
          height="100%"
          objectFit="cover"
          objectPosition="center"
          src={img}
          alt={imgAlt}
        />
      </div>
      <div className={contactHeroImgStyles.heroText}>
        <h1>{title}</h1>
        <Link href="/contact" passHref legacyBehavior>
          <Button value={btnValue} />
        </Link>
      </div>
    </div>
  );
};

export default ContactHeroImg;
