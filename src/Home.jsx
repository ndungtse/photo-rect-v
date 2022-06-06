import React from 'react'
import Nav from './Home/Nav';
import Mainside from './Home/main-side'
import './App.css';

function Home() {
  return (
      <div className='main-container fixed h-screen overflow-hidden'>
        <Nav />
        <Mainside />
      </div>
  );
}

export default Home;
