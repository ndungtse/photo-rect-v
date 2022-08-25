import React, {useState} from 'react';
import {Form, Body, Main, Logo,} from './signupcss';
import  './signup.css';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { login } from '../Login';
import logo from "../Home/Images/logo.png"
import LoadingButton from '@mui/lab/LoadingButton';

const Signup = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [values, setValues] = useState({
        password: "",
        showPassword: false,
      });
   const [data, setData] = useState({fullname: '', username: '', email: '', password: ''}); 
   const [status, setStatus] = useState('');
   const [loading , setLoading] = useState(true);

      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
      
      
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
      const handlePasswordChange = (prop) => (e) => {
        setData({...data, password: e.target.value})
        setValues({ ...values, [prop]: e.target.value });
      };

      const regUser = async(e) => {
        e.preventDefault()
        setLoading(false)
       const res = await fetch("https://photocorner33.herokuapp.com/user/new", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fullname: data.fullname,
                username: data.username,
                email: data.email,
                password: data.password
            })
          })
        const data1 = await res.json()
        setStatus(data1.message)
          if(data1.message.toLowerCase() === "account created"){
           await login({email: data.email, password: data.password});
          }
          setLoading(true)
      }


  return (  
  <>
      <Body className='loback'>
        <Main>
            <Form onSubmit={regUser}  className='shadow-lg bg-slate-200'>
                <Logo ><img src={logo} alt="logo" /></Logo>
                <h1 className='text-black'>Sign Up to Photo Corner</h1>
                <div className="w-full flex items-center justify-center">
                    <TextField 
                    sx={{marginTop: 2, width: '100%', maxWidth: 300}}
                     size="small" onChange={(e)=> setData({...data, fullname: e.target.value})}
                     id="standard-input" variant="outlined"
                    className="inmaterial insign" label="Full Name"
                    type="text" placeholder="First Name"required />
                </div>
                <div className="w-full flex items-center justify-center">
                    <TextField className="inmaterial insign" 
                    sx={{marginTop: 2, width: '100%', maxWidth: 300}}
                    size="small" onChange={(e)=> setData({...data, username: e.target.value})}
                    id="standard-input" variant="outlined"
                    label="username" type="text" placeholder="Enter your username" required />
                </div>
                <div className="w-full flex items-center justify-center">
                    <TextField className="inmaterial insign" 
                    sx={{marginTop: 2, width: '100%', maxWidth: 300}}
                    size="small" onChange={(e)=> setData({...data, email: e.target.value})}
                    id="standard-input" variant="outlined"
                    label="Email" type="email" placeholder="Enter your email" required/>
                </div>
                <div className="w-full flex items-center justify-center">
                    <TextField
                    sx={{marginTop: 2, width: '100%', maxWidth: 300}}
                    size="small"
                    id="standard-input" variant="outlined"
                     className="inmaterial insign" label="Password"
                       type={values.showPassword ? "text" : "password"}
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
                <p className="text-center text-yellow-500 mb-3">{status}</p>
                {loading?(
                <div className="bg-blue-600 p-2 px-5 cursor-pointer">
                  <input className='cursor-pointer' type='submit' value='Submit' onSubmit={regUser} />
                </div>):(
                <LoadingButton loading variant="outlined">
                    Submit
                </LoadingButton>)}
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