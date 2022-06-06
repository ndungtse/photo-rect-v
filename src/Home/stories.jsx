import './Home.css';
import users from '../utility';
import React from 'react';

function Stories() {
  return (
    <div className='stories'>
      {users.map(user =>(
      <a key={user.id} href="storyPreview.js" className="storyview flex flex-col items-center ">
        <div className="story-cont flex flex-col items-center ">
          <div className='h-[54px] w-[50px] s-cont rounded-full'>
            <img  className='h-[50px] rounded-full' src={user.image} alt='' /></div>
          <div className='mt-[10px]'><span >{user.username}</span></div>
        </div>
      </a>
      ))}
    </div>
  );
}
export default Stories;
/* 
const Storysources=['https://resources.premierleague.com/premierleague/photos/players/250x250/p219847.png','require("./Images/Bitmap-2.png")','require("./Images/other/Bitmap-2.png")'
            ,'require("./Images/Bitmap-1.png")','require("./Images/other/Bitmap-1.png")','require("./Images/Bitmap-3.png")'
            ,'require("./Images/Bitmap.png")','require("./Images/other/Group 18 Copy.png")', 'require("./Images/other/Bitmap.png")'
          ] */