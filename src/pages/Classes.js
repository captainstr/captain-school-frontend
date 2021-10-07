import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import "../resources/styles/base.css";
import "../resources/styles/base_two.css";
import "../resources/styles/captain.css";
import "../resources/styles/fromweb.css";
import { TitleText, SubTitleText } from "../components/StyledText";
import { classesTitle, classesSubTitle } from "../resources/data/text.js";
import Table from "../components/Table";
import RegistrationModal from "../components/modals/RegistrationModal";
import { getClasses } from "../controllers/classController";

function SmallRed() {
  return (
    <h2 className="rtecenter">
      <span style={{ color: "#FF0000" }}>
        <strong>More late summer, fall and winter classes coming soon!</strong>
      </span>
    </h2>
  );
}

const columns = [
  {
    dataField: "date",
    text: "Date",
    sort: false,
    style: { color: "#1487d4", cursor: "pointer" },
  },
  {
    dataField: "city",
    text: "City",
    sort: true,
  },
  {
    dataField: "class_type",
    text: "Class Type",
    sort: true,
  },
  {
    dataField: "state",
    text: "State",
    sort: true,
  },
];

const defaultSorted = [
  {
    dataField: "date",
    order: "desc",
  },
];

export default function Classes() {
  const [classes, setClasses] = useState([]);
  const [classValue, setClassValue] = useState(null);

  useEffect(() => {
    async function captainController() {
      const classes = await getClasses();
      setClasses(classes);
    }
    captainController();
  }, []);

  if (!classes) {
    return <div />;
  }

  return (
    <div id="content">
      <TitleText text={classesTitle} />
      <SubTitleText text={classesSubTitle} />

      <div className="content">
        <SmallRed />
      </div>

      <Table
        data={classes}
        columns={columns}
        defaultSorted={defaultSorted}
        setValue={setClassValue}
      />

      {classValue !== null ? (
        <RegistrationModal classValue={classValue} setValue={setClassValue} />
      ) : null}
    </div>
  );
}

/*        {classValue !== null ? (
          <ClassModal classValue={classValue} setValue={setClassValue} />
        ) : null}*/
