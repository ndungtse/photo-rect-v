/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Nav from "../Home/Nav";
import { Link } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import updateUtils from "./updateAccount";

const UpdateAccount = () => {
  let data = null
  useEffect(() => {
    data = updateUtils.onload()
    document.querySelector('#email').value = data.email
    document.querySelector('#fullname').value = data.fullName
    document.querySelector('#username').value = data.username
    document.querySelector('#password ').value = data.password
    // console.log(data)
  }, [])

  return (
    <div className="flex update-account w-full absolute h-full">
      <Nav />
      <div onLoad={updateUtils.onload} className="flex flex-col items-center w-[95%]">
        <h1>Update your account</h1>
        <form onLoad={updateUtils.onload} onSubmit={updateUtils.onSubmit} className="flex flex-col items-center h-[90vh] py-[10%] w-full">
          <div className="flex items-center w-[50%] justify-between mt-4">
            <label className="">
              Email
            </label>
            <TextField id="email" className="w-[70%] uplog"
              variant="standard"
              type="email"
            />
          </div>
          <div className="flex items-center  w-[50%] justify-between mt-4">
            <label className="uplog">Full Name</label>
            <TextField id="fullname" onInput={updateUtils.getFullName} className=" w-[70%] uplog" variant="standard"
            />
          </div>
          <div className="flex items-center  w-[50%] justify-between mt-4">
            <label className="">username</label>
            <TextField id="username" className=" w-[70%] uplog" variant="standard"
            />
          </div>
          <div className="flex items-center  w-[50%] justify-between mt-4">
            <label className="">Password</label>
            <TextField id="password" className=" w-[70%] uplog" variant="standard"
            />
          </div>
          <div className="flex items-center  w-[50%] justify-between mt-4">
            <label className="">Bio</label>
            <textarea id="bio" onInput={updateUtils.getBio} className={`text-black w-[70%] h-[100%] outline-none area-up p-2 focus:border-solid border-black`} type="textarea" placeholder='Bio' />
          </div>
          <div className="flex justify-between w-[50%] mt-3">
            <Link to='/profile' className="bg-blue-800 mt-4 px-5 py-2 cursor-pointer">Cancel</Link>
            <input className="bg-blue-800 mt-4 px-5 py-2 cursor-pointer" type="submit" value="Save Changes" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAccount;
