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
      <div className='tablet:w-2/3 w-full flex  items-center justify-between pl-8'>
        <div className="flex items-center">
        <img className='w-[30px]' src={logo} alt="" />
        <h1 className={`text-xl ml-2 hidden five:flex justify-center w-full font-bold ${isDark?'text-slate-100':'text-black'}`}>
          <p>Photo</p> <span className="text-[#3a73ed]">Corner</span>
        </h1>
        </div>
      <form onSubmit={handleSearch} className={`flex scale-75 five:w-[1/3] w-4/5 min-w-[200px] text-xl h-[45px] items-center p-2 rounded-lg
       border-2 border-blue-700 my-auto ${reverse?"flex-row-reverse":"flex-row"} bg-slate-200`}>
        <label htmlFor="sub"><BiSearch className="text-2xl text-black cursor-pointer" /></label>
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