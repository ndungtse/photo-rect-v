import React from 'react';
import './settings/settings.css';
import Nav from './Home/Nav';
import Sleft from './settings/sleft'

const Settings = ({toggleDark,toggleIco}) => {
 
  return (
    <div className='settings w-full flex'>
      <Nav />
      <div className='w-[95%]'>
        <h1 className='text-center'>Settings</h1>
        <div className='flex'>
          <div className='s-left flex flex-col w-[50%]'>
            <div className='pl-1'>
              <li>Prefferences: </li>
              <div className='p-cont flex items-center'>
                <p>Dark mode:</p>
                <div className='flex items-center pl-7'>
                  <div className='flex items-center pl-7'>
                  <label>Off</label><i onClick={toggleDark} className={toggleIco}></i><label>On</label>
                  </div>
                </div>
              </div>
            </div>
            <div className='pl-1'>
              <li>Account Settings: </li>
                <div className='p-cont pt-2 flex items-center'>
                  <p className=''>Account delete:</p>
                  <button className='flex items-center px-1 rounded-[5px] ml-7 bg-red-400'>Delete Account
                  </button>
                </div>
            </div>
          </div>
          <Sleft />
        </div>
        <p className='text-center pt-2'>©️ 2022 Phot Corner. All rights reserved</p>
      </div>
    </div>
  )
}

export default Settings

