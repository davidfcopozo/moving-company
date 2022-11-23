import React from "react";
import Meta from "../components/Meta";
import nosotrosStyles from "../styles/pages/Nosotros.module.scss";

const about = () => {
  return (
    <>
      <Meta title="About Us" />
      <div
        className={nosotrosStyles.container}
        description="We carry out removals for both individuals and companies with
            safe, smooth and fast transitions. wherever and whenever
            want to move, we'll be there to make sure you don't have to
            worry about nothing."
      >
        <div>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>Want to talk?</p>
          <div>
            <a href="https://wa.me/3412332145" target="_blank" rel="noreferrer">
              Chat with Us<span>&gt;</span>
            </a>
            {""}
            <p className={nosotrosStyles.letterO}>or</p>
            {""}
            <a href="emailto:davidfco.pozo@hotmail.com">
              Send us an E-Mail <span>&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
