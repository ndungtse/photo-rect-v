import React/* , {useState} */ from 'react';
import {Form, Body, Main, Logo} from './signupcss'
import  './signup.css'

const Signup = () => {
    let isShowed = "password";
    const Showpasword = () => {
        isShowed = "text";
        console.log(isShowed);
    }
  return (  <>
      <Body>
        <Main>
            <Form>
                <Logo><img src={require("./../Home/Images/logo.png")} alt="logo" /></Logo>
                <h1>Sign Up to Photo Corner</h1>
                <div class="labels">
                    <label>First Name</label>
                    <input oninput="getfname(event)" type="text" placeholder="First Name"required />
                </div>
                <div class="labels">
                    <label>Last Name</label>
                    <input oninput="getlname(event)" type="text" placeholder="Last Name" required />
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
                    <input oninput="getpswd(event)" type= {isShowed} placeholder="choose your password" required/>
                </div>
                <div class="labels">
                    <label>Password</label>
                    <input oninput="getpswd(event)" type="password" placeholder="Confirm your password" required/>
                </div>
                <div class="label">
                    <input onClick={Showpasword} oninput="getpswd(event)" type="checkbox" required/>
                    <label>I gree with terms and conditions</label>
                </div>
                <div class="button">

                    <div><input type="submit" value="Sign Up"/></div>
                </div>

                <div class="alt">
                    <p>Already have an account?</p>
                    <a href="./">Log in</a>
                </div>
            </Form>
        </Main>
      </Body>  
    </>
  );
}

export default Signup;