
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Form, Body, Main, Logo } from './../SignUp/signupcss'
import './../SignUp/signup.css'
import Utils from '../utils';
import loginUtils from './index';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';

const Login = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
    setValues({ ...values, [prop]: e.target.value });
  };


  return (
    <>
      <Body className='loback text-black'>
        <Main>
          <Form className=' bg-slate-200 text-black' onLoad={Utils.onload} onSubmit={loginUtils.onloginsubmit}>
            <Logo><img src="./src/Home/Images/logo.png" alt="logo" /></Logo>
            <h1 className='text-black'>Log into Photo Corner</h1>
            <div className="w-full flex items-center justify-center">
              <TextField
                sx={{marginTop: 2, width: '100%', maxWidth: 300}}
                size="small"
                className="" label="Email"
                id="standard-input" variant="outlined"
                 onInput={loginUtils.getemail} type="email" placeholder="Enter your email" autoComplete="off" required/>
            </div>
            <div className="w-full flex items-center justify-center">
              <TextField className="mt-4"
              size="small" sx={{marginTop: 2, width: '100%', maxWidth: 300}}
               name='email' placeholder="Enter your passoward"
              id="standard-password-input" variant="outlined"
               label="Password" onInput={loginUtils.getpswd} type={values.showPassword ? "text" : "password"}
                onChange={handlePasswordChange("password")}
                value={values.password} required />
            </div>
            <div className="label">
            <Checkbox {...label} onClick={handleShowPassword}
                onMouseDown={handleMouseDownPassword} type="checkbox" />
              <label className='text-black'>Show password</label>
            </div>
            <div className="bg-blue-600 p-2 px-5 cursor-pointer">
              <input type='submit' value='Login' />
            </div>

            <div className="text-black ">
              <a href="./">Forgot your password?</a>
            </div>
            <div className="flex w-full text-black items-center justify-center">
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
