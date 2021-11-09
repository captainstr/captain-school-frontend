import { RedText } from "../components/StyledText.js";
import {
  addressName,
  addressStreet,
  addressState,
  addressZIP,
  addressPhoneNum,
} from "../resources/data/text.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AddressMain() {
  return (
    <div className="text-center">
      <RedText text={addressStreet} />
      <RedText text={", "} />
      <RedText text={addressState} /> <RedText text={addressZIP} />
    </div>
  );
}

export default function Address() {
  return (
    <Row className="justify-content-md-center g-0">
      <Row className="g-0">
        <RedText text={addressName} />
      </Row>
      <Row className="g-0">
        <AddressMain />
      </Row>
      <Row className="g-0">
        <RedText text={addressPhoneNum} />
      </Row>
    </Row>
  );
}
