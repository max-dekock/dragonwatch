// id	first_name	last_name	email
import React from "react";
import Navigation from "../components/Navigation";
import ObservationsTable from "../components/ObservationsTable";
import { useState, useEffect } from "react";

function Observations() {
  const [observations, setObservations] = useState([]);

  // RETRIEVE the list of observations
  const loadObservations = async () => {
    const response = await fetch("#"); // call to server to retrieve list of observations
    const observations = await response.json();
    setObservations(observations);
  };

  // LOAD the observations
  useEffect(() => {
    loadObservations();
  }, []);

  return (
    <>
      <h1>Observations</h1>
      <Navigation></Navigation>
      <p>
        An <strong>observation</strong> of one or more dragons made by a
        volunteer.
      </p>
      <ObservationsTable observations={observations}></ObservationsTable>
    </>
  );
}
export default Observations;
