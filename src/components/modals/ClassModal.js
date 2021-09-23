import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";

export default function ClassModal({ ...props }) {
  const handleClose = () => props.setValue(null);

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Body>
        <div>
          {props.classValue.class_type} .............Starting Date{" "}
          {props.classValue.date}
        </div>
        <div>Instructor:</div>
        <div>{props.classValue.captain}</div>
        <div>{props.classValue.details}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Register
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
