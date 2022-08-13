import React from 'react'

function News() {
  return (
    <div className='w-full flex justify-center'>
      <div className='max-w-[1440] w-full'>
        <div className='grid lg:grid-cols-4'>
          <div className='col-span-3 m-2 lg:m-4'>
            <h1 className='bg-primary font-bold text-white w-full p-4'>News:</h1>
            <div className='grid lg:grid-cols-3'>
              {Array(4).fill().map((_, i) =>
                <div key={i} className=' shadow-md text-gray-700 rounded-md p-4 m-3 bg-white'>
                  <div>
                    <img className='w-full h-40 rounded-md shadow-lg mb-4'
                      src='https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                      alt="" />
                    <a href='https://ndtv.com' rel='noreferrer' target={'_blank'}><strong>Colleges Open 2022</strong></a>
                  </div>
                  <p className='my-4'>NEws is dkjfd djfhdj fdfjdfd fjdfhdj jdfhjdf dkjfdsf dskjfjsdf sd</p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <img className='w-10'
                        src='https://play-lh.googleusercontent.com/oMM2LtXhM8WWgMIVUz-oXWkaywRAnOJzCZBsYOpyuVg6yuWhKekeA-oXbzbTQKHgGuAa'
                        alt="" />
                      <span className='ml-2'>ndtv</span>
                    </div>
                    <span>2022</span>
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

export default News