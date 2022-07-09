import React, {useState} from 'react';
import {Form, Body, Main, Logo,} from './signupcss';
import  './signup.css';
import Utils from '../utils/index'
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const Signup = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [values, setValues] = useState({
        password: "",
        showPassword: false,
      });

      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
      
      
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
      const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };  

      //            sx={{marginTop: 2, width: '100%', maxWidth: 300}}
      //           size="small"
      //           id="standard-input" variant="outlined"
  return (  
  <>
      <Body className='loback'>
        <Main>
            <Form onLoad={Utils.onload} onSubmit={Utils.onsubmit}  className='shadow-lg bg-slate-200'>
                <Logo ><img src="./src/Home/Images/logo.png" alt="logo" /></Logo>
                <h1 className='text-black'>Sign Up to Photo Corner</h1>
                <div className="w-full flex items-center justify-center">
                    <TextField 
                    sx={{marginTop: 2, width: '100%', maxWidth: 300}}
                     size="small"
                     id="standard-input" variant="outlined"
                    className="inmaterial insign" label="Full Name"
                       onInput={Utils.getfullname} type="text" placeholder="First Name"required />
                </div>
                <div className="w-full flex items-center justify-center">
                    <TextField className="inmaterial insign" 
                    sx={{marginTop: 2, width: '100%', maxWidth: 300}}
                    size="small"
                    id="standard-input" variant="outlined"
                    label="username"
                       onInput={Utils.getuname} type="text" placeholder="Enter your username" required />
                </div>
                <div className="w-full flex items-center justify-center">
                    <TextField className="inmaterial insign" 
                    sx={{marginTop: 2, width: '100%', maxWidth: 300}}
                    size="small"
                    id="standard-input" variant="outlined"
                    label="Email"
                       onInput={Utils.getemail} type="email" placeholder="Enter your email" required/>
                </div>
                <div className="w-full flex items-center justify-center">
                    <TextField
                    sx={{marginTop: 2, width: '100%', maxWidth: 300}}
                    size="small"
                    id="standard-input" variant="outlined"
                     className="inmaterial insign" label="Password"
                       onInput={Utils.getpswd} type={values.showPassword ? "text" : "password"}
                    onChange={handlePasswordChange("password")}
                    value={values.password}  placeholder="Choose your password" required/>
                </div>
                <div className="label">
                <Checkbox {...label}  onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword} type="checkbox"/>
                    <label className='text-black'>Show password</label>
                </div>
                <div className="label text-black">
                    <Checkbox {...label} type="checkbox" required/>
                    <label>I agree with terms and conditions</label>
                </div>

                <div className="bg-blue-600 p-2 px-5 cursor-pointer">
                  <input className='' type='submit' value='Submit' onSubmit={Utils.onsubmit} />
                </div>
                <div className="flex w-full text-black items-center justify-center">
                    <p>Already have an account?</p>
                    <Link to='/login' className='text-blue-600 ml-6'>  Log in</Link>
                </div>
            </Form>
        </Main>
      </Body>  
    </>
  );
}

export default Signup;