import {
  registerTitle,
  registerText,
  registerUnpaidText,
} from "../resources/data/text.js";
import { TitleText } from "../components/StyledText.js";
import format from "string-format";

const processRegistered = (text) => {
  const formatObj = {
    title: window.classValue.title,
    cost: depositType(window.registration.depositcheck),
  };
  let formattedText = format(text, formatObj);
  return formattedText;
};

const depositType = (type) => {
  if (type === "Deposit") {
    return window.registration.deposit;
  } else if (type === "Full") {
    return window.registration.amount;
  }
};

export default function Registered({ ...props }) {
  return (
    <div
      id="content"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        paddingBottom: "30vh",
        paddingHorizontal: 10,
        textAlign: "center",
      }}
    >
      <TitleText text={processRegistered(registerTitle)} fontSize={"1.5rem"} />
      {window.registration.depositcheck === "NA" ? <Unpaid /> : <Paid />}
    </div>
  );
}

function Paid({ ...props }) {
  return (
    <>
      {registerText.map((text, index) => (
        <p key={index}>
          <strong>{processRegistered(text)}</strong>
        </p>
      ))}
    </>
  );
}

function Unpaid({ ...props }) {
  return (
    <>
      {registerUnpaidText.map((text, index) => (
        <p key={index}>
          <strong>{processRegistered(text)}</strong>
        </p>
      ))}
    </>
  );
}
