// id	first_name	last_name	email
import React from "react";
import Navigation from "../components/Navigation";
import AnalystsTable from "../components/AnalystsTable";
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

function Analysts() {
  // Use the history for updating
  const history = useHistory();

  // Use state to bring in data
  const [analysts, setAnalysts] = useState([]);

  // RETRIEVE the list of analysts
  const loadAnalysts = async () => {
    const response = await fetch("/api/analysts"); // call to server to retrieve list of analysts
    const analysts = await response.json();
    setAnalysts(analysts);
  };

  // UPDATE an analyst
  const onEditAnalyst = async (analyst) => {
    history.push(`/analysts/${analyst.id}/edit`);
  };

  // DELETE an analyst
  const onDeleteAnalyst = async (_id) => {
    const response = await fetch(
      `/api/analysts/${_id}`, //path call to server for delete using unique id
      { method: "DELETE" }
    );
    if (response.status === 204) {
      const getResponse = await fetch(
        "/api/analysts" // path call to server to retrieve analysts (same as load)
      );
      const newAnalysts = await getResponse.json();
      setAnalysts(newAnalysts);
    } else {
      console.error(
        `Failed to delete analyst with _id = ${_id}, status code = ${response.status}`
      );
    }
  };

  // LOAD the analysts
  useEffect(() => {
    loadAnalysts();
  }, []);

  return (
    <>
      <h1>Analysts</h1>
      <Navigation></Navigation>
      <p>
        An <strong>analyst</strong> is a trained expert who can evaluate
        reported sightings from our volunteers.
      </p>
      <AnalystsTable
        analysts={analysts}
        onEdit={onEditAnalyst}
        onDelete={onDeleteAnalyst}
      ></AnalystsTable>
      <button type="button">
        <Link to="../add-analyst">Add Analyst</Link>
      </button>
    </>
  );
}
export default Analysts;
