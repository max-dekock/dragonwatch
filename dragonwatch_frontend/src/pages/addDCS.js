import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const AddDCSPage = () => {
  const [id, setID] = useState("");
  const [dragon_id, setDragonID] = useState("");
  const [confirmed_sighting_id, setConfirmedSightingID] = useState("");

  const history = useHistory();

  const addDCS = async () => {
    const newDCS = { id, dragon_id, confirmed_sighting_id };
    const response = await fetch(
      "/api/dcs", // path to server call that adds a new DCS to DB
      {
        method: "post",
        body: JSON.stringify(newDCS),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 201) {
      alert("Successfully added the DCS!");
    } else {
      alert(`Failed to add DCS, status code = ${response.status}`);
    }
    history.push("/dcs");
  };

  return (
    <>
      <article>
        <h2>Enter the values for your new DCS</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <label htmlFor="id">ID</label>
            <input
              type="text"
              placeholder="ID"
              value={id}
              onChange={(e) => setID(e.target.value)}
              id="id"
              required
            />

            <label htmlFor="dragon_id">Dragon ID</label>
            <input
              type="text"
              value={dragon_id}
              placeholder="Dragon ID"
              onChange={(e) => setDragonID(e.target.value)}
              id="dragon_id"
            />

            <label htmlFor="confirmed_sighting_id">Confirmed Sighting ID</label>
            <input
              type="text"
              placeholder="Confirmed Sighting ID"
              value={confirmed_sighting_id}
              onChange={(e) => setConfirmedSightingID(e.target.value)}
              id="confirmed_sighting_id"
            />

            <button type="submit" onClick={addDCS} id="submit">
              Add
            </button>
          </fieldset>
        </form>
      </article>
    </>
  );
};

export default AddDCSPage;
