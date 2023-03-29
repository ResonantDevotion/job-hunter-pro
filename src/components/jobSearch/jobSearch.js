// importing various folders/libraries to use here
import { React, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper";
import WorkCards from "../cards/workCard/workCards";
import Button from "react-bootstrap/esm/Button";
import "./jobSearch.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


//function that creates a job search component for the App
function JobSearch () {
	const [data, setData] = useState( false, [] );
	const [position, setPositions] = useState('');
	const [location, setLocations] = useState('');
	const [isLoading, setIsLoading] = useState (false);
	

	const search = (loc, pos) => {
		setIsLoading (true);
		return fetch(`https://jsearch.p.rapidapi.com/search?query=+${pos},${loc}`, {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '4c8003e02amsheaaffdcc20613dep135e71jsn12740e54787e',
				'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
			}
		})
		.then(response => {return response.json()})
		.then(result => {
			setData(result.data);
			setIsLoading(false);
		})
		
		.catch(err => console.error(err));
		
	};

	const onPositionChangeHendler = (e) => {
		setPositions(e.target.value);
	}
	const onLocationChangeHendler = (e) => {
		setLocations(e.target.value);
	} 

	const submitHendler = (e) => {
		e.preventDefault();

		search(location, position);
	}

	console.log("this is data from JobSearch", data)

	return (
		<>
			<section className="search-wrapper">
				<div className="search-form-wrapper">
					<form className="search-form text-center" onSubmit={submitHendler}>
						<input className="search-input" placeholder='Desired job' value={position} onChange={onPositionChangeHendler}></input>
						<input className="search-input" placeholder='Desired job location' value={location} onChange={onLocationChangeHendler}></input>
						<Button type="submit" className="search-button">Search</Button>
					</form>
				</div>
				{isLoading ? (<div>Loading...</div>) : (
					<div className="swiper-container">
						{!isLoading && data && (
							<div className="container py-4 px-4 justify-content-center">
							<Swiper
								style={{
									"--swiper-navigation-color": "#0f0f0f",
									"--swiper-navigation-size": "25px",
									"--swiper-pagination-color": "var(--clr1)" 
								}}
								grabCursor={true}
								pagination={{ clickable: true }}
								navigation
								modules={[ Navigation, Pagination]}
								className="my-swiper"
								slidesPerView={1}
								spaceBetween={1}
								centeredSlides
								
								
							>
								<>
									{data.map((data, i) => {
										return(
											<SwiperSlide key={i}>
												<WorkCards 
													title={data.job_title}
													location={data.job_city}
													employer={data.employer_name}
													employment_type={data.job_employment_type}
													description={data.job_description}
													link={data.job_apply_link}
													employmentType={data.job_employment_type}
												/>
											</SwiperSlide>
										)
									})}
								</>
							</Swiper>
						</div>
						)}
					</div>
				)}	
			</section>	
		</>
	);
	
}

//exports the file to be used elsewhere
export default JobSearch;
