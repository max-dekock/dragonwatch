import React from "react";

function DragonsRow({ dragon, onEdit, onDelete }) {
  return (
    <>
      <tr>
        <td>{dragon.id}</td>
        <td>{dragon.nickame}</td>
        <td>{dragon.sex}</td>
        <td>{dragon.color}</td>
        <td>{dragon.length}</td>
        <td>{dragon.wingspan}</td>
        <td>{dragon.hatch_year}</td>
        <td>{dragon.identifying_marks}</td>
        <td>
          <button type="button" onClick={() => onEdit(dragon)}>
            Edit
          </button>
        </td>
        <td>
          <button type="button" onClick={() => onDelete(dragon.id)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
export default DragonsRow;
