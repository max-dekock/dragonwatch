import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

export const EditCS = () => {
  const [cs, setCS] = useState({});
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/cs/${id}`)
      .then((response) => response.json())
      .then((responseBody) => setCS(responseBody));
  }, [id]);

  const editCS = async () => {
    const response = await fetch(
      `/api/cs/${id}`, // path to server call that edits CS in DB based on id
      {
        method: "PUT",
        body: JSON.stringify(cs),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 204) {
      alert("Successfully edited CS!");
      history.push("/cs");
    } else {
      const errMessage = await response.text();
      alert(`Failed to update CS. Status ${response.status}. ${errMessage}`);
    }
  };

  return (
    <>
      <article>
        <h2>Edit a CS and save</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <label htmlFor="id">ID</label>
            <input
              type="text"
              value={cs.id}
              onChange={(e) => setCS({ ...cs, id: e.target.value })}
              id="id"
              readOnly
            />

            <label htmlFor="observation_id">Observation ID</label>
            <input
              type="text"
              value={cs.observation_id}
              onChange={(e) => setCS({ ...cs, observation_id: e.target.value })}
              id="observation_id"
            />

            <label htmlFor="analyst_id">Analyst ID</label>
            <input
              type="text"
              value={cs.analyst_id}
              onChange={(e) => setCS({ ...cs, analyst_id: e.target.value })}
              id="analyst_id"
            />

            <button type="button" onClick={editCS} id="submit">
              Edit
            </button>
          </fieldset>
        </form>
      </article>
    </>
  );
};

export default EditCS;
