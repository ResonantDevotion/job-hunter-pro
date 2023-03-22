// importing various folders/libraries to use here
import React from "react";
import "./style.css";

//function that creates a navigation bar element for the App
function Navbar() {
    return (
        <section>
            <h1>Job Hunter PRO</h1>
            <button>Personal profile</button>
            <button>Job Search</button>
            <button>Contact</button>
        </section>
    );
}

//exports the file to be used elsewhere
export default Navbar;


//COMMENTS
// should we have a hamburger menu?