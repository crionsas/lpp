import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'



function Navbar() {

    const [nav, setNav] = useState(false);
    const hamClick = () => setNav(!nav)

    return (
        <div name='nav' className="relative z-50 flex items-center justify-between h-[60px] bg-white shadow-lg">

            {/* Logo */}
            <div className='flex items-center m-3 text-2xl space-x-1 '>
                <div className='font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-green-400 to-pink-300'>
                    <Link to='/'>
                        <span className='hidden md:flex'>LearnPlusPlus</span>
                        <span className='md:hidden'>LPP</span>
                    </Link>
                </div>
            </div>

            <div className="flex items-center">
                {/* Menus */}
                <ul className="hidden lg:flex font-medium">
                    <Link to='/'>
                        <li className="mx-4 hover:text-purple-300">Home</li>
                    </Link>
                    <Link to='/college'>
                        <li className="mx-4 hover:text-purple-300">College</li>
                    </Link>
                    <Link to='/institute'>
                        <li className="mx-4 hover:text-purple-300">Institute</li>
                    </Link>
                    <Link to='/course'>
                        <li className="mx-4 hover:text-purple-300">Courses</li>
                    </Link>
                    <Link to='/exam'>
                        <li className="mx-4 hover:text-purple-300">Exam</li>
                    </Link>
                </ul>
                <div className='font-medium mx-4 border text-primary border-primary p-2 rounded-md'>
                    <Link to='/'>
                        <span>
                            SignUp/SignIn
                        </span>
                    </Link>
                </div>



                {/* hamburger */}
                <div onClick={hamClick} className="flex z-10 items-center mx-3 lg:hidden">
                    {!nav ? <GiHamburgerMenu /> : <FaTimes />}
                </div>

                {/* Mobile Menu */}
                <div className={!nav ? "hidden" : "absolute top-0 right-0 w-80 h-screen bg-gray-400"}>
                    <ul className="flex flex-col justify-start items-start mt-8 font-bold">
                        <Link to='/'>
                            <li className="mx-4 hover:text-purple-200">Home</li>
                        </Link>
                        <Link to='/college'>
                            <li className="mx-4 hover:text-purple-200">College</li>
                        </Link>
                        <Link to='/institute'>
                            <li className="mx-4 hover:text-purple-200">Institute</li>
                        </Link>
                        <Link to='/course'>
                            <li className="mx-4 hover:text-purple-300">Courses</li>
                        </Link>
                        <Link to='/exam'>
                            <li className="mx-4 hover:text-purple-200">Exam</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar