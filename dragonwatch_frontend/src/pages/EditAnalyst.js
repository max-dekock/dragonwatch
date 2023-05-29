import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";

export const EditAnalyst = () => {
  const [analyst, setAnalyst] = useState({});
  const history = useHistory();
  const { id } = useParams();

  useEffect(async () => {
    const response = await fetch(`/api/analysts/${id}`);
    const responseBody = await response.json();
    setAnalyst(responseBody);
  }, [id]);

  const editAnalyst = async () => {
    const response = await fetch(
      `/api/analysts/${id}`, // paht to server call that edits analyst in DD based on id
      {
        method: "PUT",
        body: JSON.stringify({
          first_name: analyst.first_name,
          last_name: analyst.last_name,
          email: analyst.email,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 204) {
      alert("Successfully edited analyst!");
      history.push("/analysts");
    } else {
      const errMessage = await response.text();
      alert(
        `Failed to update analyst. Status ${response.status}. ${errMessage}`
      );
    }
  };

  return (
    <>
      <article>
        <h2>Edit an analyst and save</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <label for="first_name">first_name</label>
            <input
              type="text"
              value={analyst.first_name}
              onChange={(e) => setAnalyst({...analyst, first_name: e.target.value})}
              id="first_name"
            />

            <label for="last_name">last_name</label>
            <input
              type="text"
              value={analyst.last_name}
              onChange={(e) => setAnalyst({...analyst, last_name: e.target.value})}
              id="last_name"
            />

            <label for="email">email</label>
            <input
              type="text"
              value={analyst.email}
              onChange={(e) =>  setAnalyst({...analyst, email: e.target.value})}
              id="email"
            />

            <label for="submit">
              <button type="button" onClick={editAnalyst} id="submit">
                Edit
              </button>
            </label>
          </fieldset>
        </form>
      </article>
    </>
  );
};
export default EditAnalyst;
