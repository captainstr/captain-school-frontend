import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { states } from "../resources/data/constants";

export const CONTAINER = styled.div`
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

export function FormName({ ...props }) {
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
              defaultValue={props.firstname ? props.firstname : ""}
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
              defaultValue={props.lastname ? props.lastname : ""}
            />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
}

export function FormBraintree() {
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

export function FormCredit({ ...props }) {
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

export function FormAddress({ ...props }) {
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
