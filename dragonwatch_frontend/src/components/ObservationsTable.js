import React from "react";
import ObservationsRow from "./ObservationsRow";

function ObservationsTable({ observations, onEdit, onDelete }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">volunteer_id</th>
            <th scope="col">observation_time</th>
            <th scope="col">location</th>
          </tr>
        </thead>
        <tbody>
          {observations.map((observation, i) => (
            <ObservationsRow
              observation={observation}
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

export default ObservationsTable;
