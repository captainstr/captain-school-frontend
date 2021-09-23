import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import Address from "../components/Address";
import SocialMedia from "../components/SocialMedia";
import "../resources/styles/base.css";
import "../resources/styles/base_two.css";
import "../resources/styles/captain.css";
import "../resources/styles/fromweb.css";
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
    <div
      id="block-block-1"
      className="block block-block contextual-links-region"
    >
      <div className="content">
        <div>
          <img src={boat} alt="" style={{ maxWidth: "100%" }} />
        </div>
      </div>
    </div>
  );
}

function CGNotice() {
  return (
    <div id="block-block-7" className="block block-block">
      <div className="content">
        <p style={{ width: "100%", textAlign: "center" }}>
          <span className="covid-link">
            <a href="https://www.dco.uscg.mil/national_maritime_center/">
              Latest COVID-19 update from the Coast Guard
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <HeaderImage />
      <div id="content">
        <CGNotice />
        <SocialMedia />

        <LargeBlueText text={charterBoatTitle} />
        <NormalText text={charterBoat} />
        <NormalText text={certificate} />

        <MediumBlueText text={school} />
        <MediumBlueText text={experience} />

        <Address />
      </div>
    </Layout>
  );
}
