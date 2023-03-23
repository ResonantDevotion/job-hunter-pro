// importing various folders/libraries to use here
import React from "react";
import HeroImg from "../../assets/colorPal.png";
import "./hero.css";

//function that creates a hero element for the App
function Hero() {
  return (
    <div
      className="hero text-center"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <h1 className="h1">Job Hunter Pro</h1>
      <h2 className="h2">Helping you check your skills</h2>
    </div>
  );
}

//exports the file to be used elsewhere
export default Hero;
