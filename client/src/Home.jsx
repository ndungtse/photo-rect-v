import React from 'react'
import Nav from './Home/Nav';
import './App.css';
import Main from './Home/main';
import { PostProvider } from './contexts/PostContext';
import { useUsers } from './Messages/contexts/userContext';

function Home() {
  const { setMobile } = useUsers();
  return (
      <div onClick={()=> setMobile(false)}
       className='main-container w-full h-screen overflow-hidden'>
        <Nav active={`home`} />
        <Main />
      </div>
  );
}

export default Home;
