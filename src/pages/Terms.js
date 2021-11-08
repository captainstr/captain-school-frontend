import {
  termsTitle,
  termsList,
  termsDesc,
  contactEmail,
} from "../resources/data/text.js";
import { TitleText, BulletList } from "../components/StyledText.js";

export default function Terms() {
  return (
    <div style={{ fontSize: 14 }}>
      <BulletList
        array={termsList}
        color={"red"}
        textAlign={"left"}
        fontWeight={"bold"}
      />
      {termsDesc.map((term, index) => (
        <div key={index} style={{ textAlign: "left", padding: 10 }}>
          <strong>{term + " "}</strong>
          {index === termsDesc.length - 1 ? (
            <a href={contactEmail.email}>{contactEmail.label}</a>
          ) : null}
        </div>
      ))}
    </div>
  );
}
