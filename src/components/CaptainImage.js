export function CaptainNamedImage({ ...props }) {
  return (
    <td>
      <span>
        <a href={"captain/" + props.captain.slug}>{props.captain.fullname}</a>
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
          src={"http://localhost:1337" + props.captain.image.url}
          width="164"
          height="220"
          alt=""
        />
      </a>
    </div>
  );
}
