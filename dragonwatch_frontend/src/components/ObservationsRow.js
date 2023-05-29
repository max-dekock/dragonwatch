import React from "react";

function ObservationsRow({ observation }) {
  return (
    <>
      <tr>
        <td>{observation.id}</td>
        <td>{observation.volunteer_id}</td>
        <td>{observation.observation_time}</td>
        <td>{observation.location}</td>
      </tr>
    </>
  );
}
export default ObservationsRow;
