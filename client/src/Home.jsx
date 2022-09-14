import React from 'react'
import './App.css';
import Main from './Home/main';
import { useUsers } from './Messages/contexts/userContext';
import TopBar from './Home/TopBar';

function Home() {
  const { setMobile } = useUsers();
  return (
      <div onClick={()=> setMobile(false)}
       className='main-container flex-col w-full h-screen overflow-hidden'>
        <TopBar />
        <Main />
      </div>
  );
}

export default Home;
