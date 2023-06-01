import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";

export const EditOD = () => {
  const [od, setOD] = useState({});
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/od/${id}`)
      .then((response) => response.json())
      .then((responseBody) => setOD(responseBody));
  }, [id]);

  const editOD = async () => {
    const response = await fetch(
      `/api/od/${id}`, // path to server call that edits od in DB based on id
      {
        method: "PUT",
        body: JSON.stringify({
          id: od.id,
          observation_id: od.observation_id,
          color: od.color,
          size_id: od.size_id,
          additional_notes: od.additional_notes,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 204) {
      alert("Successfully edited the OD!");
      history.push("/ods");
    } else {
      const errMessage = await response.text();
      alert(
        `Failed to update the OD. Status ${response.status}. ${errMessage}`
      );
    }
  };

  return (
    <>
      <article>
        <h2>Edit an OD and save</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <label htmlFor="id">ID</label>
            <input
              type="text"
              value={od.id}
              onChange={(e) => setOD({ ...od, id: e.target.value })}
              id="id"
            />

            <label htmlFor="observation_id">Observation ID</label>
            <input
              type="text"
              value={od.observation_id}
              onChange={(e) => setOD({ ...od, observation_id: e.target.value })}
              id="observation_id"
            />

            <label htmlFor="color">Color</label>
            <input
              type="text"
              value={od.color}
              onChange={(e) => setOD({ ...od, color: e.target.value })}
              id="color"
            />

            <label htmlFor="size_id">Size ID</label>
            <input
              type="text"
              value={od.size_id}
              onChange={(e) => setOD({ ...od, size_id: e.target.value })}
              id="size_id"
            />

            <label htmlFor="additional_notes">Additional Notes</label>
            <input
              type="text"
              value={od.additional_notes}
              onChange={(e) =>
                setOD({ ...od, additional_notes: e.target.value })
              }
              id="additional_notes"
            />

            <button type="button" onClick={editOD} id="submit">
              Edit
            </button>
          </fieldset>
        </form>
      </article>
    </>
  );
};

export default EditOD;
