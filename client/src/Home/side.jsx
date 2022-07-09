import React from 'react'

const Side = () => {
  return (
    <div className='min-w-[200px] sticky top-0 px-3 xtab:flex flex-col hidden w-1/2'>
      <div className="flex mt-6 w-full items-center justify-between">
        <div className="flex items-center">
          <div className="flex overflow-hidden w-[60px] h-[60px] rounded-full">
            <img className="min-w-full min-h-full object-cover"
             src="https://resources.premierleague.com/premierleague/photos/players/250x250/p219847.png" alt="" />
          </div>
          <div className="flex flex-col ml-3">
            <p className="font-semibold">Jessica Rire Ikutann</p>
            <p className="opacity-80 font-light">@riraikutann</p>
          </div>
        </div>
        <p className="text-blue-500">Switch</p>
      </div>
      <div className="flex flex-col w-full mt-6">
        <div className="flex items-center justify-between w-full">
          <p className="text-md font-semibold text-slate-600">Suggested For You</p>
          <p className="font-semibold text-sm cursor-pointer">See All</p>
        </div>
        <Suggested />
        <Suggested />
        <Suggested />
      </div>
      <div className="flex mt-4 w-full">
        <p className='text-slate-500'>&copy; Photo Corner 2022</p>
      </div>
    </div>
  )
}

export default Side


const Suggested = ()=>{

  return(
    <div className="w-full mt-3 text-sm flex justify-between items-center">
      <div className="flex items-center">
        <div className="flex overflow-hidden w-[40px] h-[40px] rounded-full">
          <img className="min-w-full min-h-full object-cover"
           src="https://resources.premierleague.com/premierleague/photos/players/250x250/p219847.png" alt="" />
        </div>
        <div className="flex flex-col ml-3">
          <p className="font-semibold">Jessica Rire Ikutann</p>
          <p className="opacity-80 font-light">@riraikutann</p>
        </div>  
      </div>
      <p className="text-blue-500">Follow</p>
    </div>
  )
}