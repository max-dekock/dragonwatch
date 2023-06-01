import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const AddDragonPage = () => {
  const [nickname, setNickname] = useState("");
  const [sex, setSex] = useState("");
  const [color, setColor] = useState("");
  const [length, setLength] = useState("");
  const [wingspan, setWingspan] = useState("");
  const [hatch_year, setHatchYear] = useState("");
  const [identifying_marks, setIdentifyingMarks] = useState("");

  const history = useHistory();

  const addDragon = async () => {
    const newDragon = {
      nickname,
      sex,
      color,
      length,
      wingspan,
      hatch_year,
      identifying_marks,
    };
    const response = await fetch(
      "/api/dragons", // path to server call that adds a new dragon to DB
      {
        method: "post",
        body: JSON.stringify(newDragon),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 201) {
      alert("Successfully added the dragon!");
    } else {
      alert(`Failed to add dragon, status code = ${response.status}`);
    }
    history.push("/dragons");
  };

  return (
    <>
      <article>
        <h2>Enter the values for your new dragon</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <label htmlFor="nickname">Nickname</label>
            <input
              type="text"
              placeholder="Nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              id="nickname"
              required
            />

            <label htmlFor="sex">Sex</label>
            <input
              type="text"
              placeholder="Sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              id="sex"
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

            <label htmlFor="length">Length</label>
            <input
              type="text"
              placeholder="Length"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              id="length"
              required
            />

            <label htmlFor="wingspan">Wingspan</label>
            <input
              type="text"
              placeholder="Wingspan"
              value={wingspan}
              onChange={(e) => setWingspan(e.target.value)}
              id="wingspan"
              required
            />

            <label htmlFor="hatch_year">Hatch Year</label>
            <input
              type="text"
              placeholder="Hatch Year"
              value={hatch_year}
              onChange={(e) => setHatchYear(e.target.value)}
              id="hatch_year"
              required
            />

            <label htmlFor="identifying_marks">Identifying Marks</label>
            <input
              type="text"
              placeholder="Identifying Marks"
              value={identifying_marks}
              onChange={(e) => setIdentifyingMarks(e.target.value)}
              id="identifying_marks"
              required
            />

            <label for="submit">
              <button type="submit" onClick={addDragon} id="submit">
                Add
              </button>
            </label>
          </fieldset>
        </form>
      </article>
    </>
  );
};

export default AddDragonPage;
