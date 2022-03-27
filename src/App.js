import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './Home';
import Messages from './Messages';
import Profile from './Profile';
import Settings from './settings';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from './SignUp/signup';
import Login from './Login/Login';
import UpdateAccount from './account-page/updateAccountForm';


function App() {
  const [dark, setDark] = useState("")
  const [toggleIco, setToggleIco] = useState("bx bx-toggle-left");

   useEffect(() => {
    const localTheme = window.localStorage.getItem('mode');
    const themeIco = window.localStorage.getItem('toggleIco')

    if (localTheme) {
      setDark(localTheme);
    } else {
      window.localStorage.setItem('mode', 'light');
    }
    if (themeIco==='bx bx-toggle-right'){
      setToggleIco(themeIco);
    }else{
      setToggleIco("bx bx-toggle-left");
    }
  },[dark, setDark])
    const toggleDark = () => {
      if (toggleIco==="bx bx-toggle-right") {
        setToggleIco("bx bx-toggle-left");
        setDark("");
        window.localStorage.setItem('mode', '')
        window.localStorage.setItem('toggleIco', 'bx bx-toggle-left')
      }else{
      setToggleIco("bx bx-toggle-right");
      setDark("dark-theme");
      window.localStorage.setItem('mode', 'dark-theme')
      window.localStorage.setItem('toggleIco', 'bx bx-toggle-right')
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
         <Route path='/profile/updateaccount' element={<UpdateAccount />}/>
         <Route path='/settings' element={<Settings
             toggleDark={toggleDark}
             toggleIco={toggleIco}
             dark={dark} setDark={setDark}/>}/>
         </Routes>
       </div>
    </BrowserRouter>
  );
}

export default App;
