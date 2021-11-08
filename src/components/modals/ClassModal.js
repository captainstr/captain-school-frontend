import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import { LightBlueText } from "../../components/StyledText";

export default function ClassModal({ ...props }) {
  const handleClose = () => props.setValue(null);
  const registrationLaunch = () => {
    props.registrationalModalSet(true);
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Body>
        <LightBlueText
          text={
            props.classValue.class_type +
            ".............Starting Date " +
            props.classValue.date
          }
        />
        <LightBlueText text={"Instructor:"} />
        <LightBlueText text={props.classValue.captain} />
        <LightBlueText text={props.classValue.details} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={registrationLaunch}>
          Register
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
