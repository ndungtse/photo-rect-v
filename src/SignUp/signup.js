import React, {useState} from 'react';
import {Form, Body, Main, Logo, sayHi, sayBye} from './signupcss';
import  './signup.css';

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
            <Form>
                <Logo><img src={require("./../Home/Images/logo.png")} alt="logo" /></Logo>
                <h1>Sign Up to Photo Corner</h1>
                <div class="labels">
                    <label>Full Name</label>
                    <input oninput="getfname(event)" type="text" placeholder="First Name"required />
                </div>
                <div class="labels">
                    <label>Username</label>
                    <input oninput="getuname(event)" type="text" placeholder="Enter your username" required />
                </div>
                <div class="labels">
                    <label>Email</label>
                    <input oninput="getemail(event)" type="email" placeholder="Enter your email" required/>
                </div>
                <div class="labels">
                    <label>Password</label>
                    <input oninput="getpswd(event)" type={values.showPassword ? "text" : "password"}
                    onChange={handlePasswordChange("password")}
                    value={values.password}  placeholder="choose your password" required/>
                </div>
                <div class="labels">
                    <label>Password</label>
                    <input oninput="getpswd(event)" type={values.showPassword ? "text" : "password"}
                      placeholder="Confirm your password" required/>
                </div>
                <div className="label">
                    <input  onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword} type="checkbox"/>
                    <label>Show password</label>
                </div>
                <div class="label">
                    <input oninput="getpswd(event)" type="checkbox" required/>
                    <label>I gree with terms and conditions</label>
                </div>

                <div class="button">

                    <div><input onClick={sayHi} type="submit" value="Sign Up"/></div>
                </div>

                <div class="alt">
                    <p>Already have an account?</p>
                    <a href="./login">Log in</a>
                </div>
            </Form>
        </Main>
      </Body>  
    </>
  );
}

export default Signup;