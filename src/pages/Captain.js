import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import "../resources/styles/base.css";
import "../resources/styles/base_two.css";
import "../resources/styles/captain.css";
import "../resources/styles/fromweb.css";
//import { captains } from "../resources/data/captains";
import {
  MediumBlueText,
  TitleText,
  BulletList,
} from "../components/StyledText.js";
import { CaptainImage } from "../components/CaptainImage";
import { getSpecificCaptain } from "../controllers/captainController";

export default function Captain() {
  const [captain, setCaptain] = useState(null);

  const { slug } = useParams();

  useEffect(() => {
    async function captainController() {
      const captain = await getSpecificCaptain(slug);
      setCaptain(captain);
    }
    if (slug) {
      captainController();
    }
  }, [slug]);

  if (captain === null) {
    return <div />;
  }

  if (!slug) {
    return <div />;
  }

  return (
    <div id="content">
      <TitleText text={captain.fullname} />
      <MediumBlueText text={captain.biography} />
      <BulletList array={captain.resume_item} title={captain.exp_title} />
      <CaptainImage captain={captain} />
    </div>
  );
}
