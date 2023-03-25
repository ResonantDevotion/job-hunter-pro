// importing various folders/libraries to use here
import {React, useState, useEffect} from "react";
import WorkCards from "../cards/workCard/workCards";
import "./jobSearch.css";
//import schedule from "node-schedule";

//function that creates a job search component for the App
function JobSearch () {

	const [position, setPositions] = useState('');
	const [location, setLocations] = useState('');
	const [data, setData] = useState(null, []);
	const [formSubmit, setFormSubmit] = useState(false);
	const [finalData, setFinalData] = useState('');



	useEffect(() => {
		

		const fetchData = () => {
	
			fetch(`https://jsearch.p.rapidapi.com/search?query=+${position},${location}`, {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': '18e152f324mshbeaae49d17fe1aep190649jsn96aa6c55d44d',
					'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
				}
			})
			.then(response => {return response.json()})
			.then(result => {
				setData(result.data);
			})
			.catch(err => console.error(err));
		}
		fetchData();
	}, [position, location, finalData])

	const onPositionChangeHendler = (e) => {
		setPositions(e.target.value);
	}
	const onLocationChangeHendler = (e) => {
		setLocations(e.target.value);
	} 

	const submitHendler = (e) => {
		e.preventDefault()
		setFormSubmit(true);
		setFinalData(position, location);
		//setPositions("");
		//setLocations("");
	}

	console.log(data)

	return (
		<>
			<section>
				<form onSubmit={submitHendler}>
					<input placeholder='Desired job' value={position} onChange={onPositionChangeHendler}></input>
					<input placeholder='Desired job location' value={location} onChange={onLocationChangeHendler}></input>
					<button type="submit" >Search</button>
					{formSubmit && data && (
						<div>
							{data.map((data, i) => {
								return(
									<WorkCards 
										title={data.job_title}
										location={data.job_city}
										employment_type={data.job_employment_type}
										description={data.job_description}
										link={data.job_apply_link}
										key={i}
									/>
								)
							})}
						</div>
					)}
				</form>
			</section>	
		
		</>
	);
	
}

//exports the file to be used elsewhere
export default JobSearch;
