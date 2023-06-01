import React from "react";
import Navigation from "../components/Navigation";
import DragonsTable from "../components/DragonsTable";
import { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";

function Dragons() {
  // Use the history for updating
  const history = useHistory();
  const location = useLocation();

  // Use state to bring in data
  const [dragons, setDragons] = useState([]);

  // RETRIEVE the list of dragons
  const loadDragons = async () => {
    const response = await fetch("/api/dragons", {
      headers: {
        Accept: "application/json",
      },
    }); // call to server to retrieve list of dragons
    const dragons = await response.json();
    setDragons(dragons);
  };

  // UPDATE an analyst
  const onEditDragon = async (dragon) => {
    history.push(`/dragons/${dragon.id}/edit`);
  };

  // DELETE a dragon
  const onDeleteDragon = async (_id) => {
    const response = await fetch(
      `/api/dragons/${_id}`, //path call to server for delete using unique id
      { method: "DELETE" }
    );
    if (response.status === 204) {
      const getResponse = await fetch(
        "/api/dragons" // path call to server to retrieve dragons (same as load)
      );
      const newDragons = await getResponse.json();
      setDragons(newDragons);
    } else {
      console.error(
        `Failed to delete dragon with _id = ${_id}, status code = ${response.status}`
      );
    }
  };

  // LOAD the dragons
  useEffect(() => {
    loadDragons();
  }, [location]);

  return (
    <>
      <h1>Dragons</h1>
      <Navigation></Navigation>
      <p>
        A <strong>dragon</strong> that has been named and identified will be
        recorded here.
      </p>
      <DragonsTable
        dragons={dragons}
        onEdit={onEditDragon}
        onDelete={onDeleteDragon}
      ></DragonsTable>
      <button type="button">
        <Link to="/dragons/add">Add Dragon</Link>
      </button>
    </>
  );
}
export default Dragons;
