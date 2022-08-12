import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Individual() {
    return (
        <>
            <div className='w-full flex justify-center'>

                <div className='max-w-[1440px] w-full'>

                    {/* Header */}
                    <div>
                        <div
                            className='w-full h-[180px] lg:h-[250px] flex items-end'
                            style={{
                                background: 'linear-gradient(#0000007f, #0000007f),url(https://www.collegesearch.in/upload/institute/images/large/190326050543_735961-iim-a-020718.jpg.pagespeed.ce.S7_QIBI6J3.jpg)',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center center'
                            }}>
                            <div className='m-2 lg:mx-14 flex '>
                                <div className='w-14 h-14 lg:w-20 lg:h-20 rounded-md mr-4'>
                                    <img className='w-full h-full rounded-md' src="https://images.collegedunia.com/public/college_data/images/logos/col30730.png?h=40&w=40&mode=stretch" alt="" />
                                </div>
                                <div className='text-white'>
                                    <h1 className='font-bold md:text-2xl lg:text-3xl'>Indian Institute if Management (2008) </h1>
                                    <ul className='flex text-xs space-x-6'>
                                        <li>LOcation</li>
                                        <li>AICTE</li>
                                        <li>ESTD</li>
                                        <li>University</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Nav Items */}
                        <div>
                            <div className='bg-white'>
                                <ul className='flex mx-2 lg:mx-16 text-textgry font-semibold'>
                                    <Link to='/individual/info'><li className='p-3 lg:px-6 lg:py-4'>Info</li></Link>
                                    <Link to='/individual/courses'><li className='p-3 lg:px-6 lg:py-4'>Course</li></Link>
                                    <Link to='/individual/admission'><li className='p-3 lg:px-6 lg:py-4'>Admission</li></Link>
                                    <Link to='/individual/placements'><li className='p-3 lg:px-6 lg:py-4'>Placement</li></Link>
                                    <Link to='/individual/news'><li className='p-3 lg:px-6 lg:py-4'>News</li></Link>
                                </ul>
                            </div>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Individual

