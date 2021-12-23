import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import RegistrationForm from "../RegistrationForm";
import { RedText } from "../../components/StyledText";

export default function RegistrationModal({ ...props }) {
  const handleClose = () => props.setValue(null);

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Body style={{ backgroundColor: "#e8e8e8" }}>
        <RedText text={"* fields are required"} />
        <div>
          Check-out can take a small amount of time, so please wait patiently.
          If you have any issues registering, please call Ross at 888-598-9598
        </div>
        <RegistrationForm classValue={props.classValue} />
      </Modal.Body>
    </Modal>
  );
}
