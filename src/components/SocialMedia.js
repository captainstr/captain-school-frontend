import FBImg from "../resources/images/facebook.png";
import YTImg from "../resources/images/youtube.png";
import IGImg from "../resources/images/instagram.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../resources/styles/base.css";
import "../resources/styles/captain.css";

export default function SocialMedia() {
  return (
    <Row className="justify-content-center g-0">
      <Col xs="1" lg="1" id="social-media">
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
      </Col>
    </Row>
  );
}
