import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const AddVolunteerPage = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

  const addVolunteer = async () => {
    const newVolunteer = { first_name, last_name, email };
    const response = await fetch(
      "/api/volunteers", // path to server call that adds a new volunteer to DB
      {
        method: "post",
        body: JSON.stringify(newVolunteer),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 201) {
      alert("Successfully added the volunteer!");
    } else {
      alert(`Failed to add volunteer, status code = ${response.status}`);
    }
    history.push("/volunteers");
  };

  return (
    <>
      <article>
        <h2>Enter the values for your new volunteer</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              id="first_name"
              required
            />

            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              value={last_name}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              id="last_name"
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />

            <button type="submit" onClick={addVolunteer}>
              Add
            </button>
          </fieldset>
        </form>
      </article>
    </>
  );
};

export default AddVolunteerPage;
