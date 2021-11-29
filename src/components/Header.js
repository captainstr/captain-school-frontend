import React, { useState, useEffect, Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import LineIcon from "react-lineicons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setModal } from "../redux/actions/modal";
import "../resources/styles/base.css";
import "../resources/styles/captain.css";

const links = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/classes",
    name: "Schedule & Registration",
  },
  {
    name: "Course Descriptions",
    childLinks: [
      {
        modalValue: "oupv",
        name: "OUPV (6 pack)",
      },
      {
        modalValue: "masters",
        name: "Master's upgrade to < 100 GT",
      },
      {
        modalValue: "assistance",
        name: "Assistance Towing",
      },
      {
        modalValue: "online",
        name: "Online/Classroom Blended OUPV",
      },
    ],
  },
  {
    modalValue: "faqs",
    name: "FAQs",
  },
  {
    modalValue: "privateclasses",
    name: "Private Classes",
  },
  {
    modalValue: "about",
    name: "About 3BS",
  },
];

function RealLink({ link }) {
  return (
    <li className="leaf">
      <a href={link.url}>{link.name}</a>
    </li>
  );
}

function ParentLink({ link }) {
  return (
    <Fragment>
      <span className="nolink">Course Descriptions</span>
      <ul className="menu">
        {link.childLinks.map((childLink, index) => (
          <span key={index}>
            <LinkRouter link={childLink} />
          </span>
        ))}
      </ul>
    </Fragment>
  );
}

function ModalLinkChild({ link, ...props }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setModal(link.modalValue);
  };
  if (typeof link === "undefined") {
    return <></>;
  }
  return (
    <li className="leaf">
      <a href="#" onClick={(event) => handleSubmit(event)}>
        {link.name}
      </a>
    </li>
  );
}

function LinkRouter({ link, ...props }) {
  if (link.url) {
    return <RealLink link={link} />;
  } else if (link.childLinks) {
    return (
      <li className="expanded">
        <ParentLink link={link} />
      </li>
    );
  } else if (link.modalValue) {
    return <ModalLink link={link} />;
  }
  return null;
}

function Header() {
  return (
    <div id="header-menu" style={{ display: "flex", justifyContent: "center" }}>
      <div className="clearfix">
        <ul
          className="menu"
          style={{
            justifyContent: "center",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {links.map((link, index) => (
            <span key={index}>
              <LinkRouter link={link} />
            </span>
          ))}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

function mapDispatchToProps(dispatch) {
  let actions = bindActionCreators({ setModal }, dispatch);
  return { ...actions, dispatch };
}

const ModalLink = connect(mapStateToProps, mapDispatchToProps)(ModalLinkChild);

export default Header;
