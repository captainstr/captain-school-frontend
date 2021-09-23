import React, { useState, useEffect, Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import LineIcon from "react-lineicons";
import "../resources/styles/base.css";
import "../resources/styles/base_two.css";
import "../resources/styles/captain.css";
import "../resources/styles/fromweb.css";

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
        url: "/oupv",
        name: "OUPV (6 pack)",
      },
      {
        url: "/masters",
        name: "Master's upgrade to &lt; 100 GT",
      },
      {
        url: "/assistance",
        name: "Assistance Towing",
      },
      {
        url: "/online",
        name: "Online/Classroom Blended OUPV",
      },
    ],
  },
  {
    url: "/faqs",
    name: "FAQs",
  },
  {
    url: "/privateclasses",
    name: "Private Classes",
  },
  {
    url: "/resources",
    name: "About 3BS",
  },
];

function RealLink({ link }) {
  return (
    <li className="leaf">
      <a
        href={link.url}
        className="ctools-use-modal ctools-use-modal-processed"
      >
        {link.name}
      </a>
    </li>
  );
}

function ParentLink({ link }) {
  return (
    <Fragment>
      <span className="nolink">Course Descriptions</span>
      <ul className="menu">
        {link.childLinks.map((childLink, index) => (
          <RealLink link={childLink} key={index} />
        ))}
      </ul>
    </Fragment>
  );
}

/*function ChildMenu({childLinks}) {
    return(

    )
}*/

function Header() {
  return (
    <div id="header-menu">
      <div id="header-menu-inside" className="clearfix">
        <div className="grid_12">
          <div id="navigation" className="clearfix">
            <div className="region region-navigation">
              <div
                id="block-menu-block-1"
                className="block block-menu-block contextual-links-region"
              >
                <div className="content">
                  <div className="menu-block-wrapper menu-block-1 menu-name-main-menu parent-mlid-0 menu-level-1">
                    <ul className="menu">
                      {links.map((link, index) => (
                        <Fragment key={index}>
                          {link.url ? (
                            <RealLink link={link} />
                          ) : (
                            <li className="expanded">
                              <ParentLink link={link} />
                            </li>
                          )}
                        </Fragment>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
