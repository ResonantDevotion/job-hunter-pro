import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Frontpage from "./pages/frontpage";
import Profile from "./pages/profile";
import Search from "./pages/search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Search />        
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/home" element={<Frontpage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
