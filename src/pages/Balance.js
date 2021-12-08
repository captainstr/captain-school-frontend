import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import "../resources/styles/base.css";
import "../resources/styles/captain.css";

import {} from "../resources/data/text.js";
import {
  GreenText,
  SubTitleText,
  TitleText,
} from "../components/StyledText.js";
import BalanceForm from "../components/BalanceForm";

export default function Balance() {
  return (
    <div
      id="content"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        paddingBottom: "30vh",
      }}
    >
      <BalanceForm />
    </div>
  );
}
