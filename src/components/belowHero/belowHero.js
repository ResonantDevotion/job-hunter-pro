// importing various folders/libraries to use here
import React from "react";
import "./belowHero.css";

//function that creates a hero element for the App
function BelowHero() {
  return (
    <div className="belowHero text-center">
      <h3 className="h3">
        <ul>
          <li>
      Create your unique skills profile </li>
      <li>Use our stress free job search</li>
      <li>Land your dream job</li>
        </ul>
      </h3>
    </div>
  );
}

//exports the file to be used elsewhere
export default BelowHero;
