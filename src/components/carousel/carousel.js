// importing various folders/libraries to use here
import React from "react";
import "../../utils/style.css";
import WorkCards from "../cards/workCards";

//function that creates a carousel element for the App
function Carousel() {
    return (
        <section>
            <WorkCards />
        </section>
    );
}

//exports the file to be used elsewhere
export default Carousel;
