import React from "react";

function DCSsRow({ DCS, onEdit, onDelete }) {
  return (
    <>
      <tr>
        <td>{DCS.id}</td>
        <td>{DCS.dragon_id}</td>
        <td>{DCS.confirmed_sighting_id}</td>
        <td>
          <button type="button" onClick={() => onEdit(DCS)}>
            Edit
          </button>
        </td>
        <td>
          <button type="button" onClick={() => onDelete(DCS.id)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
export default DCSsRow;
