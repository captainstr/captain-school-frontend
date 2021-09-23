import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import "../resources/styles/base.css";
import "../resources/styles/base_two.css";
import "../resources/styles/captain.css";
import "../resources/styles/fromweb.css";
import { about, aboutCapSub, aboutTitle } from "../resources/data/text.js";
import {
  GreenText,
  SubTitleText,
  TitleText,
} from "../components/StyledText.js";
import { CaptainNamedImage } from "../components/CaptainImage";
import { getActiveCaptains } from "../controllers/captainController";

export default function About() {
  const [captains, setCaptains] = useState([]);

  useEffect(() => {
    async function captainController() {
      const captains = await getActiveCaptains();
      setCaptains(captains);
    }
    captainController();
  }, []);

  return (
    <div id="content">
      <TitleText text={aboutTitle} />
      {about.map((aboutLine, index) => (
        <GreenText text={aboutLine} key={index} />
      ))}
      <SubTitleText text={aboutCapSub} />
      <table className="views-view-grid cols-4">
        <tbody>
          <tr
            className="row-1 row-first row-last"
            style={{ flexDirection: "row" }}
          >
            {Object.keys(captains).map((captain, index) => (
              <CaptainNamedImage
                captain={captains[captain]}
                slug={captain}
                key={index}
              />
            ))}
          </tr>
        </tbody>
      </table>
      <div>
        <span className="close-link">
          <a href="#">Close</a>
        </span>
      </div>
    </div>
  );
}
