import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const AddOD = () => {
  const [id, setId] = useState("");
  const [observation_id, setObservationId] = useState("");
  const [color, setColor] = useState("");
  const [size_id, setSizeId] = useState("");
  const [additional_notes, setAdditionalNotes] = useState("");

  const history = useHistory();

  const addOD = async () => {
    const newOD = {
      id,
      observation_id,
      color,
      size_id,
      additional_notes,
    };

    const response = await fetch("/api/od", {
      method: "POST",
      body: JSON.stringify(newOD),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 201) {
      alert("Successfully added the OD!");
    } else {
      alert(`Failed to add OD, status code = ${response.status}`);
    }

    history.push("/ods");
  };

  return (
    <>
      <article>
        <h2>Enter the values for your new OD</h2>
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
              onChange={(e) => setId(e.target.value)}
              id="id"
              required
            />

            <label htmlFor="observation_id">Observation ID</label>
            <input
              type="text"
              placeholder="Observation ID"
              value={observation_id}
              onChange={(e) => setObservationId(e.target.value)}
              id="observation_id"
              required
            />

            <label htmlFor="color">Color</label>
            <input
              type="text"
              placeholder="Color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              id="color"
              required
            />

            <label htmlFor="size_id">Size ID</label>
            <input
              type="text"
              placeholder="Size ID"
              value={size_id}
              onChange={(e) => setSizeId(e.target.value)}
              id="size_id"
              required
            />

            <label htmlFor="additional_notes">Additional Notes</label>
            <input
              type="text"
              placeholder="Additional Notes"
              value={additional_notes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              id="additional_notes"
              required
            />

            <button type="submit" onClick={addOD} id="submit">
              Add
            </button>
          </fieldset>
        </form>
      </article>
    </>
  );
};

export default AddOD;
