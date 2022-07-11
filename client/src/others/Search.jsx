import React from 'react'
import { FaFacebookMessenger } from 'react-icons/fa';
import Nav from '../Home/Nav';
import Stories from '../Home/stories';

const Search = () => {
  return (
    <div className='main-container w-full fixed h-screen overflow-hidden'>
        <Nav active={`home`} />
        <div className="main w-full h-screen">
            <Stories />
            <div className='flex flex-col w-full p-4 items-center'>
                <div className='max-w-[800px] w-full p-2 border-[1px] border-slate-300'>
                    <h2 className='text-center font-semibold text-xl'>Results For "Erica"</h2>
                    <div>
                        {searchResults({fullname: 'Erica', username: 'ericas'})}
                        {searchResults({fullname: 'Erica', username: 'ericas'})}
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Search

const searchResults = ({fullname, username}) => {
    return (
        <div className="w-full mt-3 text-sm flex justify-between items-center">
      <div className="flex items-center">
        <div className="flex overflow-hidden w-[40px] h-[40px] rounded-full">
          <img className="min-w-full min-h-full object-cover"
           src="https://resources.premierleague.com/premierleague/photos/players/250x250/p219847.png" alt="" />
        </div>
        <div className="flex flex-col ml-3">
          <p className="font-semibold">{fullname}</p>
          <p className="opacity-80 font-light">@{username}</p>
        </div>  
      </div>
      <div className='flex items-center'>
        <div className='flex cursor-pointer text-blue-500 items-center'>
            <FaFacebookMessenger />
            <p className='ml-2'>Message</p>
        </div>
        <p className="text-blue-500 cursor-pointer ml-4">Follow</p>
      </div>
    </div>
    )
}