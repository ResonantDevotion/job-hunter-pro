import React from "react";
// import "../pages/pages.css";
import Hero from "../components/hero/hero"; // 
// import JobSearch from "../components/jobSearch/JobSearch";

import BelowHero from "../components/belowHero/belowHero";

// function that creates a body for the homepage including information about what the app is about
function Frontpage() {
  return (
    <section className="body section">
      {<p>Find Jobs JobHunterPro helps people get jobs. Over 10 million stories shared.</p>}
    </section>
  );
}

export default Frontpage;
