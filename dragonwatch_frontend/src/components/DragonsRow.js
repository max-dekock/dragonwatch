import React from "react";

function DragonsRow({ dragon }) {
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
      </tr>
    </>
  );
}
export default DragonsRow;
