import React from 'react'
import Slider from 'react-slick';




function TopcolegeSlide() {


    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        rows: 2,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className=''>
            <div className='lg:m-6 m-4 p-4 space-y-2 rounded-md bg-white flex flex-col'>
                <strong className='text-2xl'>Top Colleges</strong>
                <p>Search your college easily by selecting</p>

                <div>
                    <Slider  {...settings} className='myclass'>
                        {Array(10).fill().map((_, i) => (
                            <div className='px-2'>
                            <div className='max-w-sm overflow-hidden shadow-md rounded-md my-4'>
                                <img
                                    className='shadow-lg rounded-md'
                                    src="https://www.collegesearch.in/upload/institute/images/large/190326050543_735961-iim-a-020718.jpg.pagespeed.ce.S7_QIBI6J3.jpg"
                                    alt="" />
                                <div className='p-2 space-y-1'>
                                    <div className='flex justify-between space-x-2'>
                                        <strong className='font-medium'>Indian Institute of Management</strong>
                                        <div>
                                            {/* {Array(5).fill().map((_, i) => (
                                                <small>⭐</small>
                                            ))} */}
                                            <small>Private</small>
                                        </div>
                                    </div>
                                    <small>Ahamdabad</small>
                                </div>
                            </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </div>
    )
}

export default TopcolegeSlide