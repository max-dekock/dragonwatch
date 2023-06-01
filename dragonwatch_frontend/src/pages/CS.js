import React from "react";
import Navigation from "../components/Navigation";
import CSsTable from "../components/CSsTable";
import { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";

function CSs() {
  // Use the history for updating
  const history = useHistory();
  const location = useLocation();

  // Use state to bring in data
  const [CSs, setCSs] = useState([]);

  // RETRIEVE the list of CSs
  const loadCSs = async () => {
    const response = await fetch("/api/cs", {
      headers: {
        Accept: "application/json",
      },
    }); // call to server to retrieve list of CSs
    const CSs = await response.json();
    setCSs(CSs);
  };

  // UPDATE an analyst
  const onEditCS = async (cs) => {
    history.push(`/cs/${cs.id}/edit`);
  };

  // DELETE an analyst
  const onDeleteCS = async (_id) => {
    const response = await fetch(
      `/api/cs/${_id}`, //path call to server for delete using unique id
      { method: "DELETE" }
    );
    if (response.status === 204) {
      const getResponse = await fetch(
        "/api/cs" // path call to server to retrieve analysts (same as load)
      );
      const newCSs = await getResponse.json();
      setCSs(newCSs);
    } else {
      console.error(
        `Failed to delete CS with _id = ${_id}, status code = ${response.status}`
      );
    }
  };

  // LOAD the CSs
  useEffect(() => {
    loadCSs();
  }, [location]);

  return (
    <>
      <h1>Confirmed_Sightings</h1>
      <Navigation></Navigation>
      <p>
        A <strong>confirmed sighting</strong> is a volunteer observation that
        has been confirmed by an analyst.
      </p>
      <CSsTable CSs={CSs} onEdit={onEditCS} onDelete={onDeleteCS}></CSsTable>
      <button type="button">
        <Link to="/cs/add">Add CS</Link>
      </button>
    </>
  );
}
export default CSs;
