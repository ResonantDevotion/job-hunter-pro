// importing various folders/libraries to use here
import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

//function that creates a navigation bar element for the App
function Navbar() {
  return (

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand text-primary custom-text" href="#">JobHunterPro</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-link">
              <NavLink
                // passing to homepage
                to="/home"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink
                // link to profile
                to="/profile"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-link">
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
        <div>

        </div>
        <h5 className="text-success" >Helping you check your skills</h5>
      </div>
    </nav>
  );
}

//exports the file to be used elsewhere
export default Navbar;
