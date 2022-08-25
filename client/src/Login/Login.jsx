import logo from "../Home/Images/logo.png"
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Form, Body, Main, Logo } from './../SignUp/signupcss'
import './../SignUp/signup.css'
import Utils from '../utils';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import { setCookie } from '../contexts/RequireAuth';
import { CircularProgress } from '@mui/material';

const Login = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [data, setData] = useState({email: '', password: ''});
  const [status, setStatus] = useState('');
  const [progress, setProgress] = useState(false);

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const handleShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };


  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handlePasswordChange = (prop) => (e) => {
    setData({...data, password: e.target.value})
    setValues({ ...values, [prop]: e.target.value });
  };

  const onloginsubmit = e => {
    setProgress(true);
    e.preventDefault()
    fetch("https://photocorner33.herokuapp.com/user/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: data.email,
            password: data.password
        })
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            setStatus(data.message)
            if(data.message === "Can continue"){
                // localStorage.setItem('token',JSON.stringify(data.token))
                setCookie('token', data.token, 3)
                window.location.replace('https://photo-rect-v.vercel.app/home')
            }
            else if(data.message === "No token generated try logging in again"){
                window.alert("No token generated try logging in again")
                setProgress(false);
            }
            else if(data.message === "Wrong login info"){
                window.alert("Login info incorrect")
                setProgress(false);
            }else{
              setProgress(false);
            }
            
        })
}

  return (
    <>
      <Body className='loback text-black'>
        <Main>
          <Form className=' bg-slate-200 text-black' onSubmit={onloginsubmit}>
            <Logo><img src={logo} alt="logo" /></Logo>
            <h1 className='text-black'>Log into Photo Corner</h1>
            <div className="w-full flex items-center justify-center">
              <TextField
                sx={{marginTop: 2, width: '100%', maxWidth: 350}}
                size="small"
                className="" label="Email"
                id="standard-input" variant="outlined"
                onChange={(e)=> setData({...data, email: e.target.value})}
                 type="email" placeholder="Enter your email" autoComplete="off" required/>
            </div>
            <div className="w-full flex items-center justify-center">
              <TextField className="mt-4 "
              size="small" sx={{marginTop: 2, width: '100%', maxWidth: 350}}
               name='email' placeholder="Enter your passoward"
              id="standard-password-input" variant="outlined"
               label="Password" type={values.showPassword ? "text" : "password"}
                onChange={handlePasswordChange("password")}
                value={values.password} required />
            </div>
            <div className="label">
            <Checkbox {...label} onClick={handleShowPassword}
                onMouseDown={handleMouseDownPassword} type="checkbox" />
              <label className='text-black'>Show password</label>
            </div>
            <p className="text-center mt-2 text-yellow-600">{status}</p>
            <div className={`${progress?"bg-blue-200 cursor-not-allowed":"bg-blue-600"} mt-2 p-2 px-5 flex cursor-pointer`}>
              {/* {progress? <CircularProgress /> :( */}
              <input className="cursor-pointer" type='submit' value='Login' />
              {/* )} */}
            </div>
            <div className="text-black mt-2">
              <a href="./">Forgot your password?</a>
            </div>
            <div className="flex mt-2 w-full text-black items-center justify-center">
              <p>Don't have an account?</p>
              <Link to='/signup' className='text-blue-600 ml-2'>Sign Up</Link>
            </div>
          </Form>
        </Main>
      </Body>
    </>
  );
}

export default Login;
