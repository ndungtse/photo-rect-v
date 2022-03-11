import React, {useState} from 'react';
import {Form, Body, Main, Logo,} from './signupcss';
import  './signup.css';
import Utils from '../utils/index'

const Signup = () => {

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
      <Body>
        <Main>
            <Form onLoad={Utils.onload} onSubmit={Utils.onsubmit}>
                <Logo><img src={require("../Home/Images/logo.png")} alt="logo" /></Logo>
                <h1>Sign Up to Photo Corner</h1>
                <div className="labels">
                    <label>Full Name</label>
                    <input onInput={Utils.getfullname} type="text" placeholder="First Name"required />
                </div>
                <div className="labels">
                    <label>Username</label>
                    <input onInput={Utils.getuname} type="text" placeholder="Enter your username" required />
                </div>
                <div className="labels">
                    <label>Email</label>
                    <input onInput={Utils.getemail} type="email" placeholder="Enter your email" required/>
                </div>
                <div className="labels">
                    <label>Password</label>
                    <input onInput={Utils.getpswd} type={values.showPassword ? "text" : "password"}
                    onChange={handlePasswordChange("password")}
                    value={values.password}  placeholder="Choose your password" required/>
                </div>
                <div className="label">
                    <input  onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword} type="checkbox"/>
                    <label>Show password</label>
                </div>
                <div className="label">
                    <input type="checkbox" required/>
                    <label>I agree with terms and conditions</label>
                </div>

                <div className="button">
                  <input type='submit' value='Submit' onSubmit={Utils.onsubmit} />
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