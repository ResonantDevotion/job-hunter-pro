import React from "react";
import "../pages/pages.css";

import Hero from "../components/hero/hero";

// function that creates a body for the homepage including information about what the app is about
function Frontpage() {
  return (
    <section className="body section">
      <Hero />
    </section>
  );
}

export default Frontpage;
