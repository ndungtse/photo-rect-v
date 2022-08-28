import React, { useEffect } from 'react';
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
import Profile from './account-page/Profile';
import { useApp } from './contexts/AppContext';

function App() {
  const { user } = useAuth()
  const { isDark } = useApp()

  useEffect(() => {
		console.log("%cWelcome to Photo Corner Console", "color: white; font-size: 34px; font-weight: bold; padding: 1em; text-align: center; background-color: blue");
  }, [])

  return (
      <BrowserRouter>
         <div className={isDark?'dark-theme w-full':'w-full flex'}>
           <Routes >
           <Route path="/" element={user !== null?<Home />: <Navigate replace to="/login" />} />
           <Route path="/home" element={user !== null?<Home />: <Navigate replace to="/login" />} />
           <Route path="/messages" element={user !== null ?<Messages /> : <Navigate replace to="/login" />} />
           <Route path="/messages/:roomId" element={user !== null ?<Messages /> : <Navigate replace to="/login" />} />
           <Route path="/signup" element={user === null ?<Signup />: <Navigate replace to="/" />} />
           <Route path="/login" element={user === null ?<Login />: <Navigate replace to="/" />} />
           <Route path="/search/:query" element={user !== null ?<Search />: <Navigate replace to="/login" />} />
           <Route path='/profile' element={user !== null ?<Profile />: <Navigate replace to="/login" />}/>
           <Route path='/profile/:id' element={user !== null ?<DProfile/>: <Navigate replace to="/login" />}/>
           <Route path='/profile/updateaccount' element={user !== null ?<UpdateAccount />: <Navigate replace to="/login" />}/>
           <Route path='*' element={<Navigate replace to="/home" />}/>
           <Route path='/settings' element={user !== null ?<Settings
              />: <Navigate replace to="/login" />}/>
           </Routes>
         </div>
      </BrowserRouter>
  );
}

export default App;
