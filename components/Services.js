import React from "react";
import servicesStyles from "../styles/components/Services.module.scss";
import ServiceCard from "./ServiceCard";
import vanAbierta from "../assets/van-abierta.jpg";
import recogidaTienda from "../assets/recogida-tienda.jpg";
import servicioEmbalaje from "../assets/heroImg.jpg";
import mercanciaPaletizada from "../assets/mercancia-paletizada.jpg";
import retiradaEscombros from "../assets/retirada-escombros.jpg";

const Services = () => {
  return (
    <section id="services" className={servicesStyles.serviceSection}>
      <h1 className={servicesStyles.title}>Our Services</h1>

      <div className={servicesStyles.cardWrapper}>
        <ServiceCard
          img={vanAbierta.src}
          title="Removals"
          paragraph="We carry out general removals, removals for individuals and removals for offices."
          alt="Open Van"
        />

        <ServiceCard
          img={recogidaTienda.src}
          title="Pick up at the store service"
          paragraph="We transport your purchases from the store to your home, quickly and safely."
          alt="Person delivering package to another"
        />

        <ServiceCard
          img={servicioEmbalaje.src}
          title="Packing Service"
          paragraph="We offer all kinds of packaging to ensure the care and protection of your belongings."
          alt="Person packing box"
        />

        <ServiceCard
          img={retiradaEscombros.src}
          title="Rubble Removal"
          paragraph="We remove the debris from your works quickly and efficiently."
          alt="Rubble"
          priority
        />

        <ServiceCard
          img={mercanciaPaletizada.src}
          title="Palletized Merchandise"
          paragraph="We transport your palletized merchandise."
          alt="Palletized Merchandise"
        />
      </div>
    </section>
  );
};

export default Services;
