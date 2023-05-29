import React from "react";

function ODsRow({ OD }) {
  return (
    <>
      <tr>
        <td>{OD.id}</td>
        <td>{OD.observation_id}</td>
        <td>{OD.color}</td>
        <td>{OD.size_id}</td>
        <td>{OD.additional_notes}</td>
      </tr>
    </>
  );
}
export default ODsRow;
