import React from "react";
import Navigation from "../components/Navigation";
import CSsTable from "../components/CSsTable";
import { useState, useEffect } from "react";

function CSs() {
  const [CSs, setCSs] = useState([]);

  // RETRIEVE the list of CSs
  const loadDCSs = async () => {
    const response = await fetch("#"); // call to server to retrieve list of CSs
    const CSs = await response.json();
    setCSs(CSs);
  };

  // LOAD the CSs
  useEffect(() => {
    loadDCSs();
  }, []);

  return (
    <>
      <h1>Confirmed_Sightings</h1>
      <Navigation></Navigation>
      <p>
        A <strong>confirmed sighting</strong> is a volunteer observation that
        has been confirmed by an analyst.
      </p>
      <CSsTable CSs={CSs}></CSsTable>
    </>
  );
}
export default CSs;
