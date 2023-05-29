import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <header>
        <nav>
          [
          <Link to="/" className="navlink">
            Home
          </Link>
          |
          <Link to="/analysts" className="navlink">
            Analysts
          </Link>
          |
          <Link to="/volunteers" className="navlink">
            Volunteers
          </Link>
          |
          <Link to="/dragons" className="navlink">
            Dragons
          </Link>{" "}
          |
          <Link to="/sizes" className="navlink">
            Sizes
          </Link>
          |
          <Link to="/dcs" className="navlink">
            Dragon_Confirmed_Sightings
          </Link>
          |
          <Link to="/cs" className="navlink">
            Confirmed_Sightings
          </Link>
          |
          <Link to="/observations" className="navlink">
            Observations
          </Link>
          |
          <Link to="/od" className="navlink">
            Observations_Desc
          </Link>
          ]
        </nav>
      </header>
    </>
  );
}

export default Navigation;
