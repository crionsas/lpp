import React from 'react'

function Info() {
  return (
    <div className='w-full flex justify-center'>
      <div className='max-w-[1440] w-full'>
        <div className='grid lg:grid-cols-4'>

          {/* grid 1 */}
          <div className='col-span-3 m-2 lg:m-4 space-y-4'>
            <div className='w-full shadow-md'>
              <h1 className='bg-primary text-white p-4 font-bold'>About India Institute of Management</h1>
              <div className='text-textgry bg-white p-4 space-y-3'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque sollicitudin aliquet nulla, a rhoncus tortor v
                  Cras porttitor vestibulum ex, vitae viverra erat commodo eget.
                  Cras finibus mi eget lectus posuere lobortis. Nunc sed auctor
                  metus. Vivamus velit est, consectetur vulputate leo et, viverra
                  tristique nisi. Pellentesque sem leo, dictum non tempus in,
                  malesuada a augue.
                  Aenean quis ex dignissim, molestie purus sit amet, rhoncus lacus.
                  Integer iaculis nunc mauris, aliquet rhoncus nisi tempus maximus.
                  In a libero nibh. Nunc nec posuere enim. Suspendisse id augue ac
                  nulla commodo eleifend. Donec venenatis maximus aliquet.
                  Donec scelerisque, nibh eget iaculis dictum, quam enim facilisis
                  orci, sit amet tempor risus elit ullamcorper mauris.
                  Aenean ex quam, tempor sit amet luctus ut, dictum congue nibh.
                  Praesent sodales tellus vitae purus viverra consequat.
                  Morbi facilisis tortor ac aliquet feugiat. Donec ullamcorper
                  ante eget massa auctor, sed vulputate orci cursus.
                  Donec ac porttitor nisl. Phasellus sit amet odio a nibh
                </p>
              </div>
            </div>
            <div className='w-full shadow-md'>
              <h1 className='bg-primary text-white p-4 font-bold'>Contact Details</h1>
              <div className='bg-white text-textgry p-4 space-y-3'>
                <p><strong>url :</strong> https://rrit.com</p>
                <p><strong>email :</strong> rrit@rrinstitute.com</p>
                <p><strong>phone :</strong> 1234567890</p>
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

export default Info