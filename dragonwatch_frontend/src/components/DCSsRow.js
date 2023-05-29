import React from "react";

function DCSsRow({ DCS }) {
  return (
    <>
      <tr>
        <td>{DCS.id}</td>
        <td>{DCS.dragon_id}</td>
        <td>{DCS.confirmed_sighting_id}</td>
      </tr>
    </>
  );
}
export default DCSsRow;
