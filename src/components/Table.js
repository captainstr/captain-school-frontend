import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import "../../resources/styles/base.css";
//import "../../resources/styles/captain.css";
//import "../../resources/styles/fromweb.css";

import BootstrapTable from "react-bootstrap-table-next";

export default function Table({ ...props }) {
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      props.setValue(row);
    },
  };

  return (
    <div>
      <Row className="justify-content-md-center">
        <Col xs lg="12" className="text-center">
          <BootstrapTable
            bootstrap4
            striped
            hover
            keyField="id"
            data={props.data}
            columns={props.columns}
            defaultSorted={props.defaultSorted}
            rowEvents={rowEvents}
          />
        </Col>
      </Row>
    </div>
  );
}
