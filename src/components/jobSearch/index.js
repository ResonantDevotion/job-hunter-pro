// importing various folders/libraries to use here
import React from "react";
import "./style.css";

//function that creates a job search component for the App
function JobSearch() {
    return (
        <section>
                <input placeholder='Desired job'></input>
                <input placeholder='Desired job location'></input>
                <button>Search</button>
        </section>
    );
}

//exports the file to be used elsewhere
export default JobSearch;
