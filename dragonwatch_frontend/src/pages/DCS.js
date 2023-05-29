import React from "react";
import Navigation from "../components/Navigation";
import DCSsTable from "../components/DCSsTable";
import { useState, useEffect } from "react";

function DCSs() {
  const [DCSs, setDCSs] = useState([]);

  // RETRIEVE the list of DCSs
  const loadDCSs = async () => {
    const response = await fetch("#"); // call to server to retrieve list of DCSs
    const DCSs = await response.json();
    setDCSs(DCSs);
  };

  // LOAD the DCSs
  useEffect(() => {
    loadDCSs();
  }, []);

  return (
    <>
      <h1>Dragon_Confirmed_Sightings</h1>
      <Navigation></Navigation>
      <p>This table links identified dragons to confirmed sightings.</p>
      <DCSsTable DCSs={DCSs}></DCSsTable>
    </>
  );
}
export default DCSs;
