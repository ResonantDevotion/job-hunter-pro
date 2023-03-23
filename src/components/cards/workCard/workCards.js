// importing various folders/libraries to use here
import React from "react";
import "./workCard.css";

//function that creates a work card element for the App
function WorkCards(props) {
    return (
        <section>
            <card>
					<h3>Job Title: {props.title} </h3>
					<p>Job Location: {props.location}</p>
					<p>Job Employment Type: {props.employment_type}</p>
					<p>Job Description: {props.description}</p>
					<a href={props.link}><button>Go to job</button></a>
            </card>
        </section>
    );
}

//exports the file to be used elsewhere
export default WorkCards;
