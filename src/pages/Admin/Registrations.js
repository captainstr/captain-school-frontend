import React, { useState, useEffect } from "react";
//import "../../resources/styles/base.css";
//import "../../resources/styles/captain.css";
//import "../../resources/styles/fromweb.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
//import { registrations } from "../resources/data/dummyData";
import { TitleText, SubTitleText } from "../../components/StyledText";
import {} from "../../resources/data/text.js";
import Table from "../../components/Table";
import { getRegistrations } from "../../controllers/registrationAdminController";

const columns = [
  {
    dataField: "id",
    text: "Product ID",
    sort: true,
  },
  {
    dataField: "email",
    text: "Email",
    sort: true,
  },
  {
    dataField: "firstname",
    text: "First Name",
    sort: true,
  },
  {
    dataField: "lastname",
    text: "Last Name",
    sort: true,
  },
  {
    dataField: "phone_number",
    text: "Phone Number",
    sort: true,
  },
];

const defaultSorted = [
  {
    dataField: "name",
    order: "desc",
  },
];

export default function Registrations() {
  const [registrations, setRegistrations] = useState([]);
  const [registrationValue, setRegistrationValue] = useState(null);

  useEffect(() => {
    async function registrationController() {
      const registrations = await getRegistrations();
      setRegistrations(registrations);
    }
    registrationController();
  }, []);

  if (!registrations) {
    return <div />;
  }

  return (
    <div style={{ height: 1000 }}>
      <Table
        data={registrations}
        columns={columns}
        defaultSorted={defaultSorted}
        setValue={setRegistrationValue}
      />
    </div>
  );
}
