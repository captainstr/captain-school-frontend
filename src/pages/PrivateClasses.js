import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import "../resources/styles/base.css";
import "../resources/styles/captain.css";

import helm from "../resources/images/helm.jpeg";
import {
  privateClasses,
  privateClassesSub,
  privateClassesTitle,
} from "../resources/data/text.js";
import { SubTitleText, TitleText } from "../components/StyledText.js";

function Wheel() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <SubTitleText text={privateClassesSub} />
      <img alt="" height="88" src={helm} width="88" />
    </div>
  );
}

export default function PrivateClasses() {
  return (
    <div
      about="/private-classes"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TitleText text={privateClassesTitle} />
      <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        {privateClasses.map((privateClass, index) => (
          <div key={index}>
            <span style={{ fontSize: "18px", color: "#0000FF" }}>
              {privateClass}
            </span>
          </div>
        ))}
      </div>
      <Wheel />
    </div>
  );
}
