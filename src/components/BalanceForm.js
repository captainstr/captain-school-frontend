import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { brainTreeCreate } from "../controllers/registrationFormController";
import * as Yup from "yup";
import {
  CONTAINER,
  FormBraintree,
  FormCredit,
  FormName,
} from "./FormComponents";
import { useQuery } from "../utils/misc";

const genValidationSchema = (componentValues) => {
  let validationSchemaObj = {
    firstname: Yup.string()
      .min(2, "*First names must have at least 2 characters")
      .max(100, "*First names can't be longer than 100 characters")
      .required("*First name is required"),
    lastname: Yup.string()
      .min(2, "*Last names must have at least 2 characters")
      .max(100, "*Last names can't be longer than 100 characters")
      .required("*Last name is required"),
    email: Yup.string()
      .email("*Must be a valid email address")
      .max(100, "*Email must be less than 100 characters")
      .required("*Email is required"),
  };
  const validationSchema = Yup.object().shape(validationSchemaObj);
  return validationSchema;
};

const disableSubmit = (isSubmitting, values) => {
  if (isSubmitting) {
    return true;
  }
  return false;
};

export default function BalanceForm({ ...props }) {
  const query = useQuery();
  const firstname = query.get("firstname");
  const lastname = query.get("lastname");
  const amount = query.get("amount");

  useEffect(() => {
    brainTreeCreate();
  }, []);

  // necessary because Formik/Yup can't apparently track (or I can't figure out how they track) the fields inside the form for validation
  const [componentValues, setComponentValues] = useState({});

  return (
    <CONTAINER>
      <Formik
        initialValues={{
          firstname,
          lastname,
          email: "",
          amount,
        }}
        validateOnChange={true}
        validate={(values) => {
          setComponentValues(values);
        }}
        validationSchema={genValidationSchema(componentValues)}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          // When button submits form and form is in the process of submitting, submit button is disabled
          setSubmitting(true);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form
            onSubmit={handleSubmit}
            className="mx-auto"
            id="registration-form"
          >
            <div>Balance Due: ${amount}</div>
            <div>Please pay your balance</div>
            <FormName
              handleBlur={handleBlur}
              handleChange={handleChange}
              firstname={firstname}
              lastname={lastname}
            />

            <FormBraintree />

            <FormCredit handleBlur={handleBlur} handleChange={handleChange} />
            <Form.Group controlId="amount">
              <Form.Control
                name="amount"
                value={amount}
                style={{ display: "none" }}
                readOnly={true}
              />
            </Form.Group>
            <Button
              variant={
                disableSubmit(isSubmitting, values) ? "secondary" : "primary"
              }
              type="submit"
              disabled={disableSubmit(isSubmitting, values)}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </CONTAINER>
  );
}
