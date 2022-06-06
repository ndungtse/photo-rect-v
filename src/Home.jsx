import React from 'react'
import Nav from './Home/Nav';
import './App.css';
import Main from './Home/main';

function Home() {
  return (
      <div className='main-container w-full fixed h-screen overflow-hidden'>
        <Nav />
        <Main />
      </div>
  );
}

export default Home;
