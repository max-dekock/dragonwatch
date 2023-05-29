import React from "react";
import Navigation from "../components/Navigation";
import DragonsTable from "../components/DragonsTable";
import { useState, useEffect } from "react";

function Dragons() {
  const [dragons, setDragons] = useState([]);

  // RETRIEVE the list of dragons
  const loadDragons = async () => {
    const response = await fetch("#"); // call to server to retrieve list of dragons
    const dragons = await response.json();
    setDragons(dragons);
  };

  // LOAD the dragons
  useEffect(() => {
    loadDragons();
  }, []);

  return (
    <>
      <h1>Dragons</h1>
      <Navigation></Navigation>
      <p>
        A <strong>dragon</strong> that has been named and identified will be
        recorded here.
      </p>
      <DragonsTable dragons={dragons}></DragonsTable>
    </>
  );
}
export default Dragons;
