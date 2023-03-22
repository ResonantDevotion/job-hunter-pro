// importing various folders/libraries to use here
import React from "react";
import "../../../utils/style.css";

//function that creates a user card element for the App
function UserCard() {



    return (
        <section>
            <card>
                <input placeholder='Your name'></input>
                <input placeholder='Your location'></input>
                <input placeholder='Your experience'></input>
                <input placeholder='Your skills'></input>
                <button>Save your profile</button>
                <button>Clear your data</button>
            </card>
        </section>
    );
}

//exports the file to be used elsewhere
export default UserCard;
