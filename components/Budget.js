import React from "react";
import presupuestoStyles from "../styles/components/Presupuesto.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import yupFormValidation from "../helpers/yupFormValidation";
import { motion } from "framer-motion";
import presupuestoImage from "../assets/presupuesto.jpg";
import Image from "next/image";
import Link from "next/link";

const Budget = ({ submitData }) => {
  const { initialValues, validationSchema } = yupFormValidation();
  const currentDate = new Date().toJSON().slice(0, 10);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitData}
        validateOnMount
      >
        {(formik) => {
          const clickHandler = () => {
            formik.setTouched({
              service: true,
              name: true,
              numTel: true,
              email: true,
              from: true,
              to: true,
              date: true,
            });
          };

          return (
            <Form className={presupuestoStyles.form}>
              <div className={presupuestoStyles.card}>
                <div className={presupuestoStyles.cardImage}>
                  <Image
                    src={presupuestoImage.src}
                    layout="responsive"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    objectPosition="center"
                    alt="Persona escribiendo en libreta"
                  />
                  <div className={presupuestoStyles.cardHeading}>
                    <h2>
                      Let's start
                      <small>Get your free budget</small>
                    </h2>
                  </div>
                </div>
              </div>

              <div className={presupuestoStyles.formControl}>
                <label
                  className={presupuestoStyles.inputLabel}
                  htmlFor="service"
                >
                  Service:
                </label>
                <Field
                  className={presupuestoStyles.inputField}
                  as="select"
                  name="service"
                  required
                >
                  <option value="" disabled hidden>
                    Pick a service
                  </option>
                  <option value="Removals">Removals</option>
                  <option value="Packing service">Packing service</option>
                  <option value="Rubble removal">Rubble removal</option>
                  <option value="Pick up at store">Pick up at store</option>
                  <option value="Palletized merchandise">
                    Palletized merchandise
                  </option>
                </Field>
                <ErrorMessage name="service" component={TextError} />
              </div>

              <div className={presupuestoStyles.formControl}>
                <label className={presupuestoStyles.inputLabel} htmlFor="name">
                  Name:
                </label>
                <Field
                  className={presupuestoStyles.inputField}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  required
                />
                <ErrorMessage name="name" component={TextError} />
              </div>

              <div className={presupuestoStyles.formControl}>
                <label
                  className={presupuestoStyles.inputLabel}
                  htmlFor="numTel"
                >
                  Phone Number:
                </label>
                <Field
                  className={presupuestoStyles.inputField}
                  type="tel"
                  name="numTel"
                  id="numTel"
                  placeholder="976 876 876"
                  required
                />
                <ErrorMessage name="numTel" component={TextError} />
              </div>

              <div className={presupuestoStyles.formControl}>
                <label className={presupuestoStyles.inputLabel} htmlFor="email">
                  E-Mail:
                </label>
                <Field
                  className={presupuestoStyles.inputField}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="myemail@example.com"
                  required
                />
                <ErrorMessage name="email" component={TextError} />
              </div>

              <div>
                <h3>Place of service:</h3>
                <div className={presupuestoStyles.formControl}>
                  <label
                    className={presupuestoStyles.inputLabel}
                    htmlFor="from"
                  >
                    From:
                  </label>
                  <Field
                    className={presupuestoStyles.inputField}
                    type="text"
                    name="from"
                    id="from"
                    placeholder="Postal code, town, city"
                    required
                  />
                  <ErrorMessage name="from" component={TextError} />
                </div>

                <div className={presupuestoStyles.formControl}>
                  <label className={presupuestoStyles.inputLabel} htmlFor="to">
                    To:
                  </label>
                  <Field
                    className={presupuestoStyles.inputField}
                    type="text"
                    name="to"
                    id="to"
                    placeholder="Postal code, town, city"
                    required
                  />
                  <ErrorMessage name="to" component={TextError} />
                </div>
              </div>

              <div className={presupuestoStyles.formControl}>
                <label className={presupuestoStyles.inputLabel} htmlFor="fecha">
                  Date:
                </label>

                <Field
                  className={presupuestoStyles.inputField}
                  type="date"
                  name="date"
                  id="date"
                  required
                  min={currentDate}
                />
                <ErrorMessage name="date" component={TextError} />
              </div>

              <div className={presupuestoStyles.formControl}>
                <label
                  className={presupuestoStyles.inputLabel}
                  htmlFor="details"
                >
                  Details:
                </label>
                <Field
                  className={presupuestoStyles.inputField}
                  as="textarea"
                  name="details"
                  id="details"
                  placeholder="The apartment has 3 bedrooms, a living room, a kitchen with a fridge, a dishwasher, etc..."
                />
              </div>

              <motion.button
                className={presupuestoStyles.actionBtn}
                type="submit"
                onClick={clickHandler}
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
                disabled={!formik.isValid || formik.isSubmitting ? true : false}
                style={{
                  backgroundColor:
                    !formik.isValid || (formik.isSubmitting && "gray"),
                }}
              >
                Send
              </motion.button>

              <div className={presupuestoStyles.terms}>
                <p>
                  By submitting this form you are accepting our Terms and
                  Conditions
                  <Link href="/terms" passHref legacyBehavior>
                    <a>Terms & Conditions</a>
                  </Link>
                </p>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Budget;
