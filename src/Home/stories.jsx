import './Home.css';
import users from '../utility';
import React from 'react';
import { BiSearch } from 'react-icons/bi';

function Stories() {
  return (
    <div className='stories sticky top-0'>
      <div className="flex">
        {users.map(user =>(
        <div key={user.id} className="storyview flex flex-col items-center ">
          <div className="story-cont flex flex-col items-center ">
            <div className='h-[54px] w-[50px] s-cont rounded-full'>
              <img  className='h-[50px] rounded-full' src={user.image} alt='' /></div>
            <div className='mt-[10px]'><span >{user.username}</span></div>
          </div>
        </div>
        ))}
      </div>
      <div className="flex items-center p-2 mr-6 rounded-3xl h-9 my-auto bg-slate-200">
        <BiSearch className="text-xl cursor-pointer" />
        <input className='outline-none bg-transparent focus:ring-1 focus:shadow-md px-2'
          type="text" placeholder='Search...' />
      </div>
    </div>
  );
}
export default Stories;
/* 
const Storysources=['https://resources.premierleague.com/premierleague/photos/players/250x250/p219847.png','require("./Images/Bitmap-2.png")','require("./Images/other/Bitmap-2.png")'
            ,'require("./Images/Bitmap-1.png")','require("./Images/other/Bitmap-1.png")','require("./Images/Bitmap-3.png")'
            ,'require("./Images/Bitmap.png")','require("./Images/other/Group 18 Copy.png")', 'require("./Images/other/Bitmap.png")'
          ] */