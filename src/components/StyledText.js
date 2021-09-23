export function LargeBlueText({ ...props }) {
  return (
    <span style={{ fontSize: "20px", color: "#0000FF" }}>
      <strong>{props.text}</strong>
    </span>
  );
}

export function MediumBlueText({ ...props }) {
  return (
    <span style={{ fontSize: "16px", color: "#0000CD" }}>
      <strong>{props.text}</strong>
    </span>
  );
}

export function NormalText({ ...props }) {
  return (
    <span style={{ fontSize: "14px", color: "#000000" }}>{props.text}</span>
  );
}

export function GrayText({ ...props }) {
  return (
    <span style={{ fontSize: "14px", color: "#7a7a7a" }}>{props.text}</span>
  );
}

export function GreenText({ ...props }) {
  return (
    <p>
      <strong>
        <span style={{ color: "#008000" }}>
          <span style={{ fontSize: "16px" }}>{props.text}</span>
        </span>
      </strong>
    </p>
  );
}

export function RedText({ ...props }) {
  return (
    <span style={{ color: "#FF0000" }}>
      <strong>{props.text}</strong>
    </span>
  );
}

export function GiantRed({ ...props }) {
  return (
    <p>
      <strong>
        <span style={{ color: "red" }}>
          <span style={{ fontSize: "24px" }}>{props.text}</span>
        </span>
      </strong>
    </p>
  );
}

export function SubTitleText({ ...props }) {
  return (
    <p className="rtecenter">
      <span style={{ fontSize: "22px" }}>
        <u>
          <em>
            <strong>
              <span style={{ color: "#0000FF" }}>{props.text}</span>
            </strong>
          </em>
        </u>
      </span>
    </p>
  );
}

export function TitleText({ ...props }) {
  return <h1>{props.text}</h1>;
}

export function BulletList({ ...props }) {
  return (
    <div>
      <div>{props.title}</div>
      <ul>
        {props.array.map((item, index) => (
          <li key={index}>{item.item}</li>
        ))}
      </ul>
    </div>
  );
}
