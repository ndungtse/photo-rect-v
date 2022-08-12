import React from 'react'
import Nav from './Home/Nav';
import './App.css';
import Main from './Home/main';
import { PostProvider } from './contexts/PostContext';
import { useUsers } from './Messages/contexts/userContext';

function Home() {
  const { setMobile } = useUsers();
  return (
    <PostProvider>
      <div onClick={()=> setMobile(false)}
       className='main-container w-full fixed h-screen overflow-hidden'>
        <Nav active={`home`} />
        <Main />
      </div>
    </PostProvider>
  );
}

export default Home;
