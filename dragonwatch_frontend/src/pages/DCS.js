import React from "react";
import Navigation from "../components/Navigation";
import DCSsTable from "../components/DCSsTable";
import { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";

function DCSs() {
  // Use the history for updating
  const history = useHistory();
  const location = useLocation();

  // Use state to bring in data
  const [DCSs, setDCSs] = useState([]);

  // RETRIEVE the list of DCSs
  const loadDCSs = async () => {
    const response = await fetch("/api/DCSs", {
      headers: {
        Accept: "application/json",
      },
    }); // call to server to retrieve list of DCSs
    const DCSs = await response.json();
    setDCSs(DCSs);
  };

  // UPDATE an DCS
  const onEditDCS = async (DCS) => {
    history.push(`/DCSs/${DCS.id}/edit`);
  };

  // DELETE a DCS
  const onDeleteDCS = async (_id) => {
    const response = await fetch(
      `/api/DCSs/${_id}`, //path call to server for delete using unique id
      { method: "DELETE" }
    );
    if (response.status === 204) {
      const getResponse = await fetch(
        "/api/DCSs" // path call to server to retrieve DCSs (same as load)
      );
      const newDCSs = await getResponse.json();
      setDCSs(newDCSs);
    } else {
      console.error(
        `Failed to delete DCS with _id = ${_id}, status code = ${response.status}`
      );
    }
  };

  // LOAD the DCSs
  useEffect(() => {
    loadDCSs();
  }, [location]);

  return (
    <>
      <h1>Dragon_Confirmed_Sightings</h1>
      <Navigation></Navigation>
      <p>This table links identified dragons to confirmed sightings.</p>
      <DCSsTable
        DCSs={DCSs}
        onEdit={onEditDCS}
        onDelete={onDeleteDCS}
      ></DCSsTable>
      <button type="button">
        <Link to="/DCSs/add">Add DCS</Link>
      </button>
    </>
  );
}
export default DCSs;
