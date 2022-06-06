import React from 'react'

const Sleft = () => {
  return (
    <div className='s-left flex flex-col w-[50%]'>
      <div className='pl-1'>
        <li>About: </li>
          <div className='p-cont pt-2 flex items-center px-4'>
            <p className=''>Version:</p>
            <p className='flex items-center px-1'>1.0.0
            </p>
          </div>
          <div className='p-cont pt-2 flex items-center px-4'>
            <p className=''>Credits:</p>
            <p className='flex items-center ml-5  px-4'>Charles (Founder + Frontend), Precieux (Backend)</p>
          </div>
      </div>
    </div>
  )
}

export default Sleft