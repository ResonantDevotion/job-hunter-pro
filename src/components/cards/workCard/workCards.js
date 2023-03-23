// importing various folders/libraries to use here
import React from "react";
import "../../../utils/style.css";

//function that creates a work card element for the App
function WorkCards() {
    return (
        <section>
            <card>
                <h3>Job Title: {'API CALL'} </h3>
                <p>Job location: {'API CALL'}</p>
                <p>Required education level: {'API CALL'}</p>
                <p>Experience needed: {'API CALL'}</p>
                <p>Skills Needed: {'API CALL'}</p>
                <a href={'API CALL'}><button>Go to job</button></a>
            </card>
        </section>
    );
}

//exports the file to be used elsewhere
export default WorkCards;
