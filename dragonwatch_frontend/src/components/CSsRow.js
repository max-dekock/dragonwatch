import React from "react";

function CSsRow({ CS, onEdit, onDelete }) {
  return (
    <>
      <tr>
        <td>{CS.id}</td>
        <td>{CS.observation_id}</td>
        <td>{CS.analyst_id}</td>
        <td>
          <button type="button" onClick={() => onEdit(CS)}>
            Edit
          </button>
        </td>
        <td>
          <button type="button" onClick={() => onDelete(CS.id)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
export default CSsRow;
