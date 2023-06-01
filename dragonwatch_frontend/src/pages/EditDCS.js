import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";

export const EditDCS = () => {
  const [dcs, setDCS] = useState({});
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/dcs/${id}`)
      .then((response) => response.json())
      .then((responseBody) => setDCS(responseBody));
  }, [id]);

  const editDCS = async () => {
    const response = await fetch(
      `/api/dcs/${id}`, // path to server call that edits DCS in DB based on id
      {
        method: "PUT",
        body: JSON.stringify({
          dragon_id: dcs.dragon_id,
          confirmed_sighting_id: dcs.confirmed_sighting_id,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 204) {
      alert("Successfully edited DCS!");
      history.push("/dcs");
    } else {
      const errMessage = await response.text();
      alert(`Failed to update DCS. Status ${response.status}. ${errMessage}`);
    }
  };

  return (
    <>
      <article>
        <h2>Edit a DCS and save</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <label htmlFor="dragon_id">Dragon ID</label>
            <input
              type="text"
              value={dcs.dragon_id}
              onChange={(e) => setDCS({ ...dcs, dragon_id: e.target.value })}
              id="dragon_id"
            />

            <label htmlFor="confirmed_sighting_id">Confirmed Sighting ID</label>
            <input
              type="text"
              value={dcs.confirmed_sighting_id}
              onChange={(e) =>
                setDCS({ ...dcs, confirmed_sighting_id: e.target.value })
              }
              id="confirmed_sighting_id"
            />

            <button type="button" onClick={editDCS} id="submit">
              Edit
            </button>
          </fieldset>
        </form>
      </article>
    </>
  );
};

export default EditDCS;
