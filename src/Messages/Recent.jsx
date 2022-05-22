/* eslint-disable */
import React from "react";
import "./style.css";
import { useUsers } from "./contexts/userContext";

function Recent({ startChat }) {
  const { users, user, setUsers } = useUsers();

  const recentChats = users.filter((u) => u.id !== user.id);

  return (
    <div className="flex flex-col items-center p-4 w-[23%] ">
      <div className="flex justify-between w-full items-center px-4">
        <h2 className="font-bold text-2xl">Chats</h2>
        <i className="text-white bx bx-plus bg-blue-600 p-1 rounded-full cursor-pointer"></i>
      </div>
      <div className="flex items-center px-2">
        <p className="font-bold text-">DIRECT</p>
        <p className="font-bold text- ml-4">TEAMS</p>
      </div>
      <div className="search flex w-full justify-center p-2 mt-5 rounded-3xl">
        <label htmlFor="" className="flex items-center">
          <img className="w-[20px]" src={images.finduser} alt="" />
          <input
            className="outline-none border-none w-[100px] px-2 ml-3 focus:ring-1 focus:ring-blue-300"
            type="text"
            placeholder="Search"
          />
        </label>
      </div>
      {recentChats.map((use, index) => (
        <RecentChatLists use={use} key={index} startChat={startChat} />
      ))}
    </div>
  );
}

export default Recent;

const RecentChatLists = ({ use, startChat }) => {
  return (
    <div
      onClick={()=>startChat(use.id)}
      className="flex w-full mcard mt-6 cursor-pointer rounded-xl
        items-center p-2"
    >
      <img className="w-[40px] rounded-full" src={images.user} alt="" />
      <div className="flex flex-col my-auto">
        <p className="font-bold">{use.firstname}</p>
        <p className="text-sm">Hi, how are you</p>
      </div>
    </div>
  );
};
