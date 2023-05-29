import React from "react";
import ODsRow from "./ODsRow";

function ODsTable({ ODs }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">observation_id</th>
            <th scope="col">color</th>
            <th scope="col">size_id</th>
            <th scope="col">additional_notes</th>
          </tr>
        </thead>
        <tbody>
          {ODs.map((OD, i) => (
            <ODsRow observation={OD} key={i} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ODsTable;
