import React from "react";
import CSsRow from "./CSsRow";

function CSsTable({ CSs }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">observation_id</th>
            <th scope="col">analyst_id</th>
          </tr>
        </thead>
        <tbody>
          {CSs.map((CS, i) => (
            <CSsRow CS={CS} key={i} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CSsTable;
