import React from "react";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet";

function Layout(props) {
  return (
    <Container>
      <Helmet>
        <title>Captain School</title>
      </Helmet>
      <Header />
      {props.children}
      <ToastContainer />
    </Container>
  );
}

export default Layout;
