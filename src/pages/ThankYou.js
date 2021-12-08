import { registerTitle, registerText } from "../resources/data/text.js";
import { TitleText } from "../components/StyledText.js";
import Layout from "../components/Layout";
import format from "string-format";

export default function Registered({ ...props }) {
  const state = props.location.state;
  const processRegistered = (text) => {
    const formatObj = {
      title: state.classValue.title,
      cost: state.registration.depositcheck
        ? state.registration.deposit
        : state.registration.amount,
    };
    let formattedText = format(text, formatObj);
    return formattedText;
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
