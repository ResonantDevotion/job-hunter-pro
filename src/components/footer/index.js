// importing various folders/libraries to use here
import React from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"

//function that creates a footer element for the App
function Footer() {
    return (
        <footer className="section">
            <h4>This was created by Sasha Zhyliuk, Tia Yorke, Niwantha Meepage, and Rebecca Wood <FontAwesomeIcon icon={faHeart} /></h4>
        </footer>
    );
};
//exports the file to be used elsewhere
export default Footer;
