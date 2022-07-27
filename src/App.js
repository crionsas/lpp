import React, { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import {FaTimes} from 'react-icons/fa'


function App() {

  const [nav, setNav] = useState(false);
  const hamClick = () => setNav(!nav)

  return (
    <div className="App">

      {/* Nav */}
      <div name='nav' className="relative z-50 flex justify-between h-[70px] bg-black text-white">
        <img
          alt=""
          className="w-40 m-3"
          src="https://www.collegesearch.in/images/homepage/xcs-logo-black.jpg.pagespeed.ic.z5kSj6qbSY.webp" />
        <div className="hidden md:flex items-center">
          <ul className="flex">
            <li className="mx-4">Home</li>
            <li className="mx-4">Courses</li>
            <li className="mx-4">Exam</li>
            <li className="mx-4">Review</li>
          </ul>
        </div>

        {/* hamburger */}
        <div onClick={hamClick} className="flex z-10 items-center mx-3 md:hidden">
          {!nav ? <GiHamburgerMenu /> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
      <div className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-black flex justify-start items-start"}>
          <ul className="flex flex-col m-7">
            <li className="mx-4">Home</li>
            <li className="mx-4">Courses</li>
            <li className="mx-4">Exam</li>
            <li className="mx-4">Review</li>
          </ul>
        </div>
      </div>

      

      {/* Body */}
      <div>
        {/* hero section */}
        <div>
          <div className="relative z">
            <img
              className="h-64 w-full md:h-auto"
              src="https://www.collegesearch.in/upload/institute/images/large/190326050543_735961-iim-a-020718.jpg.pagespeed.ce.S7_QIBI6J3.jpg"
              alt="" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex justify-center items-center">
                <input className="w-72 h-10 indent-4 rounded-md md:w-[600px]" placeholder="Search" />
              </div>
            </div>
          </div>
        </div>

        {/* icons */}
        <div>
          <div className="grid grid-cols-3 md:grid-cols-6 md:mx-16 my-12">
            <div className="p-16 shadow-md rounded-md m-4 flex justify-center"><p>College</p></div>
            <div className="p-16 shadow-md rounded-md m-4 flex justify-center"><p>Exams</p></div>
            <div className="p-16 shadow-md rounded-md m-4 flex justify-center"><p>Reviews</p></div>
            <div className="p-16 shadow-md rounded-md m-4 flex justify-center"><p>Courses</p></div>
            <div className="p-16 shadow-md rounded-md m-4 flex justify-center"><p>Etc</p></div>
            <div className="p-16 shadow-md rounded-md m-4 flex justify-center"><p>Etcs</p></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
