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

  const fetchData = () => {
    fetch(
      `https://jsearch.p.rapidapi.com/search?query=+${encodeURIComponent(position)},${encodeURIComponent(location)}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "018a91d209msh4e37ad335431490p190890jsn258356e64003",
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
    fetchData();
    // setFinalData(position, location);
  
  };
  // console.log(data);
  return (
    <>
      
        <form onSubmit={submitHendler} className="form-inline">
          <div className="form-group d-flex justify-content-center">

            <div className="inline-block">
              <input
                type="text"
                placeholder="Desired job"
                value={position}
                onChange={onPositionChangeHendler}
              />
            </div>
            <div className="inline-block">
              <input
                type="text"
                placeholder="Desired job location"
                value={location}
                onChange={onLocationChangeHendler}
              />
            </div>
            <button type="submit" className="btn btn-success inline-block ">Search</button>
          </div>
        </form>     

      <WorkCards dataProp={data}/>      
    </>
  );
}
//exports the file to be used elsewhere
export default JobSearch;
