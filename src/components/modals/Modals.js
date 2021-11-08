import { setModal } from "../../redux/actions/modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PageModal from "./PageModal";
import FAQs from "../../pages/FAQs";
import PrivateClasses from "../../pages/PrivateClasses";
import About from "../../pages/About";
import { OUPV, Masters, Assistance, Online } from "../../pages/Syllabi";

function Modals({ ...props }) {
  if (props.modal === "faqs") {
    return <PageModal children={<FAQs />} />;
  } else if (props.modal === "privateclasses") {
    return <PageModal children={<PrivateClasses />} />;
  } else if (props.modal === "about") {
    return <PageModal children={<About />} />;
  } else if (props.modal === "oupv") {
    return <PageModal children={<OUPV />} />;
  } else if (props.modal === "masters") {
    return <PageModal children={<Masters />} />;
  } else if (props.modal === "assistance") {
    return <PageModal children={<Assistance />} />;
  } else if (props.modal === "online") {
    return <PageModal children={<Online />} />;
  }
  return <></>;
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  };
};

function mapDispatchToProps(dispatch) {
  let actions = bindActionCreators({ setModal }, dispatch);
  return { ...actions, dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modals);
