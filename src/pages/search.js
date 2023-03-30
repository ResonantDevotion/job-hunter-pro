// importing various folders/libraries to use here
import React from "react";
import JobSearch from "../components/jobSearch/jobSearch";
import "../pages/pages.css";

// function to create search webpage and pull in the JobSearch component
function Search() {
  return (
    <div className="search">
      <JobSearch />
    </div>
  );
}

export default Search;
