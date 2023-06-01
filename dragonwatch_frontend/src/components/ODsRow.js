import React from "react";

function ODsRow({ OD, onEdit, onDelete }) {
  return (
    <>
      <tr>
        <td>{OD.id}</td>
        <td>{OD.observation_id}</td>
        <td>{OD.color}</td>
        <td>{OD.size_id}</td>
        <td>{OD.additional_notes}</td>
        <td>
          <button type="button" onClick={() => onEdit(OD)}>
            Edit
          </button>
        </td>
        <td>
          <button type="button" onClick={() => onDelete(OD.id)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
export default ODsRow;
