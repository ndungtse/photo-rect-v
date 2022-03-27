
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Form, Body, Main, Logo } from './../SignUp/signupcss'
import './../SignUp/signup.css'
import Utils from '../utils';
import loginUtils from '.';
import Checkbox from '@mui/material/Checkbox';


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
    console.log(e.target.value)
  };


  return (
    <>
      <Body className='loback'>
        <Main>
          <Form className='shadow-lg forform' onLoad={Utils.onload} onSubmit={loginUtils.onloginsubmit}>
            <Logo><img src={require("./../Home/Images/logo.png")} alt="logo" /></Logo>
            <h1>Log into Photo Corner</h1>
            <div className="labels">
              <TextField className="inmaterial inlog" label="Email"
          id="standard-password-input" variant="filled" onInput={loginUtils.getemail} type="email" placeholder="Enter your email" autocomplete="off" required/>
            </div>
            <div className="labels">
              <TextField className="inmaterial inlog" placeholder="Enter your passoward"
          id="standard-password-input" variant="filled"
          label="Password" onInput={loginUtils.getpswd} type={values.showPassword ? "text" : "password"}
                onChange={handlePasswordChange("password")}
                value={values.password} required />
            </div>
            <div className="label">
            <Checkbox {...label} onClick={handleShowPassword}
                onMouseDown={handleMouseDownPassword} type="checkbox" />
              <label>Show password</label>
            </div>
            <div className="button">
              <input type='submit' value='Login' />
            </div>

            <div className="alt1 ">
              <a href="./">Forgot your password?</a>
            </div>
            <div className="alt">
              <p>Don't have an account?</p>
              <a href="./signup">Sign Up</a>
            </div>
          </Form>
        </Main>
      </Body>
    </>
  );
}

export default Login;
