// id	first_name	last_name	email
import React from "react";
import Navigation from "../components/Navigation";
import VolunteersTable from "../components/VolunteersTable";
import { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";

function Volunteers() {
  // Use the history for updating
  const history = useHistory();
  const location = useLocation();

  // Use state to bring in data
  const [volunteers, setVolunteers] = useState([]);

  // RETRIEVE the list of volunteers
  const loadVolunteers = async () => {
    const response = await fetch("/api/volunteers", {
      headers: {
        Accept: "application/json",
      },
    }); // call to server to retrieve list of volunteers
    const volunteers = await response.json();
    setVolunteers(volunteers);
  };

  // UPDATE an volunteers
  const onEditVolunteer = async (analyst) => {
    history.push(`/volunteers/${analyst.id}/edit`);
  };

  // DELETE a volunteer
  const onDeleteVolunteer = async (_id) => {
    const response = await fetch(
      `/api/volunteers/${_id}`, //path call to server for delete using unique id
      { method: "DELETE" }
    );
    if (response.status === 204) {
      const getResponse = await fetch(
        "/api/volunteers" // path call to server to retrieve volunteers (same as load)
      );
      const newVolunteers = await getResponse.json();
      setVolunteers(newVolunteers);
    } else {
      console.error(
        `Failed to delete volunteer with _id = ${_id}, status code = ${response.status}`
      );
    }
  };

  // LOAD the volunteers
  useEffect(() => {
    loadVolunteers();
  }, [location]);

  return (
    <>
      <h1>Volunteers</h1>
      <Navigation></Navigation>
      <p>
        A <strong>volunteer</strong> is someone who has signed up to record
        their dragon observations for expert analysis.
      </p>
      <VolunteersTable
        volunteers={volunteers}
        onEdit={onEditVolunteer}
        onDelete={onDeleteVolunteer}
      ></VolunteersTable>
      <button type="button">
        <Link to="/volunteers/add">Add Volunteer</Link>
      </button>
    </>
  );
}
export default Volunteers;
