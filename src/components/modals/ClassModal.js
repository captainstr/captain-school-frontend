import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect, Component } from "react";
import { LightBlueText } from "../../components/StyledText";
import GoogleMapReact from "google-map-react";
import Geocode from "react-geocode";

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latlng: this.generateLatLng(),
    };
    this.generateLatLng = this.generateLatLng.bind(this);
  }

  async generateLatLng() {
    if (this.props.location !== null) {
      const latlng = await Geocode.fromAddress(this.props.location);
      this.setState({ latlng });
    } else {
      return null;
    }
  }

  render() {
    if (this.state.latlng === null) {
      return <div />;
    }
    return (
      <div style={{ height: 200, width: 200 }}>
        <GoogleMapReact
          //bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.state.latlng}
          defaultZoom={14}
        ></GoogleMapReact>
      </div>
    );
  }
}

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
        <div
          dangerouslySetInnerHTML={{ __html: props.classValue.details }}
        ></div>
        <div style={{ position: "absolute", top: 150, right: 20 }}>
          <SimpleMap location={props.classValue.location} />
        </div>
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
