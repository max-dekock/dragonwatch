import React from "react";
import AnalystsRow from "./AnalystsRow";

function AnalystsTable({ analysts, onEdit, onDelete }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">first_name</th>
            <th scope="col">last_name</th>
            <th scope="col">email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {analysts.map((analyst, i) => (
            <AnalystsRow
              analyst={analyst}
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

export default AnalystsTable;
