import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { states } from "../resources/data/constants";
import { saveRegistrations } from "../controllers/registrationFormController";
import * as Yup from "yup";
import styled from "styled-components";

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

const validationSchema = Yup.object().shape({
  fname: Yup.string()
    .min(2, "*First names must have at least 2 characters")
    .max(100, "*First names can't be longer than 100 characters")
    .required("*First name is required"),
  lname: Yup.string()
    .min(2, "*Last names must have at least 2 characters")
    .max(100, "*Last names can't be longer than 100 characters")
    .required("*Last name is required"),
  email: Yup.string()
    .email("*Must be a valid email address")
    .max(100, "*Email must be less than 100 characters")
    .required("*Email is required"),
  phone: Yup.string()
    .matches(phoneRegExp, "*Phone number is not valid")
    .required("*Phone number required"),
  authaccept: Yup.array()
    .length(1, "*Term acceptance is required")
    .required("*Term acceptance is required"),
});

const disableSubmit = (isSubmitting, values) => {
  console.log("values");
  console.log(values);
  if (isSubmitting) {
    return true;
  }
  if (values.authaccept.length !== 1) {
    return true;
  }
  return false;
};

function FormAddress({ ...props }) {
  return (
    <>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              name="address"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formGridAddress2">
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
          <Form.Group as={Col} controlId="formGridCity">
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
      <Form.Group as={Col} controlId="formGridZip">
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
              name="fname"
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
              name="lname"
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
          <Form.Group controlId="formCardNum">
            <Form.Label>Card Number :</Form.Label>
            <Form.Control
              type="text"
              name="card-number"
              //id="card-number"
              placeholder="Card Number"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formExpDate">
            <Form.Label>Expiration Date :</Form.Label>
            <Form.Control
              type="text"
              name="expiration-date"
              //id="expiration-date"
              placeholder="Exp. Date"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="formCVV">
        <Form.Label>CVV :</Form.Label>
        <Form.Control
          type="password"
          name="cvv"
          //id="cvv"
          placeholder="CVV"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
      </Form.Group>
    </>
  );
}

export default function RegistrationForm() {
  return (
    <CONTAINER>
      <Formik
        initialValues={{
          fname: "",
          lname: "",
          email: "",
          phone: "",
          authaccept: [],
          deposit: "n/a",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // When button submits form and form is in the process of submitting, submit button is disabled
          setSubmitting(true);

          // Simulate submitting to database, shows us values submitted, resets form
          saveRegistrations(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            //resetForm();
            setSubmitting(false);
          }, 500);
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
          <Form onSubmit={handleSubmit} className="mx-auto">
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
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.phone && errors.phone ? "error" : null}
              />
              {touched.phone && errors.phone ? (
                <div className="error-message">{errors.phone}</div>
              ) : null}
            </Form.Group>
            <FormAddress handleBlur={handleBlur} handleChange={handleChange} />
            <FormBraintree />

            <Form.Group className="mb-3" id="formGridCheckbox">
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

            <FormCredit handleBlur={handleBlur} handleChange={handleChange} />

            <Form.Group controlId="formDeposit">
              <Form.Check
                type={"radio"}
                label={"N/A"}
                //id={"NA"}
                name="deposit"
                onChange={handleChange}
                value="n/a"
                onBlur={handleBlur}
              />
              <Form.Check
                type={"radio"}
                label={"Deposit"}
                //id={"deposit"}
                name="deposit"
                onChange={handleChange}
                value="deposit"
                onBlur={handleBlur}
              />
              <Form.Check
                type={"radio"}
                label={"Full"}
                //id={"full"}
                name="deposit"
                onChange={handleChange}
                value="full"
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
