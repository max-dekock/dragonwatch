import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";

export const EditVolunteer = () => {
  const [volunteer, setVolunteer] = useState({});
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/volunteers/${id}`)
      .then((response) => response.json())
      .then((responseBody) => setVolunteer(responseBody));
  }, [id]);

  const editVolunteer = async () => {
    const response = await fetch(
      `/api/volunteers/${id}`, // path to server call that edits volunteer in DB based on id
      {
        method: "PUT",
        body: JSON.stringify({
          first_name: volunteer.first_name,
          last_name: volunteer.last_name,
          email: volunteer.email,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 204) {
      alert("Successfully edited volunteer!");
      history.push("/volunteers");
    } else {
      const errMessage = await response.text();
      alert(
        `Failed to update volunteer. Status ${response.status}. ${errMessage}`
      );
    }
  };

  return (
    <>
      <article>
        <h2>Edit a volunteer and save</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              value={volunteer.first_name}
              onChange={(e) =>
                setVolunteer({ ...volunteer, first_name: e.target.value })
              }
              id="first_name"
            />

            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              value={volunteer.last_name}
              onChange={(e) =>
                setVolunteer({ ...volunteer, last_name: e.target.value })
              }
              id="last_name"
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={volunteer.email}
              onChange={(e) =>
                setVolunteer({ ...volunteer, email: e.target.value })
              }
              id="email"
            />

            <button type="button" onClick={editVolunteer} id="submit">
              Edit
            </button>
          </fieldset>
        </form>
      </article>
    </>
  );
};

export default EditVolunteer;
