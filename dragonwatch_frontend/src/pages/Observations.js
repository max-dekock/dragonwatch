// id	first_name	last_name	email
import React from "react";
import Navigation from "../components/Navigation";
import ObservationsTable from "../components/ObservationsTable";
import { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";

function Observations() {
  // Use the history for updating
  const history = useHistory();
  const location = useLocation();

  // Use state to bring in data
  const [observations, setObservations] = useState([]);

  // RETRIEVE the list of observations
  const loadObservations = async () => {
    const response = await fetch("/api/observations", {
      headers: {
        Accept: "application/json",
      },
    }); // call to server to retrieve list of observations
    const observations = await response.json();
    setObservations(observations);
  };

  // UPDATE an observation
  const onEditObservation = async (observation) => {
    history.push(`/observations/${observation.id}/edit`);
  };

  // DELETE an observation
  const onDeleteObservation = async (_id) => {
    const response = await fetch(
      `/api/observations/${_id}`, //path call to server for delete using unique id
      { method: "DELETE" }
    );
    if (response.status === 204) {
      const getResponse = await fetch(
        "/api/observations" // path call to server to retrieve analysts (same as load)
      );
      const newObservations = await getResponse.json();
      setObservations(newObservations);
    } else {
      console.error(
        `Failed to delete observation with _id = ${_id}, status code = ${response.status}`
      );
    }
  };

  // LOAD the observations
  useEffect(() => {
    loadObservations();
  }, [location]);

  return (
    <>
      <h1>Observations</h1>
      <Navigation></Navigation>
      <p>
        An <strong>observation</strong> of one or more dragons made by a
        volunteer.
      </p>
      <ObservationsTable
        observations={observations}
        onEdit={onEditObservation}
        onDelete={onDeleteObservation}
      ></ObservationsTable>
      <button type="button">
        <Link to="/observations/add">Add Observation</Link>
      </button>
    </>
  );
}
export default Observations;
