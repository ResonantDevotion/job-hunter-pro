// importing various folders/libraries to use here
import React from "react";
import "./workCard.css";

//function that creates a work card element for the App
function WorkCards(props) {
    return (
        <section>
            <div className="card">
					<div className="card-body">
						<h5 className="card-title">Job Title: {props.title}</h5>
						<h6 className="card-subtitle mb-2 text-muted">Job Location: {props.location}</h6>
						<p className="card-text">Job Description: {props.description}</p>
						<a href="{props.link}" className="btn btn-primary">Go to job</a>
					</div>
				</div>
        </section>
    );
}



//exports the file to be used elsewhere
export default WorkCards;
