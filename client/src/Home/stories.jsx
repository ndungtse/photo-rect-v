import './Home.css';
import users from '../utility';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function Stories({fade}) {
  const [ reverse, setReverse ] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`)
  }

  const handleSearchChange = (e) => {
    if (e.target.value.trim() !== '') {
      setQuery(e.target.value);
      setReverse(true);
    }else{
      setReverse(false);
    }
  }
  return (
    <div className='stories py-2 sticky flex items-center justify-center xtab:justify-start w-full top-0'>
      {/* <div className="flex">
        {users.map(user =>(
        <div key={user.id} className="storyview flex flex-col items-center ">
          <div className="story-cont flex flex-col items-center ">
            <div className='h-[54px] w-[50px] s-cont rounded-full'>
              <img  className='h-[50px] rounded-full' src={user.image} alt='' /></div>
            <div className='mt-[10px]'><span >{user.username}</span></div>
          </div>
        </div>
        ))}
      </div> */}
      <div className='w-2/3 flex  items-center justify-center'>
      {/* {fade===true ?null:( */}
      <form onSubmit={handleSearch} className={`flex scale-75 w-1/3 min-w-[300px] text-xl h-[45px] items-center p-2 mr-6 rounded-3xl
       border-2 border-blue-700 my-auto ${reverse?"flex-row-reverse":"flex-row"} bg-slate-200`}>
        <label htmlFor="sub"><BiSearch className="text-2xl cursor-pointer" /></label>
        <input className='outline-none w-full bg-transparent px-2'
         onChange={handleSearchChange} type="text" placeholder='Search...' />
         <input className='hidden' type="submit" value="" />
      </form>
      {/* )} */}
      </div>
    </div>
  );
}
export default Stories;