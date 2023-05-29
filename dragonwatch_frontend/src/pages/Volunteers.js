// id	first_name	last_name	email
import React from "react";
import Navigation from "../components/Navigation";
import VolunteersTable from "../components/VolunteersTable";
import { useState, useEffect } from "react";

function Volunteers() {
  const [volunteers, setVolunteers] = useState([]);

  // RETRIEVE the list of volunteers
  const loadVolunteers = async () => {
    const response = await fetch("#"); // call to server to retrieve list of volunteers
    const volunteers = await response.json();
    setVolunteers(volunteers);
  };

  // LOAD the volunteers
  useEffect(() => {
    loadVolunteers();
  }, []);

  return (
    <>
      <h1>Volunteers</h1>
      <Navigation></Navigation>
      <p>
        A <strong>volunteer</strong> is someone who has signed up to record
        their dragon observations for expert analysis.
      </p>
      <VolunteersTable volunteers={volunteers}></VolunteersTable>
    </>
  );
}
export default Volunteers;
