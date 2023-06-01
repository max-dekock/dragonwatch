import React from "react";

function VolunteersRow({ volunteer, onEdit, onDelete }) {
  return (
    <>
      <tr>
        <td>{volunteer.id}</td>
        <td>{volunteer.first_name}</td>
        <td>{volunteer.last_name}</td>
        <td>{volunteer.email}</td>
        <td>
          <button type="button" onClick={() => onEdit(volunteer)}>
            Edit
          </button>
        </td>
        <td>
          <button type="button" onClick={() => onDelete(volunteer.id)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
export default VolunteersRow;
