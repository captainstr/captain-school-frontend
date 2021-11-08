// TODO figure out a way to override _reboot.scss
export function CaptainNamedImage({ ...props }) {
  return (
    <td
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <span>
        <a
          style={{ textDecoration: "none" }}
          href={"captain/" + props.captain.slug}
        >
          {props.captain.fullname}
        </a>
      </span>
      <CaptainImage captain={props.captain} />
    </td>
  );
}
export function CaptainImage({ ...props }) {
  return (
    <div>
      <a href={"captain/" + props.captain.slug}>
        {/*TODO move to an even higher function in... app.js? to determine what server*/}
        <img
          style={{ objectFit: "cover", height: 150, width: 150 }}
          src={"http://localhost:1337" + props.captain.image.url}
          alt=""
        />
      </a>
    </div>
  );
}
