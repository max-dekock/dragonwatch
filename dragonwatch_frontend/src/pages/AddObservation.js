import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const AddObservationPage = () => {
  const [id, setId] = useState("");
  const [volunteer_id, setVolunteerId] = useState("");
  const [observation_time, setObservationTime] = useState("");
  const [location, setLocation] = useState("");

  const history = useHistory();

  const addObservation = async () => {
    const newObservation = { id, volunteer_id, observation_time, location };
    const response = await fetch(
      "/api/observations", // path to server call that adds a new observation to DB
      {
        method: "post",
        body: JSON.stringify(newObservation),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 201) {
      alert("Successfully added the observation!");
    } else {
      alert(`Failed to add observation, status code = ${response.status}`);
    }
    history.push("/observations");
  };

  return (
    <>
      <article>
        <h2>Enter the values for your new observation</h2>
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

            <label htmlFor="volunteer_id">Volunteer ID</label>
            <input
              type="text"
              value={volunteer_id}
              placeholder="Volunteer ID"
              onChange={(e) => setVolunteerId(e.target.value)}
              id="volunteer_id"
            />

            <label htmlFor="observation_time">Observation Time</label>
            <input
              type="text"
              placeholder="Observation Time"
              value={observation_time}
              onChange={(e) => setObservationTime(e.target.value)}
              id="observation_time"
            />

            <label htmlFor="location">Location</label>
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              id="location"
            />

            <button type="submit" onClick={addObservation} id="submit">
              Add
            </button>
          </fieldset>
        </form>
      </article>
    </>
  );
};

export default AddObservationPage;
