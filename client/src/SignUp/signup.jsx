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
            <Form onSubmit={regUser}  className='shadow-lg text-sm bg-slate-200'>
                <Logo ><img src={logo} alt="logo" /></Logo>
                <h1 className='text-black'>Sign Up to Photo Corner</h1>
                <div className="min-w-[200px] w-4/5 flex flex-col justify-center">
                    <label className="text-black ml-2" htmlFor="">Full Names</label>
                    <input className="w-full border border-white bg-white/30 focus:border-blue-700 focus:ring-1 focus:ring-sky-500 mt-1 h-[40px] px-2 rounded-md outline-none text-black
                       bg-transparen " type="text" placeholder="Enter your Full Names"
                       onChange={(e)=> setData({...data, fullname: e.target.value})} required/>
                </div>
                <div className="min-w-[200px] mt-3 w-4/5 flex flex-col justify-center">
                    <label className="text-black ml-2" htmlFor="">Username</label>
                    <input className="w-full border border-white bg-white/30 focus:border-blue-700 focus:ring-1 focus:ring-sky-500 mt-1 h-[40px] px-2 rounded-md outline-none text-black
                       bg-transparen " type="text" placeholder="Enter your username"
                       onChange={(e)=> setData({...data, username: e.target.value})} required/>
                </div>
                <div className="min-w-[200px] mt-3 w-4/5 flex flex-col justify-center">
                    <label className="text-black ml-2" htmlFor="">Email</label>
                    <input className="w-full border border-white bg-white/30 focus:border-blue-700 focus:ring-1 focus:ring-sky-500 mt-1 h-[40px] px-2 rounded-md outline-none text-black
                       bg-transparen " type="email" placeholder="Enter your email"
                       onChange={(e)=> setData({...data, email: e.target.value})} required/>
                </div>
                <div className="min-w-[200px] mt3 w-4/5 flex mt-4 flex-col justify-center">
                  <label className="text-black ml-2" htmlFor="">Password</label>
                  <input className="w-full border border-white bg-white/30 focus:border-blue-700 focus:ring-1 focus:ring-sky-500 mt-1 h-[40px] px-2 rounded-md outline-none text-black
                 bg-transparen "  placeholder="Choose a passoward"
                 type={values.showPassword ? "text" : "password"}
                 onChange={handlePasswordChange("password")}
                 value={values.password} required/>
                </div>
                <div className="min-w-[200px]  w-4/5 flex mt-2 items-center">
                  <Checkbox {...label} sx={{ padding: 0, marginRight: 4 }} onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword} type="checkbox"/>
                    <label className='text-black'>Show password</label>
                </div>
                <div className="min-w-[200px] mt-2 text-black w-4/5 flex items-center">
                    <Checkbox {...label} sx={{ padding: 0, marginRight: 4 }} type="checkbox" required/>
                    <label>I agree with terms and conditions</label>
                </div>
                <p className="text-center text-yellow-500 mb-3">{status}</p>
                {loading?(
                <div className="bg-blue-600 items-center jutify-center  rounded-md mb-2 p-2 px-5 flex w-4/5 cursor-pointer">
                  <input className='cursor-pointer w-full' type='submit' value='Submit' onSubmit={regUser} />
                </div>):(
                <LoadingButton loading variant="outlined">
                    Submit
                </LoadingButton>)}
                <div className="flex w-full mb-1 text-black items-center justify-center">
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