import Modal from "react-bootstrap/Modal";
import { setModal } from "../../redux/actions/modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function PageModal({ ...props }) {
  const handleClose = () => props.setModal(null);
  return (
    <Modal show={true} onHide={handleClose} size="xl">
      <Modal.Body style={{ backgroundColor: "#e8e8e8" }}>
        {props.children}
      </Modal.Body>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {};
};

function mapDispatchToProps(dispatch) {
  let actions = bindActionCreators({ setModal }, dispatch);
  return { ...actions, dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageModal);
