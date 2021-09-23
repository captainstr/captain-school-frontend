import { downloadsTitle } from "../resources/data/text.js";
import { downloads } from "../resources/data/downloads.js";
import { TitleText, LargeBlueText } from "../components/StyledText.js";

export default function Downloads() {
  return (
    <div id="content">
      <TitleText text={downloadsTitle} />
      {downloads.map((download, index) => (
        <p key={index}>
          <a href={download.file}>
            <LargeBlueText text={download.name} />
          </a>
          <LargeBlueText text={download.desc} />
        </p>
      ))}
    </div>
  );
}
