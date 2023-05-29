import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const AddAnalystPage = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

  const addAnalyst = async () => {
    const newAnalyst = { first_name, last_name, email };
    const response = await fetch(
      "/api/analysts", // path to server call that adds a new analyst to DB
      {
        method: "post",
        body: JSON.stringify(newAnalyst),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 201) {
      alert("Successfully added the analyst!");
    } else {
      alert(`Failed to add analyst, status code = ${response.status}`);
    }
    history.push("/analysts");
  };

  return (
    <>
      <article>
        <h2>Enter the values for your new analyst</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <label for="first_name">fist_name</label>
            <input
              type="text"
              placeholder="fist name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              id="first_name"
              required
            />

            <label for="last_name">last_name</label>
            <input
              type="text"
              value={last_name}
              placeholder="last name"
              onChange={(e) => setLastName(e.target.value)}
              id="last_name"
            />

            <label for="email">email</label>
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />

            <label for="submit">
              <button type="submit" onClick={addAnalyst} id="submit">
                Add
              </button>
            </label>
          </fieldset>
        </form>
      </article>
    </>
  );
};

export default AddAnalystPage;
