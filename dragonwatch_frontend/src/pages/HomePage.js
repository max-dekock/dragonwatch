import React from "react";
import Navigation from "../components/Navigation";

function HomePage() {
  return (
    <>
      <h1>DragonWatch</h1>
      <Navigation></Navigation>
      <h2>Welcome!</h2>
      <p>
        DragonWatch is an international organization that aggregates and
        analyzes dragon sightings to track dragon flight patterns in order to
        better understand their distribution and behavior. We rely on volunteers
        across the world to report dragon sightings, which are each then
        reviewed by an expert dragon analyst to identify specific individual
        dragons.
      </p>
      <p>
        The world dragon population is estimated to be around 2,000, with only
        about 10% of those being previously identified. DragonWatch employs 30
        expert analysts to review submissions, with about 150 new sightings
        being reported each week. So far, around 3,500 volunteer dragon watchers
        have signed up.
      </p>
    </>
  );
}
export default HomePage;
