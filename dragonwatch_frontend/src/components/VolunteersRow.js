import React from "react";

function VolunteersRow({ volunteer }) {
  return (
    <>
      <tr>
        <td>{volunteer.id}</td>
        <td>{volunteer.first_name}</td>
        <td>{volunteer.last_name}</td>
        <td>{volunteer.email}</td>
      </tr>
    </>
  );
}
export default VolunteersRow;
