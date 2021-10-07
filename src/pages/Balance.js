import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import "../resources/styles/base.css";
import "../resources/styles/base_two.css";
import "../resources/styles/captain.css";
import "../resources/styles/fromweb.css";
import {} from "../resources/data/text.js";
import {
  GreenText,
  SubTitleText,
  TitleText,
} from "../components/StyledText.js";
import BalanceForm from "../components/BalanceForm";

export default function Balance() {
  return (
    <div id="content">
      <BalanceForm />
    </div>
  );
}
