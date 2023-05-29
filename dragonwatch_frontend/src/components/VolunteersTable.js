import React from "react";
import VolunteersRow from "./VolunteersRow";

function VolunteersTable({ volunteers }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">first_name</th>
            <th scope="col">last_name</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map((volunteer, i) => (
            <VolunteersRow volunteer={volunteer} key={i} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default VolunteersTable;
