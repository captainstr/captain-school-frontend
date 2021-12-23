import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { maxAllowDepositDate } from "../resources/data/constants";
import {
  saveRegistrations,
  brainTreeCreate,
  addressFormatter,
  sendNAEmail,
} from "../controllers/registrationFormController";
import * as Yup from "yup";
import {
  CONTAINER,
  FormBraintree,
  FormCredit,
  FormName,
  FormAddress,
  FormPaymentRadio,
  FormHiddenFields,
} from "./FormComponents";
import Terms from "../pages/Terms";
import Collapsible from "react-collapsible";
import { RedText } from "../components/StyledText";
import { withRouter } from "react-router-dom";

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

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
    phone_number: Yup.string()
      .matches(phoneRegExp, "*Phone number is not valid")
      .required("*Phone number required"),
  };
  if (componentValues.depositcheck !== "NA") {
    validationSchemaObj.authaccept = Yup.array()
      .length(1, "*Term acceptance is required")
      .required("*Term acceptance is required");
  }
  const validationSchema = Yup.object().shape(validationSchemaObj);
  return validationSchema;
};

const dateWithinDepositRange = (classValue) => {
  const diff = new Date(classValue.date) - new Date(Date.now());
  let diff_days = Math.floor(diff / (1000 * 3600 * 24));
  if (diff_days >= maxAllowDepositDate) {
    return true;
  }
  return false;
};

const disableSubmit = (isSubmitting, values) => {
  if (isSubmitting) {
    return true;
  }
  if (values.authaccept.length !== 1 && values.depositcheck !== "NA") {
    return true;
  }
  return false;
};

function RegistrationForm({ ...props }) {
  const [braintree, setBrainTree] = useState(null);

  useEffect(() => {
    brainTreeCreate();
  }, [braintree]);

  const [componentValues, setComponentValues] = useState({
    depositcheck: null,
  });

  useEffect(() => {
    document.querySelector("#registration-form").addEventListener(
      "braintreefinished",
      () => {
        props.history.push({
          pathname: "/registered",
          state: {
            classValue: props.classValue,
            registration: componentValues,
          },
        });
      },
      false
    );
  }, [props, componentValues]);

  return (
    <CONTAINER>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          phone_number: "",
          authaccept: [],
          depositcheck: "",
          amount: props.classValue.amount,
          class: props.classValue.id,
          deposit: props.classValue.deposit,
          class_type: props.classValue.class_type,
          date: props.classValue.date,
          classroom_location: props.classValue.classroom_location,
          title: props.classValue.title,
          captain: props.classValue.captain,
        }}
        validateOnChange={true}
        validate={(values) => {
          if (values.depositcheck !== "NA") {
            setBrainTree(true);
          } else {
            setBrainTree(false);
          }
          setComponentValues(values);
        }}
        validationSchema={genValidationSchema(componentValues)}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          if (values.depositcheck === "NA") {
            values.address = addressFormatter(
              values.address1,
              values.address2,
              values.city,
              values.state,
              values.zip
            );
            saveRegistrations(values);
            sendNAEmail(values);
          }
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
            style={{ display: "flex", gap: 10, flexDirection: "column" }}
          >
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.email && errors.email ? "error" : null}
              />
              {touched.email && errors.email ? (
                <div className="error-message">{errors.email}</div>
              ) : null}
            </Form.Group>
            <FormName handleBlur={handleBlur} handleChange={handleChange} />
            <Form.Group controlId="formPhone">
              <Form.Label>
                Phone <RedText text={"*"} />
              </Form.Label>
              <Form.Control
                type="text"
                name="phone_number"
                placeholder="Phone"
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.phone && errors.phone ? "error" : null}
              />
              {touched.phone_number && errors.phone_number ? (
                <div className="error-message">{errors.phone_number}</div>
              ) : null}
            </Form.Group>
            <FormAddress handleBlur={handleBlur} handleChange={handleChange} />
            {values.depositcheck !== "NA" ? <FormBraintree /> : null}

            {values.depositcheck !== "NA" ? (
              <>
                <Collapsible trigger="Terms" triggerTagName={"div"}>
                  <Terms />
                </Collapsible>
                <Form.Group className="mb-3" id="formCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I accept"
                    name="authaccept"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.authaccept && errors.authaccept ? (
                    <div className="error-message">{errors.authaccept}</div>
                  ) : null}
                </Form.Group>
                <FormCredit
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </>
            ) : null}

            {dateWithinDepositRange(props.classValue) ? null : (
              <strong className="amount-calc-date" style={{ color: "#7a7a7a" }}>
                {"You may only pay the full amount when less than " +
                  maxAllowDepositDate +
                  " days from the class"}
              </strong>
            )}

            <FormPaymentRadio
              {...props}
              handleChange={handleChange}
              handleBlur={handleBlur}
              dateWithinDepositRange={dateWithinDepositRange}
            />

            <FormHiddenFields {...props} />

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

export default withRouter(RegistrationForm);
