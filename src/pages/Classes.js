import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import "../resources/styles/base.css";
import "../resources/styles/base_two.css";
import "../resources/styles/captain.css";
import "../resources/styles/fromweb.css";
import { classes } from "../resources/data/dummyData";
import { TitleText, SubTitleText } from "../components/StyledText";
import { classesTitle, classesSubTitle } from "../resources/data/text.js";
import Table from "../components/Table";
import ClassModal from "../components/modals/ClassModal";
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

const data = [
  { id: "test3", name: "cheese", price: "2" },
  { id: "test2", name: "dinosaur", price: "30" },
  { id: "test1", name: "goat", price: "8" },
  { id: "test4", name: "monkey", price: "4" },
  { id: "test5", name: "orange", price: "5" },
  { id: "test6", name: "jack", price: "7" },
];

export default function Classes() {
  const [classes, setClasses] = useState([]);
  const [classValue, setClassValue] = useState(null);

  useEffect(() => {
    async function captainController() {
      const classes = await getClasses();
      console.log("classes");
      console.log(classes);
      setClasses(classes);
    }
    captainController();
  }, []);

  if (!classes) {
    return <div />;
  }

  return (
    console.log("class value herererere"),
    console.log(classValue),
    (
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
    )
  );
}

/*        {classValue !== null ? (
          <ClassModal classValue={classValue} setValue={setClassValue} />
        ) : null}*/
