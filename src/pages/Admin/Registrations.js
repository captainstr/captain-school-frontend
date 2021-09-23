import React, { useState, useEffect } from "react";
//import "../../resources/styles/base.css";
//import "../../resources/styles/base_two.css";
//import "../../resources/styles/captain.css";
//import "../../resources/styles/fromweb.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
//import { registrations } from "../resources/data/dummyData";
import { TitleText, SubTitleText } from "../../components/StyledText";
import {} from "../../resources/data/text.js";
import Table from "../../components/Table";

const columns = [
  {
    dataField: "id",
    text: "Product ID",
    sort: true,
  },
  {
    dataField: "name",
    text: "Product Name",
    sort: true,
  },
  {
    dataField: "price",
    text: "Product Price",
    sort: true,
  },
];

const defaultSorted = [
  {
    dataField: "name",
    order: "desc",
  },
];

const products = [
  { id: "test3", name: "cheese", price: "2" },
  { id: "test2", name: "dinosaur", price: "30" },
  { id: "test1", name: "goat", price: "8" },
  { id: "test4", name: "monkey", price: "4" },
  { id: "test5", name: "orange", price: "5" },
  { id: "test6", name: "jack", price: "7" },
];

export default function Registrations() {
  return (
    <div style={{ backgroundColor: "#FFF", height: 1000 }}>
      <Table />
    </div>
  );
}
