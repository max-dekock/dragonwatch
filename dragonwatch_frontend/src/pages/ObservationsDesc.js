// id	first_name	last_name	email
import React from "react";
import Navigation from "../components/Navigation";
import ODsTable from "../components/ODsTable";
import { useState, useEffect } from "react";

function ObservationsDesc() {
  const [ODs, setODs] = useState([]);

  // RETRIEVE the list of observations_descs
  const loadODs = async () => {
    const response = await fetch("#"); // call to server to retrieve list of observations_descs
    const ODs = await response.json();
    setODs(ODs);
  };

  // LOAD the observations
  useEffect(() => {
    loadODs();
  }, []);

  return (
    <>
      <h1>Observations_Desc</h1>
      <Navigation></Navigation>
      <p>Detailed descriptions of observed dragons are recorded here.</p>
      <ODsTable ODs={ODs}></ODsTable>
    </>
  );
}
export default ObservationsDesc;
