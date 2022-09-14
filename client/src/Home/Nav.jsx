import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Home.css';
import '../App.css'
import 'boxicons';
import { BiMessageRoundedDots,BiUser, BiHome, BiGroup, BiCog, BiDoorOpen, BiLogOut, BiMenu, } from 'react-icons/bi'
import { deleteAllCookies } from '../contexts/RequireAuth';
import { useAuth } from '../contexts/AuthContext';
import { useApp } from '../contexts/AppContext';

function Nav({active}) {
  // const {mobile, setMobile, mobileHandler} = useUsers()
  const [mobile, setMobile] = useState(false);
  const { isDark } = useApp()
  const navigate = useNavigate();
  const { setUser } = useAuth()

  const handleLogout = () => {
    setUser(null)
    deleteAllCookies();
    navigate('/login', { replace: true });
  }

  return (
    <>
     <BiMenu onClick={()=> setMobile(!mobile)} 
     className='absolute tab:hidden z-30 text-xl top-1 left-1 cursor-pointer' />
    <div className={` left-[-500px] z-[19] absolute tab:static tab:left-0 ${mobile && 'leftzero'}
      duration-500 sidebar h-screen py-8 shadow-inner flex flex-col justify-between ${isDark?'bg-[#08021d]':'bg-slate-100/50 border-r-2'}`}>
      <h1 className={`text-xl flex justify-center w-full font-bold ${isDark?'text-slate-100':'text-black'}`}>
        <p>Photo</p> <span className="text-[#3a73ed]">Corner</span>
      </h1>
      <div className={`flex flex-col w-full items-center px-0 ${isDark?'text-slate-100':'text-black'}`}>
        <Link onClick={()=> setMobile(false)} to='/'
         className={`${active==='home' && 'text-blue-500 border-l-[3px] border-blue-700'}
         flex cursor-pointer mt-3 mx-auto items-center w-full p-2 hover:text-blue-500`}>
          <BiHome className='text-xl' />
          <p className="ml-3">Home</p>
        </Link>
        <Link onClick={()=> setMobile(false)} to='/messages' 
        className={`${active==='messages' && 'text-blue-500 border-l-[3px] border-blue-700'}
        flex cursor-pointer mt-3 mx-auto items-center w-full p-2 hover:text-blue-500`}>
          <BiMessageRoundedDots className='text-xl' />
          <p className="ml-3">Messages</p>
        </Link>
        <Link onClick={()=> setMobile(false)} to='/profile' 
        className={`${active==='profile' && 'text-blue-500 border-l-[3px] border-blue-700'}
        flex cursor-pointer mt-3 mx-auto items-center w-full p-2 hover:text-blue-500`}>
          <BiUser className='text-xl' />
          <p className="ml-3">Profile</p>
        </Link>
          <Link onClick={()=> setMobile(false)} to='' 
          className={`${active==='groups' && 'text-blue-500 border-l-[3px] border-blue-700'}
          flex cursor-pointer mt-3 mx-auto items-center w-full p-2 hover:text-blue-500`}>
            <BiGroup className='text-xl' />
            <p className="ml-3">Groups</p>
          </Link>
      </div>
      <div className={`flex flex-col w-full items-center px-3 ${isDark?'text-slate-100':'text-black'}`}>
        <Link onClick={()=> setMobile(false)} to={`/settings`} 
        className={`${active==='settings' && 'text-blue-500 border-l-[3px] border-blue-700'}
          flex cursor-pointer mt-3 mx-auto items-center w-full p-2 hover:text-blue-500`}>
          <BiCog className='text-xl' />
          <p className="ml-3">Settings</p>
        </Link>
        <div onClick={handleLogout} className={`
          flex cursor-pointer mt-3 mx-auto items-center w-full p-2 hover:text-blue-500`}>
          <BiLogOut className='text-xl' />
          <p className="ml-3">Logout</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Nav;
