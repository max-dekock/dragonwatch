import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";

export const EditObservation = () => {
  const [observation, setObservation] = useState({});
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/observations/${id}`)
      .then((response) => response.json())
      .then((responseBody) => setObservation(responseBody));
  }, [id]);

  const editObservation = async () => {
    const response = await fetch(
      `/api/observations/${id}`, // path to server call that edits observation in DB based on id
      {
        method: "PUT",
        body: JSON.stringify({
          volunteer_id: observation.volunteer_id,
          observation_time: observation.observation_time,
          location: observation.location,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 204) {
      alert("Successfully edited observation!");
      history.push("/observations");
    } else {
      const errMessage = await response.text();
      alert(
        `Failed to update observation. Status ${response.status}. ${errMessage}`
      );
    }
  };

  return (
    <>
      <article>
        <h2>Edit an observation and save</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <label htmlFor="volunteer_id">Volunteer ID</label>
            <input
              type="text"
              value={observation.volunteer_id}
              onChange={(e) =>
                setObservation({ ...observation, volunteer_id: e.target.value })
              }
              id="volunteer_id"
            />

            <label htmlFor="observation_time">Observation Time</label>
            <input
              type="text"
              value={observation.observation_time}
              onChange={(e) =>
                setObservation({
                  ...observation,
                  observation_time: e.target.value,
                })
              }
              id="observation_time"
            />

            <label htmlFor="location">Location</label>
            <input
              type="text"
              value={observation.location}
              onChange={(e) =>
                setObservation({ ...observation, location: e.target.value })
              }
              id="location"
            />

            <button type="button" onClick={editObservation} id="submit">
              Edit
            </button>
          </fieldset>
        </form>
      </article>
    </>
  );
};

export default EditObservation;
