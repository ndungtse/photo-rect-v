import React from 'react';
import './App.css';
import Home from './Home';
import Messages from './Messages';
import Profile from './Profile';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from './SignUp/signup';
import Login from './Login/Login';


function App() {
    
  return (
    <BrowserRouter>
       <div className="App">
         <Routes >
         <Route path="/" element={<Home />} />
         <Route path="/messages" element={<Messages />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/login" element={<Login />} />
         <Route path='/profile' element={<Profile/>}/>
         </Routes>
       </div>
    </BrowserRouter>
  );
}

export default App;
