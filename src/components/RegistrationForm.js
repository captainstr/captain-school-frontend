import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { states, maxAllowDepositDate } from "../resources/data/constants";
import {
  saveRegistrations,
  brainTreeCreate,
  addressFormatter,
} from "../controllers/registrationFormController";
import * as Yup from "yup";
import styled from "styled-components";
import Terms from "../pages/Terms";
import Collapsible from "react-collapsible";

const CONTAINER = styled.div`
  height: auto;
  color: snow;
  label {
    color: #7a7a7a;
    font-size: 0.9em;
    font-weight: bold;
  }
  .error {
    border: 2px solid #ff6565;
  }
  .error-message {
    color: #ff6565;
    padding: 0.5em;

    font-size: 0.8em;
  }
  h1 {
    color: #24b9b6;
    padding-top: 0.5em;
  }
`;

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

function FormAddress({ ...props }) {
  return (
    <>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              name="address1"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              placeholder="Apartment, studio, or floor"
              name="address2"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Group as={Col} controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              name="city"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formState">
            <Form.Label>State</Form.Label>
            <Form.Select
              name="state"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            >
              {states.map((state, index) => (
                <option key={index}>{state}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group as={Col} controlId="formZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control
          name="zip"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
      </Form.Group>
    </>
  );
}

function FormName({ ...props }) {
  return (
    <>
      <Row>
        <Col>
          <Form.Group controlId="formFName">
            <Form.Label>First Name :</Form.Label>
            <Form.Control
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formLName">
            <Form.Label>Last Name :</Form.Label>
            <Form.Control
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
}

function FormBraintree() {
  return (
    <div>
      <a
        href="https://www.braintreegateway.com/merchants/x9y6vyyq6gv34bmt/verified"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt=""
          height="44px"
          src="https://s3.amazonaws.com/braintree-badges/braintree-badge-wide-light.png"
          width="280px"
        />
      </a>
    </div>
  );
}

function FormCredit({ ...props }) {
  return (
    <>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Card Number :</Form.Label>
            <div
              type="text"
              className="braintree-field"
              name="card-number"
              id="card-number"
              placeholder="Card Number"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Expiration Date :</Form.Label>
            <div
              type="text"
              className="braintree-field"
              name="expiration-date"
              id="expiration-date"
              placeholder="Exp. Date"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group>
        <Form.Label>CVV :</Form.Label>
        <div
          type="password"
          className="braintree-field"
          name="cvv"
          id="cvv"
          placeholder="CVV"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
      </Form.Group>
    </>
  );
}

export default function RegistrationForm({ ...props }) {
  const [braintree, setBrainTree] = useState(null);

  useEffect(() => {
    brainTreeCreate();
  }, [braintree]);

  // necessary because Formik/Yup can't apparently track (or I can't figure out how they track) the fields inside the form for validation
  const [componentValues, setComponentValues] = useState({
    depositcheck: null,
  });

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
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          if (values.depositcheck === "NA") {
            values.address = addressFormatter(
              values.address1,
              values.address2,
              values.city,
              values.state,
              values.zip
            );
            saveRegistrations(values);
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
          >
            <Form.Group controlId="formEmail">
              <Form.Label>Email :</Form.Label>
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
              <Form.Label>Phone :</Form.Label>
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
              <strong className="amount-calc-date" style={{ color: "orange" }}>
                {"You may only pay the full amount when less than " +
                  maxAllowDepositDate +
                  " days from the class"}
              </strong>
            )}
            <div style={{ color: "orange" }}>
              Tuition: ${props.classValue.amount}
            </div>
            <Form.Group controlId="amount">
              <Form.Control
                name="amount"
                value={props.classValue.amount}
                style={{ display: "none" }}
                readOnly={true}
              />
            </Form.Group>
            <Form.Group controlId="formClass">
              <Form.Control
                name="formClass"
                value={props.classValue.id}
                style={{ display: "none" }}
                readOnly={true}
              />
            </Form.Group>

            <Form.Group controlId="formDeposit">
              <Form.Check
                type={"radio"}
                label={"N/A"}
                name="depositcheck"
                onChange={handleChange}
                value="NA"
                onBlur={handleBlur}
              />
              {dateWithinDepositRange(props.classValue) ? (
                <Form.Check
                  type={"radio"}
                  label={"Deposit"}
                  name="depositcheck"
                  onChange={handleChange}
                  value="Deposit"
                  onBlur={handleBlur}
                />
              ) : null}
              <Form.Check
                type={"radio"}
                label={"Full"}
                name="depositcheck"
                onChange={handleChange}
                value="Full"
                onBlur={handleBlur}
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
