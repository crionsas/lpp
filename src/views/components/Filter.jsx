import React from 'react'

function Filter({title,checkTitle}) {
  return (
    <div>
        {/* search card */}
        <div className='bg-white max-w-xs flex flex-col shadow-md my-2 rounded-md'>
            <div className='m-2'>
              <p className='font-semibold'>{title}</p>
              <input className='p-1 my-1 border-2 w-full' type="text" placeholder='Search' />
              <div className='max-h-56 overflow-auto'>
                <div>
                  {Array(20).fill().map((_, i) => (
                    <div className='flex space-x-2 m-2'>
                      <input type="checkbox" />
                      <span className='truncate'>{checkTitle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Filter