import React, { useState } from 'react'
import { MdEngineering, MdMore } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Hero from './Hero';
import TopcolegeSlide from './TopcolegeSlide'




function Home() {
    const [isOpen, setisOpen] = useState(false);

    const openClick = () => setisOpen(!isOpen)

    return (
        <div>
            {/* Hero Section */}
            <Hero />

            {/* Choose a course with icons */}
            <div className='md:m-12 m-4 p-4 space-y-2 rounded-md bg-white'>
                <strong className='text-2xl'>Choose a Course </strong>
                <p>Search your college easily by selecting your course</p>
                <div className="grid grid-cols-3 md:grid-cols-6 md:mx-14 text-white text-center">
                    {!isOpen ?
                        Array(5).fill().map((_, i) => (
                            <div className='m-2'>
                                <Link to='/'>
                                    <div
                                        className="hover:shadow-xl hover:bg-secondary rounded-md  p-4 bg-gray-400  flex flex-col items-center">
                                        <MdEngineering size={36} />
                                        <strong>Engeener</strong>
                                        <small>2000 colleges</small>
                                    </div>
                                </Link>
                            </div>
                        ))
                        :
                        Array(8).fill().map((_, i) => (
                            <div className='m-3'>
                                <Link to='/'>
                                    <div
                                        className="hover:shadow-xl hover:bg-secondary rounded-md  p-4 bg-gray-500  flex flex-col items-center">
                                        <MdEngineering size={36} />
                                        <strong>Engeener</strong>
                                        <small>2000 colleges</small>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                    <div className='m-3'>
                        <div onClick={openClick}
                            className="hover:shadow-xl cursor-pointer rounded-md p-4 bg-primary hover:bg-secondary flex flex-col items-center">
                            <MdMore size={30} />
                            <strong className=''>View All <br />Courses</strong>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Colleges Card */}
            <TopcolegeSlide />

        </div>
    )
}

export default Home