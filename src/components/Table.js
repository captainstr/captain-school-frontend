import React, { useState, useEffect } from "react";
//import "../../resources/styles/base.css";
//import "../../resources/styles/base_two.css";
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
    <div style={{ backgroundColor: "#FFF", height: 200 }}>
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
    </div>
  );
}
