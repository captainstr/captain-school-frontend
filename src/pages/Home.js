import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import Address from "../components/Address";
import SocialMedia from "../components/SocialMedia";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../resources/styles/base.css";
import "../resources/styles/captain.css";

import boat from "../resources/images/boat-luxury-river-163236.jpeg";
import {
  charterBoatTitle,
  charterBoat,
  certificate,
  experience,
  school,
} from "../resources/data/text.js";
import {
  LargeBlueText,
  MediumBlueText,
  NormalText,
} from "../components/StyledText.js";

function HeaderImage() {
  return (
    <div>
      <img src={boat} alt="" style={{ maxWidth: "100%" }} />
    </div>
  );
}

function CGNotice() {
  return (
    <div className="justify-content-center g-0" style={{ display: "flex" }}>
      <div className="covid-link">
        <a href="https://www.dco.uscg.mil/national_maritime_center/">
          Latest COVID-19 update from the Coast Guard
        </a>
      </div>
    </div>
  );
}

// TODO merge charterBoat and certificate
export default function Home() {
  return (
    <Layout>
      <HeaderImage />
      <div
        id="content"
        style={{
          display: "flex",
          gap: "2rem",
          flexDirection: "column",
          justifyContent: "space-around",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <CGNotice />
        <SocialMedia />

        <Row className="justify-content-md-center">
          <Col xs lg="7" className="text-center">
            <LargeBlueText text={charterBoatTitle} />
            <NormalText text={charterBoat} fontSize={"16px"} />
            <NormalText text={certificate} fontSize={"16px"} />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="6" className="text-center">
            <MediumBlueText text={school} />
            <MediumBlueText text={experience} />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="4" className="text-center">
            <Address />
          </Col>
        </Row>
      </div>
    </Layout>
  );
}
