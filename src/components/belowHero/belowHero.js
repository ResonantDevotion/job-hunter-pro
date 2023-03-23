// importing various folders/libraries to use here
import React from "react";
import HeroImg from "../../assets/colorPal.png";
import "./belowHero.css";

//function that creates a hero element for the App
function BelowHero() {
  return (
    <div className="belowHero text-center">
      <h3 className="h3">
        Step 1 Create a skills profile. Step 2 Use our job search. Step 3 Find
        your dream job.
      </h3>
    </div>
  );
}

//exports the file to be used elsewhere
export default BelowHero;
