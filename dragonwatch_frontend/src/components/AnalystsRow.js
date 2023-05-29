import React from "react";

function AnalystsRow({ analyst, onEdit, onDelete }) {
  return (
    <>
      <tr>
        <td>{analyst.id}</td>
        <td>{analyst.first_name}</td>
        <td>{analyst.last_name}</td>
        <td>{analyst.email}</td>
        <td>
          <button type="button" onClick={() => onEdit(analyst)}>
            Edit
          </button>
        </td>
        <td>
          <button type="button" onClick={() => onDelete(analyst._id)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
export default AnalystsRow;
