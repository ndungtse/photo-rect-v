import React, {useState} from 'react';
import {Form, Body, Main, Logo,} from './signupcss';
import  './signup.css';
import Utils from '../utils/index'
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

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
  return (  
  <>
      <Body className='loback'>
        <Main>
            <Form onLoad={Utils.onload} onSubmit={Utils.onsubmit}  className='shadow-lg forform'>
                <Logo ><img src="./src/Home/Images/logo.png" alt="logo" /></Logo>
                <h1>Sign Up to Photo Corner</h1>
                <div className="labels">
                    <TextField className="inmaterial insign" label="Full Name"
          id="standard-password-input" variant="filled" onInput={Utils.getfullname} type="text" placeholder="First Name"required />
                </div>
                <div className="labels">
                    <TextField className="inmaterial insign" label="username"
          id="standard-password-input" variant="filled" onInput={Utils.getuname} type="text" placeholder="Enter your username" required />
                </div>
                <div className="labels">
                    <TextField className="inmaterial insign" label="Email"
          id="standard-password-input" variant="filled" onInput={Utils.getemail} type="email" placeholder="Enter your email" required/>
                </div>
                <div className="labels">
                    <TextField className="inmaterial insign" label="Password"
          id="standard-password-input" variant="filled" onInput={Utils.getpswd} type={values.showPassword ? "text" : "password"}
                    onChange={handlePasswordChange("password")}
                    value={values.password}  placeholder="Choose your password" required/>
                </div>
                <div className="label">
                <Checkbox {...label}  onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword} type="checkbox"/>
                    <label>Show password</label>
                </div>
                <div className="label">
                    <Checkbox {...label} type="checkbox" required/>
                    <label>I agree with terms and conditions</label>
                </div>

                <div className="button">
                  <input className='signsub bg-blue-500' type='submit' value='Submit' onSubmit={Utils.onsubmit} />
                </div>
                <div className="alt">
                    <p>Already have an account?</p>
                    <a href="./login">  Log in</a>
                </div>
            </Form>
        </Main>
      </Body>  
    </>
  );
}

export default Signup;