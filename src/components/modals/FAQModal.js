import Modal from "react-bootstrap/Modal";
import FAQs from "../../pages/FAQs";

export default function FAQModal() {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FAQs />
      </Modal.Body>

      <Modal.Footer></Modal.Footer>
    </Modal.Dialog>
  );
}
