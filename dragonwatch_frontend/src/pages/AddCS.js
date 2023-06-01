import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const AddCS = () => {
  const [cs, setCS] = useState({
    id: "",
    observation_id: "",
    analyst_id: "",
  });
  const history = useHistory();

  const addCS = async () => {
    const response = await fetch(
      "/api/cs", // path to server call that adds a new CS to DB
      {
        method: "POST",
        body: JSON.stringify(cs),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 201) {
      alert("Successfully added CS!");
    } else {
      alert(`Failed to add CS, status code = ${response.status}`);
    }
    history.push("/cs");
  };

  return (
    <>
      <article>
        <h2>Enter the values for your new CS</h2>
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
              value={cs.id}
              onChange={(e) => setCS({ ...cs, id: e.target.value })}
              id="id"
              required
            />

            <label htmlFor="observation_id">Observation ID</label>
            <input
              type="text"
              value={cs.observation_id}
              placeholder="Observation ID"
              onChange={(e) => setCS({ ...cs, observation_id: e.target.value })}
              id="observation_id"
              required
            />

            <label htmlFor="analyst_id">Analyst ID</label>
            <input
              type="text"
              placeholder="Analyst ID"
              value={cs.analyst_id}
              onChange={(e) => setCS({ ...cs, analyst_id: e.target.value })}
              id="analyst_id"
              required
            />

            <button type="submit" onClick={addCS} id="submit">
              Add
            </button>
          </fieldset>
        </form>
      </article>
    </>
  );
};

export default AddCS;
