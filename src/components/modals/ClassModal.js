import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect, Component } from "react";
import { LightBlueText } from "../../components/StyledText";
import GoogleMapReact from "google-map-react";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyD5sMaepM_qhq27uCMPKhjJDWBepaOjRxI");

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latlng: null,
    };
    this.generateLatLng = this.generateLatLng.bind(this);
  }

  async generateLatLng() {
    if (this.props.location !== null) {
      const latlngObj = await Geocode.fromAddress(this.props.location);
      let latlng = latlngObj.results[0].geometry.location;
      latlng.name = this.props.location;
      this.setState({ latlng });
    } else {
      return null;
    }
  }

  async componentDidMount() {
    await this.generateLatLng();
  }

  handleApiLoadData = (map, maps, thePlace) => {
    if (thePlace) {
      let marker = new maps.Marker({
        animation: maps.Animation.DROP,
        position: { lat: thePlace.lat, lng: thePlace.lng },
        map,
      });

      marker.customInfowindow = new maps.InfoWindow({
        content: "<div>" + thePlace.name + "</div>",
      });

      marker.addListener("click", () => {
        marker.customInfowindow.open(map, marker);
      });
    }
  };

  render() {
    if (this.state.latlng === null) {
      return <div />;
    }
    console.log(this.state.latlng);
    return (
      <div style={{ height: 200, width: 200 }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD5sMaepM_qhq27uCMPKhjJDWBepaOjRxI" }}
          defaultCenter={this.state.latlng}
          defaultZoom={14}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) =>
            this.handleApiLoadData(map, maps, this.state.latlng)
          }
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
          style={{
            flexDirection: "row",
            display: "flex",
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: props.classValue.details }}
            style={{ flex: 0.75 }}
          ></div>
          <div style={{ flex: 0.25 }}>
            <SimpleMap location={props.classValue.location} />
          </div>
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
