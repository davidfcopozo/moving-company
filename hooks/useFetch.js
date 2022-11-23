import { useState } from "react";
import { useSuccessContext } from "../context/FormSuccessContext";

const useFetch = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const { setSuccess, setFail } = useSuccessContext();

  const submitData = (values, onSubmitProps) => {
    fetch("https://formsubmit.co/ajax/indidseo@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Service: values.service,
        Nombre: values.name,
        Telefono: values.numTel,
        Correo: values.email,
        Desde: values.from,
        Hasta: values.to,
        Fecha: values.date,
        Detalles: values.details,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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

  return [data, error, submitData];
};

export default useFetch;
