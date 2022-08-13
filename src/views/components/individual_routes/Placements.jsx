import React from 'react'

function Placements() {
  return (
    <div className='w-full flex justify-center'>
      <div className='max-w-[1440] w-full'>
        <div className='grid lg:grid-cols-4'>
          <div className='col-span-3 m-2 lg:m-4'>
            <div>
              <h1 className='bg-primary font-bold text-white w-full p-4'>IIM Placements year wise:</h1>
              <div className='bg-white my-4'>
                <table class="table-fixed w-full">
                  <thead className='text-left bg-secondary text-white'>
                    <tr>
                      <th>Placements Year</th>
                      <th>No. Student participate</th>
                      <th>No. of Offers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Placements 2020-2022</td>
                      <td>513</td>
                      <td>662</td>
                    </tr>
                    <tr>
                      <td>Placements 2019-2021</td>
                      <td>413</td>
                      <td>462</td>
                    </tr>
                    <tr>
                      <td>Placements 2019-2021</td>
                      <td>413</td>
                      <td>462</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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

export default Placements