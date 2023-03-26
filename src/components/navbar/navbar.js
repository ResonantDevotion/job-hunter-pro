// importing various folders/libraries to use here
import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

//function that creates a navigation bar element for the App
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav justify-content-center">
          <li className="nav-item">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/profile"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Search
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

//exports the file to be used elsewhere
export default Navbar;
