import React, { useState } from "react";
import ContactForm from "./ContactForm";
import { useSuccessContext } from "../context/FormSuccessContext";
import FormText from "./FormText";

const FormParent = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const styles = {
    marginInline: "auto",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const { setSuccess, setFail } = useSuccessContext();

  const submitForm = (values, onSubmitProps) => {
    fetch("https://formsubmit.co/ajax/indidseo@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        NName: values.name,
        Phone: values.cel,
        Email: values.email,
        Details: values.details,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        setData(data);
        setSuccess(data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setFail(error);
      });
  };

  return (
    <div style={styles}>
      <FormText />
      <ContactForm submitForm={submitForm} data={data} error={error} />
    </div>
  );
};

export default FormParent;
