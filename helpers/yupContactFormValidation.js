import * as Yup from "yup";

const yupContactFormValidation = () => {
  const contactFormInitialValues = {
    name: "",
    cel: "",
    email: "",
    details: "",
  };

  const contactFormValidationSchema = Yup.object({
    name: Yup.string().required("Campo requerido"),
    cel: Yup.number()
      .typeError("Este campo solo acepta números.")
      .min(9, "Número de teléfono imcompleto")
      .integer()
      .required("Campo requerido"),
    email: Yup.string()
      .email("Formato del correo electrónico es inválido")
      .required("Campo requerido"),
    details: Yup.string().required("Por favor, escriba su mensaje."),
  });

  return {
    contactFormValidationSchema,
    contactFormInitialValues,
  };
};

export default yupContactFormValidation;
