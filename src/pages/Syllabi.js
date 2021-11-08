import React, { useState, useEffect } from "react";
import "../resources/styles/base.css";
import "../resources/styles/captain.css";

import {
  oupvTitle,
  oupvText,
  oupvList,
  mastersTitle,
  mastersText,
  masters100,
  mastersNote,
  assistanceTitle,
  assistanceText,
  assistanceWarning,
  onlineTitle,
  onlineText,
} from "../resources/data/text.js";
import {
  TitleText,
  GrayText,
  NormalText,
  GiantRed,
  LargeBlueText,
} from "../components/StyledText.js";
import HeadBoat from "../resources/images/Head boat.jpeg";
import BoatTowing from "../resources/images/Boat Towing.jpeg";
import eCapLogo from "../resources/images/eCap Logo.jpeg";

function SyllabusLink() {
  return (
    <div>
      <span style={{ fontSize: "16px" }}>
        <em>
          <u>
            <a
              href="sites/default/files/Syllabus OUPV.pdf"
              onclick="window.open(this.href, '', 'resizable=no,status=no,location=yes,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no,width=700,left=600,height=800,top=100'); return false;"
            >
              <strong>View course syllabus here</strong>
            </a>
          </u>
        </em>
      </span>
    </div>
  );
}

function Requirements() {
  return (
    <div>
      <span style={{ fontSize: "16px" }}>
        <em>
          <u>
            <span style={{ color: "#FF0000" }}>
              <strong>Basic requirement for the OUPV (6-Pack):</strong>
            </span>
          </u>
        </em>
      </span>
    </div>
  );
}

function Breadcrumb({ ...props }) {
  return (
    <div className="breadcrumb">
      <span className="nolink" tabindex="0">
        Course Descriptions
      </span>
      <span className="breadcrumb-separator">/</span>
      {props.text}
    </div>
  );
}

export function OUPV() {
  return (
    <div
      id="content"
      style={{ display: "flex", flexDirection: "column", gap: 15 }}
    >
      <TitleText text={oupvTitle} />

      {oupvText.map((item, index) => (
        <GrayText text={item} key={index} />
      ))}
      <SyllabusLink />
      <Requirements />
      <ul style={{ listStyleType: "circle" }}>
        {oupvList.map((item, index) => (
          <li key={index}>
            <strong>{item}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Masters() {
  return (
    <div
      id="content"
      style={{ display: "flex", flexDirection: "column", gap: 15 }}
    >
      <TitleText text={mastersTitle} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img alt="" height="313" src={HeadBoat} width="500" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <NormalText text={masters100} />
        </div>
        {mastersText.map((item, index) => (
          <div>
            <NormalText text={item} key={index} />
          </div>
        ))}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <NormalText text={mastersNote} />
        </div>
      </div>
    </div>
  );
}

export function Assistance() {
  return (
    <div
      id="content"
      style={{ display: "flex", flexDirection: "column", gap: 15 }}
    >
      <TitleText text={assistanceTitle} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img alt="" height="300" src={BoatTowing} width="400" />
      </div>
      <GrayText text={assistanceText} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <GiantRed text={assistanceWarning} />
      </div>
    </div>
  );
}

export function Online() {
  return (
    <div
      id="content"
      style={{ display: "flex", flexDirection: "column", gap: 15 }}
    >
      <TitleText text={onlineTitle} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img alt="" height="134" src={eCapLogo} width="751" />
      </div>

      {onlineText.map((item, index) => (
        <div>
          <LargeBlueText text={item} key={index} />
        </div>
      ))}
    </div>
  );
}
