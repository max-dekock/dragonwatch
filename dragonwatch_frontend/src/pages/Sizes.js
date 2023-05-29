// id	first_name	last_name	email
import React from "react";
import Navigation from "../components/Navigation";

function Sizes() {
  return (
    <>
      <h1>Volunteers</h1>
      <Navigation></Navigation>
      <p>
        A table of <strong>size</strong> categories for observed dragons.
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Baby</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Small</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Large</td>
          </tr>
          <tr>
            <td>5</td>
            <td>X-Large</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default Sizes;
