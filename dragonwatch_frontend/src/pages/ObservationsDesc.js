// id	first_name	last_name	email
import React from "react";
import Navigation from "../components/Navigation";
import ODsTable from "../components/ODsTable";
import { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";

function ObservationsDesc() {
  // Use the history for updating
  const history = useHistory();
  const location = useLocation();

  const [ODs, setODs] = useState([]);

  // RETRIEVE the list of observations_descs
  const loadODs = async () => {
    const response = await fetch("/api/od", {
      headers: {
        Accept: "application/json",
      },
    }); // call to server to retrieve list of observations_descs
    const ODs = await response.json();
    setODs(ODs);
  };

  // UPDATE an OD
  const onEditOD = async (OD) => {
    history.push(`/od/${OD.id}/edit`);
  };

  // DELETE an OD
  const onDeleteOD = async (_id) => {
    const response = await fetch(
      `/api/od/${_id}`, //path call to server for delete using unique id
      { method: "DELETE" }
    );
    if (response.status === 204) {
      const getResponse = await fetch(
        "/api/od" // path call to server to retrieve analysts (same as load)
      );
      const newODs = await getResponse.json();
      setODs(newODs);
    } else {
      console.error(
        `Failed to delete OD with _id = ${_id}, status code = ${response.status}`
      );
    }
  };

  // LOAD the observations
  useEffect(() => {
    loadODs();
  }, [location]);

  return (
    <>
      <h1>Observations_Desc</h1>
      <Navigation></Navigation>
      <p>Detailed descriptions of observed dragons are recorded here.</p>
      <ODsTable ODs={ODs} onEdit={onEditOD} onDelete={onDeleteOD}></ODsTable>
      <button type="button">
        <Link to="/od/add">Add Observation Description</Link>
      </button>
    </>
  );
}
export default ObservationsDesc;
