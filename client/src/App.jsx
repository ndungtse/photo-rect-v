import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './Home';
import Messages from './Messages/message';
import Settings from './settings';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signup from './SignUp/signup';
import Login from './Login/Login';
import UpdateAccount from './account-page/updateAccountForm';
import { useAuth } from './contexts/AuthContext';
import Search from './others/Search';
import DProfile from './account-page/DProfile';
import Prof from './account-page/Prof';

function App() {
  const [dark, setDark] = useState("")
  const [toggleIco, setToggleIco] = useState("bx bx-toggle-left");
  const { user } = useAuth()


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
           <Route path="/" element={user !== null?<Home />: <Navigate replace to="/login" />} />
           <Route path="/home" element={user !== null?<Home />: <Navigate replace to="/login" />} />
           <Route path="/messages" element={user !== null ?<Messages /> : <Navigate replace to="/login" />} />
           <Route path="/messages/:roomId" element={user !== null ?<Messages /> : <Navigate replace to="/login" />} />
           <Route path="/signup" element={<Signup />} />
           <Route path="/login" element={<Login />} />
           <Route path="/search/:query" element={user !== null ?<Search />: <Navigate replace to="/login" />} />
           <Route path='/profile' element={user !== null ?<Prof/>: <Navigate replace to="/login" />}/>
           <Route path='/profile/:id' element={user !== null ?<DProfile/>: <Navigate replace to="/login" />}/>
           <Route path='/profile/updateaccount' element={user !== null ?<UpdateAccount />: <Navigate replace to="/login" />}/>
           <Route path='*' element={<Navigate replace to="/home" />}/>
           <Route path='/settings' element={user !== null ?<Settings
               toggleDark={toggleDark}
               toggleIco={toggleIco}
               dark={dark} setDark={setDark}/>: <Navigate replace to="/login" />}/>
           </Routes>
         </div>
      </BrowserRouter>
  );
}

export default App;
