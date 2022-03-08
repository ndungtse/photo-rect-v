import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import Home from './Home';
import Messages from './Messages';
import Profile from './Profile';
import Settings from './settings';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from './SignUp/signup';
import Login from './Login/Login';


function App() {
  const [dark, setDark] = useState("")
  const radioRef = useRef(null)
  const radioRef1 = useRef(null)
  const [check, setCheck] = useState("")
  const [check1, setCheck1] = useState("")

  useEffect(()=>{
    const savedCheck = window.localStorage.getItem('check')
    const savedCheck1 = window.localStorage.getItem('check1')
    if(savedCheck){
      let upRef = radioRef.current
      setCheck("checked")
      upRef.setAttribute("checked", check)
      window.localStorage.removeItem('check1')
    }else if(savedCheck1){
      let upRef1 = radioRef1.current
      setCheck1("checked")
      upRef1.setAttribute("checked", check1)
      window.localStorage.removeItem('check')
    }
  },[check, setCheck, check1, setCheck1])
  useEffect(()=>{
      const savedCheck = window.localStorage.getItem('check')
      // const savedCheck1 = window.localStorage.getItem('check1')
      let upRef1 = radioRef1.current
      setCheck1("checked")
      if(!savedCheck){
      upRef1.setAttribute("checked", check1)
      }
  },[check1, setCheck1])
   useEffect(() => {
    const localTheme = window.localStorage.getItem('dark');

    if (localTheme) {
      setDark(localTheme);
    } else {
      window.localStorage.setItem('dark', 'light');
    }
  },[dark, setDark])
    const toggleDark = () => {
      setDark("dark-theme");
      let upRef = radioRef.current
        setCheck("checked")
       upRef.setAttribute("checked", check)
      window.localStorage.setItem('dark', 'dark-theme')
      window.localStorage.setItem('check', 'checked')
      if(upRef.checked===true){
        window.localStorage.removeItem('check1')
      }
    }
    const toggleLight = () => {
      setDark("");
      let upRef1 = radioRef1.current
        setCheck1("checked")
       upRef1.setAttribute("checked", check1)
      window.localStorage.setItem('dark', '')
      window.localStorage.setItem('check1', 'checked')
      if(upRef1.checked===true){
        window.localStorage.removeItem('check')
      }
    }
  return (
    <BrowserRouter>
       <div className={dark}>
         <Routes >
         <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
         <Route path="/messages" element={<Messages />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/login" element={<Login />} />
         <Route path='/profile' element={<Profile/>}/>
         <Route path='/settings' element={<Settings
             toggleDark={toggleDark}
             radioRef={radioRef}
             radioRef1={radioRef1}
            //  tryThis={tryThis}
             toggleLight={toggleLight}
             dark={dark} setDark={setDark}/>}/>
         </Routes>
       </div>
    </BrowserRouter>
  );
}

export default App;
