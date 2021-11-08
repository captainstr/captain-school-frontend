import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import "../resources/styles/base.css";
import "../resources/styles/captain.css";

import { faqTitle, faqItems } from "../resources/data/text.js";
import { TitleText } from "../components/StyledText.js";

export default function FAQs() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <TitleText text={faqTitle} />
      {faqItems.map((faqItem, index) => (
        <div key={index}>
          <span style={{ color: "#FF0000", fontSize: "16px" }}>
            <strong>{faqItem.question}</strong>
          </span>

          <span style={{ color: "#0000FF", fontSize: "16px" }}>
            {faqItem.answer}
          </span>
        </div>
      ))}
    </div>
  );
}
