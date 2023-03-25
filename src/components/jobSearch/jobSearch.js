// importing various folders/libraries to use here
import { React, useState, useRef, useCallback } from "react";
import WorkCards from "../cards/workCard/workCards"
import schedule from "node-schedule";

//function that creates a job search component for the App
function JobSearch () {
	const [data, setData] = useState( false, [] );
	const [position, setPositions] = useState('');
	const [location, setLocations] = useState('');
	const [isLoading, setIsLoading] = useState (false);
	const scheduledJob = useRef(null);

	const search = useCallback(() => {
		setIsLoading (true);
		return fetch(`https://jsearch.p.rapidapi.com/search?query=+${position},${location}`, {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'a1c12b7935mshdb72c4c6a9cc758p16c581jsn3dc92574e38b',
				'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
			}
		})
		.then(response => {return response.json()})
		.then(result => {
			setData(result.data);
			setIsLoading(false);
		})
		
		.catch(err => console.error(err));
		
	}, [location, position]);

	const onPositionChangeHendler = (e) => {
		setPositions(e.target.value);
	}
	const onLocationChangeHendler = (e) => {
		setLocations(e.target.value);
	} 

	const submitHendler = (e) => {
		e.preventDefault();
		if(scheduledJob.current || !position || !location) return;

		if(scheduledJob.current) schedule.gracefulShutdown();

		scheduledJob.current = schedule.scheduleJob("*/30 * * * * *", search);
	}

	console.log(data)

	return (
		<>
			<section>
				<form onSubmit={submitHendler}>
					<input placeholder='Desired job' value={position} onChange={onPositionChangeHendler}></input>
					<input placeholder='Desired job location' value={location} onChange={onLocationChangeHendler}></input>
					<button type="submit" >Search</button>
					{isLoading ? (<div>Loading...</div>) : (
						<div>
							{!isLoading && data && (
								<>
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
								</>
							)}
						</div>
					)}
				</form>
			</section>	
		
		</>
	);
	
}

//exports the file to be used elsewhere
export default JobSearch;
