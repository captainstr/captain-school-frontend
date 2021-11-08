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
    <Row className="justify-content-md-center">
      <Row>
        <RedText text={addressName} />
      </Row>
      <Row>
        <AddressMain />
      </Row>
      <Row>
        <RedText text={addressPhoneNum} />
      </Row>
    </Row>
  );
}
