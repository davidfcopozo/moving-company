import Head from "next/head";
import React from "react";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/juank.svg" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Moving company",
  keywords:
    "Removals in your City, Removals, Light transport, Packing service, Palletized merchandise, Loading and unloading, Debris removal",
  description: "Transport Services.",
};

export default Meta;
