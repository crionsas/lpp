import React from 'react'
import Slider from 'react-slick';
import { MdSearch } from 'react-icons/md'

function Hero() {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };


    return (
        <div className="relative">
            <Slider {...settings}>
                <div className=''>
                    <img
                        className="h-[280px] lg:h-[450px] w-full"
                        src="https://images.collegedunia.com/public/asset/img/homepage/banner/Indian1642232499.webp?mode=stretch"
                        alt="" />
                </div>
                <div className=''>
                    <img
                        className="h-[280px] lg:h-[450px] w-full"
                        src="https://images.collegedunia.com/public/asset/img/homepage/banner/Indian1642232971.webp?mode=stretch"
                        alt="" />
                </div>
                <div className=''>
                    <img
                        className="h-[280px] lg:h-[450px] w-full"
                        src="https://images.collegedunia.com/public/asset/img/homepage/banner/Shri1642233244.webp?mode=stretch"
                        alt="" />
                </div>

            </Slider>
            {/* Search Bar */}
            <div className="w-full flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className='font-bold text-white text-center lg:text-3xl p-4'>
                    <h1 style={{ WebkitTextStroke: '0.7px black' }}>Search Top Colleges, Institue, Exams and more</h1>
                </div>
                <form>
                    <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Your Email</label>
                    <div className="relative w-[380px] md:w-[600px] ">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <MdSearch className='text-gray-400' size={24} />
                        </div>
                        <input type="search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg outline-none" placeholder="Search" />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-secondary font-medium rounded-lg text-sm px-4 py-2">Search</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero