import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./views/components/Navbar";
import College from "./views/college/College";
import Home from "./views/home/Home";
import Exams from "./views/exam/Exams";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/exams' element={<Exams />} />
        <Route path='/college' element={<College />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
