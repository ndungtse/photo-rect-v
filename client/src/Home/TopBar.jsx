import './Home.css';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import logo from "./Images/logo.png"

function TopBar() {
  const [ reverse, setReverse ] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { isDark } = useApp();

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
    <div className='stories py-2 sticky flex items-center justify-between w-full top-0'>
      <div className='w-2/3 flex  items-center pl-5'>
        <div className="flex items-center">
        <img className='w-[40px]' src={logo} alt="" />
        <h1 className={`text-xl ml-2 flex justify-center w-full font-bold ${isDark?'text-slate-100':'text-black'}`}>
          <p>Photo</p> <span className="text-[#3a73ed]">Corner</span>
        </h1>
        </div>
      <form onSubmit={handleSearch} className={`flex scale-75 w-1/3 min-w-[300px] text-xl h-[45px] items-center p-2 mr-6 rounded-lg
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
export default TopBar;