import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Frontpage from "./pages/frontpage";
import Profile from "./pages/profile";
import Search from "./pages/search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/home" element={<Frontpage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
        </Routes>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
