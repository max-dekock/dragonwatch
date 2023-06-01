import React from "react";

function ObservationsRow({ observation, onEdit, onDelete }) {
  return (
    <>
      <tr>
        <td>{observation.id}</td>
        <td>{observation.volunteer_id}</td>
        <td>{observation.observation_time}</td>
        <td>{observation.location}</td>
        <td>
          <button type="button" onClick={() => onEdit(observation)}>
            Edit
          </button>
        </td>
        <td>
          <button type="button" onClick={() => onDelete(observation.id)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
export default ObservationsRow;
