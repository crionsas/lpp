import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import Filter from '../components/Filter'
import Resultcard from '../components/Resultcard'
import { FaTimes } from 'react-icons/fa'
import { MdFilterListAlt } from 'react-icons/md'


function Exam() {

  const [filterOpen, setfilterOpen] = useState(true);

  const filterHandle = () => setfilterOpen(!filterOpen);

  return (
    <>
      <div className='w-full flex justify-center'>
        
        {/* Advance Filter */}
        <div className={!filterOpen ? 'absolute h-screen w-full z-20 bg-bgColor ' : 'hidden'}>

          <div className='flex justify-between items-center p-4 border-b-2 border-gray-400'>
            <strong>Filter</strong>
            <span onClick={filterHandle}><FaTimes /></span>
          </div>
          <div className='flex justify-between m-2'>
            <div className='w-1/4 mr-2'>
              <Link to='#'>
                <div className='py-2 px-4 bg-primary text-white border border-b-white'>
                  Course
                </div>
              </Link>
              <Link to='#'>
                <div className='py-2 px-4 bg-primary text-white border border-b-white'>
                  Exam
                </div>
              </Link>
            </div>
            <div className='w-3/4'>
              {/* <p className='font-semibold'>Course</p> */}
              <input className='p-1 my-1 border-2 w-full' type="text" placeholder='Search' />
              <div className='max-h-96 overflow-auto'>
                {Array(20).fill().map((_, i) => (
                  <div className='flex space-x-2 m-2'>
                    <input type="checkbox" />
                    <p className='truncate'>IIM Indian Exam of Managementhjjhhghg</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='mt-12'>
            <button
              class="w-full bg-primary py-4 text-white font-semibold">
              Apply
            </button>
          </div>
        </div>

        {/* Container */}
        <div className='max-w-[1440px] w-full m-4 lg:mx-6'>

          {/* Heading */}
          <div className='w-full text-center bg-white shadow-sm rounded-md p-10 mb-8 space-y-3'>
            <h1 className='font-bold text-gray-700 text-4xl'>Exams in India</h1>
            <p className='font-bold text-gray-600'>List of Exams 1000</p>
          </div>

          {/* grid with Columns */}
          <div className='grid lg:grid-cols-4 gap-6'>
            <div className='lg:col-span-1'>
              {/* filteres */}
              <div className=''>
                {/* Advance Filter For mobile */}
                <div className='lg:hidden flex justify-end items-center'>
                  <div onClick={filterHandle}
                    className='flex items-center hover:bg-secondary hover:text-white cursor-pointer font-medium border text-primary border-primary p-2 rounded-md'>
                    <MdFilterListAlt /> Advance Filter
                  </div>
                </div>
                <Filter title={'Course'} checkTitle={'B.Tech (Bachelor of Technology)'} />
                <Filter title={'State'} checkTitle={'West Bengal'} />
                <Filter title={'City'} checkTitle={'Kolkata'} />
                <Filter title={'Exam Type'} checkTitle={'Govt'} />
              </div>
            </div>
            <div className='lg:col-span-3 overflow-x-auto'>

              {/* Applied Filters div */}
              <div className='my-2 flex flex-col'>
                <div className='font-semibold'>Applied Filters :</div>
                <div className='w-full flex overflow-scroll'>
                  {Array(20).fill().map((_, i) =>
                    <div className='m-1'>
                      <small
                        class="px-4 py-2 rounded-full text-white bg-primary font-semibold flex items-center w-max cursor-pointer active:bg-gray-300 transition duration-300">
                        kolkata
                        <button class="bg-transparent hover focus:outline-none">
                          <FaTimes className='w-2 ml-3' />
                        </button>
                      </small>
                    </div>
                  )}
                </div>
              </div>

              {/* Seatch Results */}
              <div>
                {Array(10).fill().map((_, i) =>
                  <Resultcard />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Exam