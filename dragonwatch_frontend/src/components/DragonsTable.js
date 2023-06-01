import React from "react";
import DragonsRow from "./DragonsRow";

function DragonsTable({ dragons, onEdit, onDelete }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">nickanme</th>
            <th scope="col">sex</th>
            <th scope="col">color</th>
            <th scope="col">length</th>
            <th scope="col">wingspan</th>
            <th scope="col">hatch_year</th>
            <th scope="col">identifying_marks</th>
          </tr>
        </thead>
        <tbody>
          {dragons.map((dragon, i) => (
            <DragonsRow
              dragon={dragon}
              key={i}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DragonsTable;
