import { RedText } from "../components/StyledText.js";
import {
  addressName,
  addressStreet,
  addressState,
  addressZIP,
  addressPhoneNum,
} from "../resources/data/text.js";

function AddressMain() {
  return (
    <span>
      <RedText text={addressStreet} />
      {", "}
      <RedText text={addressState} />
      <RedText text={addressZIP} />
    </span>
  );
}

export default function Address() {
  return (
    <p className="rtecenter">
      <RedText text={addressName} />
      <AddressMain />
      <RedText text={addressPhoneNum} />
    </p>
  );
}
