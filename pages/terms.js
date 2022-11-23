import React from "react";
import Meta from "../components/Meta";
import terminosStyles from "../styles/pages/Terminos.module.scss";

const terms = () => {
  return (
    <>
      <Meta title="Terms and Conditions" description="Terms and Conditions" />
      <div className={terminosStyles.container}>
        <h2>Welcome to Moving Company!</h2>
        <p>
          These terms and conditions outline the rules and regulations for the
          use of Company Name&apos;s Website, located at Website.com.
        </p>
        <p>
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use Website Name if you do not agree to
          take all of the terms and conditions stated on this page.
        </p>
        <p>
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and all Agreements: “Client”,
          “You” and “Your” refers to you, the person log on this website and
          compliant to the Company&apos;s terms and conditions. “The Company”,
          “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”,
          “Parties”, or “Us”, refers to both the Client and ourselves. All terms
          refer to the offer, acceptance and consideration of payment necessary
          to undertake the process of our assistance to the Client in the most
          appropriate manner for the express purpose of meeting the
          Client&apos;s needs in respect of provision of the Company&apos;s
          stated services, in accordance with and subject to, prevailing law of
          Netherlands. Any use of the above terminology or other words in the
          singular, plural, capitalization and/or he/she or they, are taken as
          interchangeable and therefore as referring to same.
        </p>
        <h3>Cookies</h3>
        <p>
          We employ the use of cookies. By accessing Website Name, you agreed to
          use cookies in agreement with the Company Name&apos;s Privacy Policy.
        </p>
        <p>
          Most interactive websites use cookies to let us retrieve the
          user&apos;s details for each visit. Cookies are used by our website to
          enable the functionality of certain areas to make it easier for people
          visiting our website. Some of our affiliate/advertising partners may
          also use cookies.
        </p>
        <h3>License</h3>
        <p>
          Unless otherwise stated, Company Name and/or its licensors own the
          intellectual property rights for all material on Website Name. All
          intellectual property rights are reserved. You may access this from
          Website Name for your own personal use subjected to restrictions set
          in these terms and conditions.
        </p>
      </div>
    </>
  );
};

export default terms;
