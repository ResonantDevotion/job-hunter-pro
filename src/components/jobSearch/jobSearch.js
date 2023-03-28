// importing various folders/libraries to use here

import { React, useState, useEffect } from "react";
import WorkCards from "../cards/workCard/workCards";
import "./jobSearch.css";

//function that creates a job search component for the App
function JobSearch() {
  const [position, setPositions] = useState("");
  const [location, setLocations] = useState("");
  const [data, setData] = useState([]);
  const [finalData, setFinalData] = useState("");

  useEffect(() => {
    fetchData();
  }, [finalData]);

  const fetchData = () => {

    fetch(
      `https://jsearch.p.rapidapi.com/search?query=+${encodeURIComponent(position)},${encodeURIComponent(location)}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "708c147ca5msh9dc67ead913554fp11c54bjsn4a3e2e3b0adc",
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result)
        setData(Object.values(result));
      })
      .catch((err) => console.error(err));
  };

  const onPositionChangeHendler = (e) => {
    setPositions(e.target.value);
  };
  const onLocationChangeHendler = (e) => {
    setLocations(e.target.value);
  };

  const submitHendler = (e) => {
    e.preventDefault();
    setFinalData(position, location);
  };

  console.log(data);

  return (
    <>
      <div className="job-search-container">

        <h2 className="banner text-center">Enter Your Search</h2>
        <section className="search-form">
          <form onSubmit={submitHendler}>
            <input
              type="text"
              placeholder="Desired job"
              value={position}
              onChange={onPositionChangeHendler}
            />

            <input
              type="text"
              placeholder="Desired job location"
              value={location}
              onChange={onLocationChangeHendler}
            />

            <button type="submit">Search</button>
          </form>
        </section>
        </div>
        {data.map((data, i) => {
          return (
            <div>
              <h2 className="banner text-center">Your Search Result</h2>
              <WorkCards
                title={data.job_title}
                location={data.job_city}
                employment_type={data.job_employment_type}
                description={data.job_description}
                link={data.job_apply_link}
                key={i}
              />
            </div>
          
      );
      })}
    </>
  );

}

//exports the file to be used elsewhere
export default JobSearch;
