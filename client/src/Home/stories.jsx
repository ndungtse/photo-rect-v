import './Home.css';
import users from '../utility';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

function Stories() {
  const [ reverse, setReverse ] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.value.trim() !== '') {
      setReverse(true);
    }else{
      setReverse(false);
    }
  }
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
      <div className={`flex items-center p-2 mr-6 rounded-3xl h-9 my-auto ${reverse?"flex-row-reverse":"flex-row"} bg-slate-200`}>
        <BiSearch className="text-xl cursor-pointer" />
        <input className='outline-none bg-transparent px-2'
         onChange={handleSearch} type="text" placeholder='Search...' />
      </div>
    </div>
  );
}
export default Stories;