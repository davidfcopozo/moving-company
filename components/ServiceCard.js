import React from "react";
import Image from "next/image";
import serviceCardStyles from "../styles/components/ServiceCard.module.scss";

const ServiceCard = ({ img, title, paragraph, alt }) => {
  return (
    <div className={serviceCardStyles.card}>
      <div className={serviceCardStyles.imgWrapper}>
        <Image
          className={serviceCardStyles.imgWrapper}
          src={img}
          layout="responsive"
          width="100%"
          height="100%"
          objectFit="cover"
          objectPosition="center"
          alt={alt}
          priority
        />
      </div>
      <div className={serviceCardStyles.textsWrapper}>
        <h2>{title}</h2>
        <span></span>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
