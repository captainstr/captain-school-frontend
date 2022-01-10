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
import Syllabus from "../resources/files/Syllabus OUPV.pdf";

function SyllabusLink() {
  return (
    <div>
      <span style={{ fontSize: "16px" }}>
        <em>
          <u>
            <a href={Syllabus} target="_blank" rel="noreferrer">
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
        <img
          alt=""
          height="313"
          src={HeadBoat}
          width="500"
          style={{
            objectFit: "cover",
            width: "75vw",
            height: "50vw",
            maxHeight: 313,
            maxWidth: 475,
          }}
        />
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
        <img
          alt=""
          src={eCapLogo}
          style={{
            objectFit: "cover",
            width: "45vw",
            height: "7vw",
            minWidth: 400,
            minHeight: 65,
          }}
        />
      </div>

      {onlineText.map((item, index) => (
        <div>
          <LargeBlueText text={item} key={index} />
        </div>
      ))}
    </div>
  );
}
