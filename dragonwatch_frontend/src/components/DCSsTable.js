import React from "react";
import DCSsRow from "./DCSsRow";

function DCSsTable({ DCSs, onEdit, onDelete }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">dragon_id</th>
            <th scope="col">confirmed_sighting_id</th>
          </tr>
        </thead>
        <tbody>
          {DCSs.map((DCS, i) => (
            <DCSsRow DCS={DCS} key={i} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DCSsTable;
