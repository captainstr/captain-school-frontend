import { registerTitle, registerText } from "../resources/data/text.js";
import { TitleText } from "../components/StyledText.js";
import Layout from "../components/Layout";
import format from "string-format";

export default function Registered({ ...props }) {
  const state = props.location.state;
  console.log("thank you page data");
  console.log(state.registration.depositcheck);
  const processRegistered = (text) => {
    const formatObj = {
      title: state.classValue.title,
      cost: depositType(state.registration.depositcheck),
    };
    let formattedText = format(text, formatObj);
    return formattedText;
  };

  const depositType = (type) => {
    if (type === "Deposit") {
      return state.registration.deposit;
    } else if (type === "Full") {
      return state.registration.amount;
    }
  };

  return (
    <Layout>
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
        }}
      >
        <TitleText text={processRegistered(registerTitle)} fontSize={"2rem"} />
        {registerText.map((text, index) => (
          <p key={index}>
            <strong>{processRegistered(text)}</strong>
          </p>
        ))}
      </div>
    </Layout>
  );
}
