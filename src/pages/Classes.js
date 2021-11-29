import React, { useState, useEffect } from "react";
import "../resources/styles/base.css";
import "../resources/styles/captain.css";

import { TitleText, LightBlueText, RedText } from "../components/StyledText";
import { classesTitle, classesSubTitle } from "../resources/data/text.js";
import Table from "../components/Table";
import RegistrationModal from "../components/modals/RegistrationModal";
import ClassModal from "../components/modals/ClassModal";
import { getClasses } from "../controllers/classController";
import Layout from "../components/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
  const [registration, setRegistration] = useState(null);

  const registrationalModalSet = (registrationModal) => {
    setRegistration(registrationModal);
  };

  useEffect(() => {
    async function captainController() {
      const classes = await getClasses();
      console.log("returned classes");
      console.log(classes);
      setClasses(classes);
    }
    captainController();
  }, []);

  if (!classes) {
    return <div />;
  }

  // TODO do more efficiently
  return (
    <Layout>
      <div
        id="content"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <div
          className="px-5"
          id="content"
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "2rem",
            paddingBottom: "2rem",
            gap: 15,
          }}
        >
          <Row className="justify-content-md-center">
            <Col md="8" lg="8">
              <TitleText text={classesTitle} />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="8" lg="8">
              <LightBlueText
                text={classesSubTitle}
                fontSize={"1rem"}
                fontWeight={"bold"}
              />
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col md="6" lg="6">
              <RedText
                fontSize={"1.25rem"}
                fontWeight={"bold"}
                text={"More late summer, fall and winter classes coming soon!"}
              />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="5" lg="5">
              <a
                href="https://captainjacksboatingschool.com/captains-course"
                target="_blank"
                rel="noreferrer"
              >
                <LightBlueText
                  fontSize={"1rem"}
                  fontWeight={"bold"}
                  text={"For classes in New Jersey and New York click here"}
                />
              </a>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="10" lg="10">
              <Table
                data={classes}
                columns={columns}
                defaultSorted={defaultSorted}
                setValue={setClassValue}
              />
            </Col>
          </Row>
        </div>
        {classValue !== null ? (
          <ClassModal
            classValue={classValue}
            setValue={setClassValue}
            registrationalModalSet={registrationalModalSet}
          />
        ) : null}
        {registration !== null ? (
          <RegistrationModal
            classValue={classValue}
            setValue={setRegistration}
          />
        ) : null}
      </div>
    </Layout>
  );
}

/*        {classValue !== null ? (
          <ClassModal classValue={classValue} setValue={setClassValue} />
        ) : null}
        
                {classValue !== null ? (
          <RegistrationModal classValue={classValue} setValue={setClassValue} />
        ) : null}
        
        */
