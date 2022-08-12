import React from 'react'
import { GrDocumentDownload } from 'react-icons/gr'

function Courses() {
  return (
    <div className='w-full flex justify-center'>
      <div className='max-w-[1440] w-full'>
        <div className='grid lg:grid-cols-4'>
          {/* grid 1 */}
          <div className='col-span-3 m-4 space-y-4'>
            <div className='bg-white'>
              <table class="table-auto w-full">
                <thead className='text-left bg-primary text-white'>
                  <tr>
                    <th>Courses</th>
                    <th>Duration</th>
                    <th>Total fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Post Graduate Programme in Management (PGPM)</td>
                    <td>2 Years</td>
                    <td>₹23,00,000</td>
                  </tr>
                  <tr>
                    <td>Post Graduate Programme in Management (PGPM)</td>
                    <td>2 Years</td>
                    <td>₹23,00,000</td>
                  </tr>
                  <tr>
                    <td>Post Graduate Programme in Management (PGPM)</td>
                    <td>2 Years</td>
                    <td>₹23,00,000</td>
                  </tr>
                  <tr>
                    <td>Post Graduate Programme in Management (PGPM)</td>
                    <td>2 Years</td>
                    <td>₹23,00,000</td>
                  </tr>
                </tbody>
              </table>
            </div>


            <div className='bg-white'>
              <div className='border-b m-4'>
                <input className='w-full p-4'
                  type="text" placeholder='Search Courses' />
              </div>

              {/* Courses Cards */}
              {Array(2).fill().map((_,i) => 
              <div className='p-2 my-12 lg:mx-6 lg:p-6 rounded-md shadow-xl'>
                <div className='flex justify-between'>
                  <strong>Post Graduate Programme in Management (PGPM)</strong>
                  <div className='flex flex-col text-end items-end'>
                    <GrDocumentDownload size={24} />
                    <small>Download Brocher</small>
                  </div>
                </div>
                <div className='font-semibold flex justify-between my-4 p-2 text-textgry'>
                  <small>DURATION: 2 yr</small>
                  <small>TOTALFEE: ₹23,00,000</small>
                  <small>MODE: Regular</small>
                </div>
                <div className='mt-12'>
                  <table class="table-auto w-full">
                    <thead className='text-left bg-secondary text-white'>
                      <tr>
                        <th>Fees</th>
                        <th>1st Year</th>
                        <th>2nd Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Tuition Fee</td>
                        <td>₹23,00,000</td>
                        <td>₹23,00,000</td>
                      </tr>
                      <tr>
                        <td>Registration Fee</td>
                        <td>₹23,00,000</td>
                        <td>₹23,00,000</td>
                      </tr>
                      <tr>
                        <td>Some Fee</td>
                        <td>₹23,00,000</td>
                        <td>₹23,00,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
              )}
            </div>
          </div>

          {/* grid 2 */}
          <div className='hidden lg:block col-span-1 m-4'>
            <div className='shadow-md p-4 bg-white '>
              ads or anything
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses