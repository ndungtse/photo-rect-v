import React from "react";
import './account.css';
import Nav from "../Home/Nav";
import {Link} from 'react-router-dom';
import TextField from "@mui/material/TextField";
import updateUtils from "./updateAccount";

const UpdateAccount = () => {
  return (
    <div className="flex update-account w-full absolute h-full">
        <Nav />
      <div className="flex flex-col items-center w-[95%]">
        <h1>Update your account</h1>
        <form onLoad={updateUtils.onload} onSubmit={updateUtils.onSubmit} className="flex flex-col items-center h-[90vh] py-[10%] w-full">
          <div className="flex items-center w-[50%] justify-between mt-4">
            <label className="">
              Email
            </label>
            <TextField className="w-[70%] uplog" label="Email"
              variant="standard"
              type="email"
            />
          </div>
          <div className="flex items-center  w-[50%] justify-between mt-4">
            <label className="uplog">Full Name</label>
            <TextField label="Full Name" variant="standard" type="text" className=" w-[70%] uplog" accept="true"
            />
          </div>
          <div className="flex items-center  w-[50%] justify-between mt-4">
            <label className="">Username</label>
            <TextField className=" w-[70%] uplog" variant="standard"
              label="Username"
            />
          </div>
          <div className="flex items-center  w-[50%] justify-between mt-4">
            <label className="">Password</label>
            <TextField className=" w-[70%] uplog" variant="standard" label="Password"
            />
          </div>
          <div className="flex items-center  w-[50%] justify-between mt-4">
            <label className="">Bio</label>
            <textarea className={`text-black w-[70%] h-[100%] outline-none area-up p-2 focus:border-solid border-black`} type="textarea"  placeholder='Bio' />
          </div>
          <div className="flex justify-between w-[50%] mt-3">
            <Link to='/profile' className="bg-blue-800 mt-4 px-5 py-2 cursor-pointer" type="submit">Cancel</Link>
            <input className="bg-blue-800 mt-4 px-5 py-2 cursor-pointer" type="submit" value="Save Changes" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAccount;
