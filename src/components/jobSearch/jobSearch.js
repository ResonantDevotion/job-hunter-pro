// importing various folders/libraries to use here
import {React, useState, useEffect} from "react";
import WorkCards from "../cards/workCard/workCards";
import "./jobSearch.css";
import axios from "axios";
import schedule from "node-schedule";

//function that creates a job search component for the App
function JobSearch () {

	const [position, setPositions] = useState('');
	const [location, setLocations] = useState('');
	const [data, setData] = useState([]);
	const [finalData, setFinalData] = useState('');

	useEffect(() => {
		fetchData()
	}, [finalData])

	const fetchData = () => {
	
		fetch(`https://jsearch.p.rapidapi.com/search?query=+${position},${location}`, {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '708c147ca5msh9dc67ead913554fp11c54bjsn4a3e2e3b0adc',
				'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
			}
		})
		.then(response => {return response.json()})
		.then(result => {
			setData(result.data);
		})
		.catch(err => console.error(err));
	}

	const onPositionChangeHendler = (e) => {
		setPositions(e.target.value);
	}
	const onLocationChangeHendler = (e) => {
		setLocations(e.target.value);
	} 

	const submitHendler = (e) => {
		e.preventDefault()
		setFinalData(position, location);
	}

	console.log(data)

	return (
		<>
			<section>
				<form onSubmit={submitHendler}>
					<input placeholder='Desired job' value={position} onChange={onPositionChangeHendler}></input>
					<input placeholder='Desired job location' value={location} onChange={onLocationChangeHendler}></input>
					<button type="submit" >Search</button>
				</form>
			</section>	
			<WorkCards />
		</>
	);
	
}

//exports the file to be used elsewhere
export default JobSearch;
