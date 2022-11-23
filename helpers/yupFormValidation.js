import * as Yup from "yup";

const yupFormValidation = () => {
  const initialValues = {
    service: "",
    name: "",
    numTel: "",
    email: "",
    from: "",
    to: "",
    date: "",
    details: "",
  };

  const validationSchema = Yup.object({
    service: Yup.string().required("Field required"),
    name: Yup.string().required("Field required"),

    numTel: Yup.number()
      .typeError("This field only accepts numbers.")
      .min(9, "Incomplete phone number.")
      .integer()
      .required("Field required"),
    email: Yup.string()
      .email("Invalid email format.")
      .required("Field required"),

    from: Yup.string().required(
      "Please indicate from where the service will be made."
    ),
    to: Yup.string().required(
      "Please indicate where the service will be delivered."
    ),

    date: Yup.date().required(`Please indicate the service date`),
    details: Yup.string(),
  });

  return {
    initialValues,
    validationSchema,
  };
};

export default yupFormValidation;
