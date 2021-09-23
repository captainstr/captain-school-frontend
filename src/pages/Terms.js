import {
  termsTitle,
  termsList,
  termsDesc,
  contactEmail,
} from "../resources/data/text.js";
import { TitleText, BulletList } from "../components/StyledText.js";

export default function Terms() {
  return (
    <div id="content">
      <TitleText text={termsTitle} />
      <BulletList array={termsList} />
      {termsDesc.map((term, index) => (
        <p key={index}>
          <strong>{term + " "}</strong>
          {index === termsDesc.length - 1 ? (
            <a href={contactEmail.email}>{contactEmail.label}</a>
          ) : null}
        </p>
      ))}
    </div>
  );
}
