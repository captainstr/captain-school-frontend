import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import "../resources/styles/base.css";
import "../resources/styles/base_two.css";
import "../resources/styles/captain.css";
import "../resources/styles/fromweb.css";
import helm from "../resources/images/helm.jpeg";
import {
  privateClasses,
  privateClassesSub,
  privateClassesTitle,
} from "../resources/data/text.js";
import { SubTitleText, TitleText } from "../components/StyledText.js";

function Wheel() {
  return (
    <div>
      <SubTitleText text={privateClassesSub} />
      <img alt="" height="88" src={helm} width="88" />
    </div>
  );
}

export default function PrivateClasses() {
  return (
    <div
      className="node node-page contextual-links-region"
      about="/private-classes"
    >
      <TitleText text={privateClassesTitle} />
      <p>
        {privateClasses.map((privateClass, index) => (
          <div key={index}>
            <span style={{ fontSize: "18px", color: "#0000FF" }}>
              {privateClass}
            </span>
          </div>
        ))}
      </p>
      <Wheel />
    </div>
  );
}
