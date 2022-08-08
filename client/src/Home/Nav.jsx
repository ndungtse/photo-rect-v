import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import './side.css';
import '../App.css'
import 'boxicons';
import { BiMessageRoundedDots,BiUser, BiHome, BiGroup, BiCog, BiDoorOpen, BiLogOut, BiMenu, } from 'react-icons/bi'
import { useUsers } from '../Messages/contexts/userContext';

function Nav({active}) {
  const {mobile, setMobile} = useUsers()

  return (
    <>
     <BiMenu onClick={() => setMobile(!mobile)} 
     className='absolute tab:hidden z-30 text-xl top-1 left-1 cursor-pointer' />
    <div className={` left-[-500px] z-20 absolute tab:static tab:left-0 ${mobile && 'leftzero'}
      duration-500 sidebar h-screen py-8 bg-slate-300  flex flex-col justify-between`}>
      <h1 className="text-2xl flex justify-center w-full font-bold text-black">
        <p>Photo</p> <span className="text-[#3a73ed]">Corner</span>
      </h1>
      <div className="flex flex-col w-full items-center px-3 text-black">
        <Link to='/'
         className={`${active==='home' && 'bg-blue-500'}
         flex cursor-pointer mt-6 mx-auto items-center w-full rounded-lg p-2 hover:bg-blue-500`}>
          <BiHome className='text-xl' />
          <p className="ml-6">Home</p>
        </Link>
        <Link to='/messages' className={`${active==='messages' && 'bg-blue-500'}
        flex cursor-pointer mt-6 mx-auto items-center w-full rounded-lg p-2 hover:bg-blue-500`}>
          <BiMessageRoundedDots className='text-xl' />
          <p className="ml-6">Messages</p>
        </Link>
        <Link to='/profile' className={`${active==='profile' && 'bg-blue-500'}
        flex cursor-pointer mt-6 mx-auto items-center w-full rounded-lg p-2 hover:bg-blue-500`}>
          <BiUser className='text-xl' />
          <p className="ml-6">Profile</p>
        </Link>
          <Link to='' className={`${active==='groups' && 'bg-blue-500'}
          flex cursor-pointer mt-6 mx-auto items-center w-full rounded-lg p-2 hover:bg-blue-500`}>
            <BiGroup className='text-xl' />
            <p className="ml-6">Groups</p>
          </Link>
      </div>
      <div className="flex flex-col w-full items-center px-3 text-black">
        <Link to={`/settings`} className={`${active==='settings' && 'bg-blue-500'}
          flex cursor-pointer mt-6 mx-auto items-center w-full rounded-lg p-2 hover:bg-blue-500`}>
          <BiCog className='text-xl' />
          <p className="ml-6">Settings</p>
        </Link>
        <Link to={`/login`} className={`
          flex cursor-pointer mt-6 mx-auto items-center w-full rounded-lg p-2 hover:bg-blue-500`}>
          <BiLogOut className='text-xl' />
          <p className="ml-6">Logout</p>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Nav;
