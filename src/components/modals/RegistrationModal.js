import Modal from "react-bootstrap/Modal";
import RegistrationForm from "../RegistrationForm";

export default function RegistrationModal({ ...props }) {
  const handleClose = () => props.setValue(null);

  return (
    <Modal show={true} onHide={handleClose} size="lg">
      <Modal.Body>
        <div>* fields are required</div>
        <div>
          Check-out can take a small amount of time, so please wait patiently.
          If you have any issues registering, please call Ross at 888-598-9598
        </div>
        <RegistrationForm />
      </Modal.Body>
    </Modal>
  );
}
