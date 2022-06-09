/* eslint-disable */
import React from "react";
import "./style.css";
import { useUsers } from "./contexts/userContext";
import { BiSearch } from 'react-icons/bi'

function Recent({ startChat }) {
  const { users, user, setUsers } = useUsers();

  const recentChats = users.filter((u) => u.id !== user.id);

  return (
    <div className="flex flex-col items-center p-4 w-[30%] ">
      <div className="flex justify-between w-full items-center px-4">
        <h2 className="font-bold text-2xl">Chats</h2>
        <div className="chat-icons">
                <div>
                  <i className="bx bx-dots-horizontal-rounded icon"></i>
                </div>
                <div>
                  <i className="bx bxs-message-square-edit"></i>
                </div>
                <div>
                  <i className="bx bxs-video-plus icon"></i>
                </div>
              </div>
      </div>
      <div className=" border-2 border-blue-700 flex w-full justify-center p-2 mt-5 rounded-3xl">
        <label htmlFor="" className="flex items-center">
          <BiSearch className="text-2xl"/>
          <input
            className="outline-none border-none w-full px-2 ml-3 focus:border-b-2 focus:border-b-blue-300"
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
      className="flex w-full border-2 mt-4 cursor-pointer rounded-xl
        items-center p-2"
    >
      {/* <img className="w-[40px] rounded-full" src={images.user} alt="" /> */}
      <div className="flex flex-col my-auto">
        <p className="font-bold">{use.firstname}</p>
        <p className="text-sm">Hi, how are you</p>
      </div>
    </div>
  );
};
