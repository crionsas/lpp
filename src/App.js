import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./views/components/Navbar";
import College from "./views/college/College";
import Home from "./views/home/Home";
import Exam from "./views/exam/Exam";
import Institute from "./views/institute/Institute";
import Course from "./views/course/Course";
import Individual from "./views/components/Individual";
import Info from "./views/components/individual_routes/Info"
import Courses from "./views/components/individual_routes/Courses"
import Admission from "./views/components/individual_routes/Admission"
import Placements from "./views/components/individual_routes/Placements"
import News from "./views/components/individual_routes/News"
import Signup from "./views/components/Signup";
import Signin from "./views/components/Signin";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/individual' element={<Individual />} >
          <Route path='info' element={<Info />} />
          <Route path='courses' element={<Courses />} />
          <Route path='admission' element={<Admission />} />
          <Route path='placements' element={<Placements />} />
          <Route path='news' element={<News />} />
        </Route>

        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/course' element={<Course />} />
        <Route path='/institute' element={<Institute />} />
        <Route path='/exam' element={<Exam />} />
        <Route path='/college' element={<College />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
