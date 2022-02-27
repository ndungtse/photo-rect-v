import React from 'react';
import './App.css';
import Home from './Home';
import Messages from './Messages';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from './SignUp/signup';


function App() {
    
  return (
    <BrowserRouter>
       <div className="App">
         <Routes >
         <Route path="/" element={<Home />} />
         <Route path="/messages" element={<Messages />} />
         <Route path="/signup" element={<Signup />} />
         </Routes>
       </div>
    </BrowserRouter>
  );
}

export default App;
