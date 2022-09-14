/* eslint-disable */
import React, { useState } from "react";
import "./style.css";
import { useUsers } from "./contexts/userContext";
import { BiSearch } from 'react-icons/bi'
import { useAuth } from "../contexts/AuthContext";
import { useMessage } from "./contexts/messageContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Recent({roomId, setAfter, setLinear}) {
  const { users, setUsers } = useUsers();
  const { user } = useAuth();
  const { startChat, room } = useMessage()
  const navigate = useNavigate()

  const recentChats = users.filter((u) => u._id !== user._id);

  const handleStart = async(id)=> {
    setLinear(true)
    navigate(`/messages/${id+user._id}`, { replace: true })
    await startChat(id);
    setAfter(true)
  }
  

  return (
    <div className={` flex ${roomId!==undefined && 'hidden tablet:flex'} flex-col w-full items-center p-4 tablet:w-[30%] `}>
      <div className="flex justify-between w-full items-center pr-4">
        <h2 className="font-bold text-xl">Chats</h2>
        <div className="chat-icons text-white ml-2">
                  <i className="bx p-2 rounded-full h-[30px] w-[30px] flex items-center justify-center ml-1 hover:bg-slate-600 bg-slate-700
                   bx-dots-horizontal-rounded icon"></i>
                  <i className="bx p-2 rounded-full h-[30px] w-[30px] flex items-center justify-center ml-1 hover:bg-slate-600 cursor-pointer bg-slate-700
                   bxs-message-square-edit"></i>
                  <i className="bx p-2 rounded-full h-[30px] w-[30px] flex items-center justify-center ml-1 hover:bg-slate-600 bg-slate-700
                   bxs-video-plus icon"></i>
              </div>
      </div>
      <div className=" border-2 border-blue-700 flex w-full justify-center py-1 px-2 mt-5 rounded-lg">
        <label htmlFor="" className="flex w-full items-center">
          <BiSearch className="text-2xl"/>
          <input
            className="outline-none bg-transparent border-none w-full px-2 ml-3 focus:border-b-2 focus:border-b-blue-300"
            type="text"
            placeholder="Search"
          />
        </label>
      </div>
      <div className="w-full flex flex-col overflow-auto">
      {recentChats.map((use, index) => (
        <RecentChatLists use={use} key={use._id} handleStart={handleStart} />
      ))}
      </div>
    </div>
  );
}

export default Recent;

const RecentChatLists = ({ use, handleStart }) => {
  const { mate } = useMessage()

  useEffect(() => {
    if (mate === use._id) {
      console.log(mate, use._id);
    } 
  } ,[mate])
  return (
    <div
      onClick={()=>handleStart(use._id)}
      className={`flex w-full border-2 mt-4 border-blue-600/50 cursor-pointer rounded-xl
        items-center p-2 ${mate === use._id && 'bg-blue-500'}`}
    >
      {/* <img className="w-[40px] rounded-full" src={images.user} alt="" /> */}
      <div className="flex flex-col my-auto">
        <p className="font-semibold">{use.username}</p>
        <p className="text-sm">Active 5h ago</p>
      </div>
    </div>
  );
};
