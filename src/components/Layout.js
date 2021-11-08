import React from "react";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet";
import Modals from "./modals/Modals";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Layout(props) {
  return (
    <div style={{ width: "100%" }}>
      <Helmet>
        <title>Captain School</title>
      </Helmet>
      <Header />
      {props.children}
      <ToastContainer />
      <Modals />
    </div>
  );
}

export default Layout;
