import React from "react";
import "./style.css";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import UserCard from "../../components/cards/userCard";
import Carousel from "../../components/carousel";
import JobSearch from "../../components/jobSearch";
import Footer from "../../components/footer";

// function that creates a body for the homepage including information about what the app is about
function Frontpage() {
    return (
        <section className="body">
            <Navbar />
            <Hero />
            <div className="personalProfile">
                <UserCard />
            </div>
            <JobSearch />
            <div className="searchResults">
                <Carousel />
            </div>
            <Footer />
        </section>
    );
}

export default Frontpage;