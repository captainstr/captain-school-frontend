import FBImg from "../resources/images/facebook.png";
import YTImg from "../resources/images/youtube.png";
import IGImg from "../resources/images/instagram.png";
import "../resources/styles/base.css";
import "../resources/styles/base_two.css";
import "../resources/styles/captain.css";
import "../resources/styles/fromweb.css";

export default function SocialMedia() {
  return (
    <div id="block-block-6" className="block block-block">
      <div className="content">
        <div>
          <div className="sm-ic">
            <a href="https://www.facebook.com/captainsschool/">
              <img alt="" height="32" src={FBImg} width="32" />
            </a>
          </div>
          <div className="sm-ic">
            <img alt="" height="32" src={YTImg} width="32" />
          </div>
          <div className="sm-ic">
            <img alt="" height="32" src={IGImg} width="32" />
          </div>
        </div>
      </div>
    </div>
  );
}
