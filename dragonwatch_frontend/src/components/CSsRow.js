import React from "react";

function CSsRow({ CS }) {
  return (
    <>
      <tr>
        <td>{CS.id}</td>
        <td>{CS.observation_id}</td>
        <td>{CS.analyst_id}</td>
      </tr>
    </>
  );
}
export default CSsRow;
