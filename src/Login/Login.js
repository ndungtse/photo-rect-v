
import React, {useState} from 'react';
import {Form, Body, Main, Logo} from './../SignUp/signupcss'
import  './../SignUp/signup.css'


const Login = () =>{
    const [values, setValues] = useState({
        password: "",
        showPassword: false,
      });
      const handleShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
      
      
      const handleMouseDownPassword = (e) => {
        e.preDefault();
      };
      
      const handlePasswordChange = (prop) => (e) => {
        setValues({ ...values, [prop]: e.target.value });
        console.log(e.target.value);
      };
   
      
  return (
      <>
      <Body>
        <Main>
            <Form className='shadow-lg'>
                <Logo><img src={require("./../Home/Images/logo.png")} alt="logo" /></Logo>
                <h1>Log into Photo Corner</h1>
                <div className="labels">
                    <label>Username</label>
                    <input oninput="getuname(event)" type="text" placeholder="Enter your username" required />
                </div>
                <div className="labels">
                    <label>Email</label>
                    <input oninput="getemail(event)" type="email" placeholder="Enter your email" required/>
                </div>
                <div className="labels">
                    <label>Password</label>
                    <input oninput="getpswd(event)" type={values.showPassword ? "text" : "password"}
                    onChange={handlePasswordChange("password")}
                    value={values.password}  placeholder="Enter your password" required/>
                </div>
                
                <div className="label">
                    <input  onClick={handleShowPassword}
              onMouseDown={handleMouseDownPassword} type="checkbox"/>
                    <label>Show password</label>
                </div>
                <div className="button">

                    <div><input type="submit" value="Login"/></div>
                </div>

                <div className="alt1 ">
                    <a href="./">Forgot your password?</a>
                </div>
                <div className="alt">
                    <p>Don't have an account?</p>
                    <a  href="./signup">Sign Up</a>
                </div>
            </Form>
        </Main>
      </Body>
      </>
  );
}

export default Login;
