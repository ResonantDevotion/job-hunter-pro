// importing various folders/libraries to use here
import React, { useState } from 'react';
import "./workCard.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

//function that creates a work card element for the App
function WorkCards(props) {
	const [lgShow, setLgShow] = useState(false);

	return (
		<div className="card">
			<div className="card-body">
				<h3 className="card-title"><strong>Job Title:</strong> {props.title}</h3>
				<h5 className="card-subtitle mb-2"><strong>Job Location:</strong> {props.location}</h5>
				<h5 className="card-subtitle mb-2"><strong>Company:</strong> {props.employer}</h5>
				<h5 className="card-subtitle mb-2"><strong>Employment Type:</strong> {props.employmentType}</h5>
				<div className="card-btn-wrapper">
					<Button className="modal-button" onClick={() => setLgShow(true)}>Job Description</Button>
					<Modal
						size="lg"
						show={lgShow}
						onHide={() => setLgShow(false)}
						aria-labelledby="example-modal-sizes-title-lg"
					>
						<Modal.Header closeButton>
							<Modal.Title id="example-modal-sizes-title-lg">
								Job Description
							</Modal.Title>
						</Modal.Header>
						<Modal.Body>{props.description}</Modal.Body>
					</Modal>
					<Button href={props.link} className="modal-button">Go to Job</Button>
				</div>
			</div>
		</div>
	);
}

//exports the file to be used elsewhere
export default WorkCards;
