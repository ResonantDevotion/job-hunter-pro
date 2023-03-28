// importing various folders/libraries to use here
import React from "react";
import { FaGithub } from "react-icons/fa";
import "./footer.css";

//function that creates a footer element for the App
function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav justify-content-center">
          <li className="nav-item">
            <a
              rel="noreferrer"
              target="_blank"
              className="footerLinks"
              href="https://github.com/ResonantDevotion"
            >
              Rebecca <FaGithub />
            </a>
          </li>
          <li className="nav-item">
            <a
              rel="noreferrer"
              target="_blank"
              className="footerLinks"
              href="https://github.com/tyrkgithub"
            >
              Tia <FaGithub />
            </a>
          </li>
          <li className="nav-item">
            <a
              rel="noreferrer"
              target="_blank"
              className="footerLinks"
              href="https://github.com/SashK2609"
            >
              Oleksandra <FaGithub />
            </a>
          </li>
          <li className="nav-item">
            <a
              rel="noreferrer"
              target="_blank"
              className="footerLinks"
              href="https://github.com/niwantha33"
            >
              Niwantha <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
//exports the file to be used elsewhere
export default Footer;
