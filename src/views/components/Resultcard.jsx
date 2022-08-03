import React from 'react'
import {Link} from 'react-router-dom'



function Resultcard() {
    return (
        <>
        <Link to='/'>
            <div class="w-full lg:flex bg-white rounded-md shadow-sm hover:shadow-lg mt-6">
                <div class="h-36 lg:h-auto lg:w-48 flex-none bg-cover rounded-t-md lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    style={{ backgroundImage: 'url(https://www.collegesearch.in/upload/institute/images/large/190326050543_735961-iim-a-020718.jpg.pagespeed.ce.S7_QIBI6J3.jpg)' }}
                    title="College">
                </div>
                <div class="p-4 flex">
                    <img className='w-10 h-10 mr-3' src="https://images.collegedunia.com/public/college_data/images/logos/col30730.png?h=40&w=40&mode=stretch" alt="" />
                    <div class="mb-8 leading-tight">
                        <p class="text-gray-800 font-bold">Indian Institute of Management</p>
                        <small class="text-gray-700 ">Kolkta, West </small>
                        <div className='text-gray-600 space-x-4 mt-4 font-semibold'>
                            <small>Type: Govt</small>
                            <small>Approved: AICTE,UGC</small>

                        </div>
                    </div>
                </div>
            </div>
            </Link>
        </>
    )
}

export default Resultcard