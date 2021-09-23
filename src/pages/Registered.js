import { registerTitle, registerText } from "../resources/data/text.js";
import { TitleText } from "../components/StyledText.js";

export default function Registered() {
  return (
    <div id="content">
      <TitleText text={registerTitle} />
      {registerText.map((text, index) => (
        <p key={index}>
          <strong>{text}</strong>
        </p>
      ))}
    </div>
  );
}
