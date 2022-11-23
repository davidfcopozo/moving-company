import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import footprintStyles from "../styles/components/Footprint.module.scss";

const Footprint = () => {
  const year = new Date().getFullYear();
  return (
    <div className={footprintStyles.footprint} data-testid="footprint">
      <p>
        Designed and Built by <br />
        <a href="https://davidfrancisco.dev/" target="_blank" rel="noreferrer">
          David Francisco
        </a>{" "}
        con <FontAwesomeIcon icon={faMugHot} />
      </p>
      <p>
        <small>
          &copy;Copyright {year} Moving Company, all rights reversed.
        </small>{" "}
      </p>
    </div>
  );
};

export default Footprint;
