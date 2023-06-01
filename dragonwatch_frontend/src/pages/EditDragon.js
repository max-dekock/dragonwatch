import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";

export const EditDragon = () => {
  const [dragon, setDragon] = useState({});
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/dragons/${id}`)
      .then((response) => response.json())
      .then((responseBody) => setDragon(responseBody));
  }, [id]);

  const editDragon = async () => {
    const response = await fetch(
      `/api/dragons/${id}`, // path to server call that edits dragon in DB based on id
      {
        method: "PUT",
        body: JSON.stringify({
          nickname: dragon.nickname,
          sex: dragon.sex,
          color: dragon.color,
          length: dragon.length,
          wingspan: dragon.wingspan,
          hatch_year: dragon.hatch_year,
          identifying_marks: dragon.identifying_marks,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 204) {
      alert("Successfully edited dragon!");
      history.push("/dragons");
    } else {
      const errMessage = await response.text();
      alert(
        `Failed to update dragon. Status ${response.status}. ${errMessage}`
      );
    }
  };

  return (
    <>
      <article>
        <h2>Edit a dragon and save</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <label htmlFor="nickname">Nickname</label>
            <input
              type="text"
              value={dragon.nickname}
              onChange={(e) =>
                setDragon({ ...dragon, nickname: e.target.value })
              }
              id="nickname"
            />

            <label htmlFor="sex">Sex</label>
            <input
              type="text"
              value={dragon.sex}
              onChange={(e) => setDragon({ ...dragon, sex: e.target.value })}
              id="sex"
            />

            <label htmlFor="color">Color</label>
            <input
              type="text"
              value={dragon.color}
              onChange={(e) => setDragon({ ...dragon, color: e.target.value })}
              id="color"
            />

            <label htmlFor="length">Length</label>
            <input
              type="text"
              value={dragon.length}
              onChange={(e) => setDragon({ ...dragon, length: e.target.value })}
              id="length"
            />

            <label htmlFor="wingspan">Wingspan</label>
            <input
              type="text"
              value={dragon.wingspan}
              onChange={(e) =>
                setDragon({ ...dragon, wingspan: e.target.value })
              }
              id="wingspan"
            />

            <label htmlFor="hatch_year">Hatch Year</label>
            <input
              type="text"
              value={dragon.hatch_year}
              onChange={(e) =>
                setDragon({ ...dragon, hatch_year: e.target.value })
              }
              id="hatch_year"
            />

            <label htmlFor="identifying_marks">Identifying Marks</label>
            <input
              type="text"
              value={dragon.identifying_marks}
              onChange={(e) =>
                setDragon({ ...dragon, identifying_marks: e.target.value })
              }
              id="identifying_marks"
            />

            <button type="button" onClick={editDragon} id="submit">
              Edit
            </button>
          </fieldset>
        </form>
      </article>
    </>
  );
};

export default EditDragon;
