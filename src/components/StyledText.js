export function LargeBlueText({ ...props }) {
  return (
    <span
      style={{
        fontSize: "20px",
        color: "#0000FF",
        fontWeight: props.fontWeight ? props.fontWeight : "bold",
      }}
    >
      {props.text}
    </span>
  );
}

export function MediumBlueText({ ...props }) {
  return (
    <span
      style={{
        fontSize: "16px",
        color: "#0000CD",
        fontWeight: props.fontWeight ? props.fontWeight : "bold",
      }}
    >
      {props.text}
    </span>
  );
}

export function NormalText({ ...props }) {
  return (
    <span
      style={{
        fontSize: props.fontSize ? props.fontSize : "14px",
        color: "#000000",
        fontWeight: props.fontWeight ? props.fontWeight : "normal",
      }}
    >
      {props.text}
    </span>
  );
}

export function GrayText({ ...props }) {
  return (
    <span
      style={{
        fontSize: props.fontSize ? props.fontSize : 14,
        color: "#7a7a7a",
        fontWeight: props.fontWeight ? props.fontWeight : "normal",
      }}
    >
      {props.text}
    </span>
  );
}

export function GreenText({ ...props }) {
  return (
    <p>
      <strong>
        <span style={{ color: "#008000" }}>
          <span
            style={{
              fontSize: props.fontSize ? props.fontSize : 16,
              fontWeight: props.fontWeight ? props.fontWeight : "normal",
            }}
          >
            {props.text}
          </span>
        </span>
      </strong>
    </p>
  );
}

export function RedText({ ...props }) {
  return (
    <span
      className="text-center"
      style={{
        color: "#FF0000",
        fontWeight: props.fontWeight ? props.fontWeight : "bold",
        fontSize: props.fontSize ? props.fontSize : 14,
      }}
    >
      {props.text}
    </span>
  );
}

export function GiantRed({ ...props }) {
  return (
    <p>
      <strong>
        <span
          style={{
            color: "red",
            fontSize: props.fontSize ? props.fontSize : 24,
            fontWeight: props.fontWeight ? props.fontWeight : "normal",
          }}
        >
          {props.text}
        </span>
      </strong>
    </p>
  );
}

export function SubTitleText({ ...props }) {
  return (
    <div>
      <span
        style={{
          fontSize: props.fontSize ? props.fontSize : 22,
          fontWeight: props.fontWeight ? props.fontWeight : "normal",
        }}
      >
        <u>
          <em>
            <strong>
              <span style={{ color: "#0000FF" }}>{props.text}</span>
            </strong>
          </em>
        </u>
      </span>
    </div>
  );
}

export function LightBlueText({ ...props }) {
  return (
    <h3
      style={{
        fontSize: props.fontSize ? props.fontSize : "1.75rem",
        fontWeight: props.fontWeight ? props.fontWeight : "normal",
      }}
    >
      {props.text}
    </h3>
  );
}

export function TitleText({ ...props }) {
  return (
    <h1
      style={{
        fontSize: props.fontSize ? props.fontSize : "2.5rem",
        fontWeight: props.fontWeight ? props.fontWeight : "normal",
      }}
    >
      {props.text}
    </h1>
  );
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
