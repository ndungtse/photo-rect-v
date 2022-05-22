import React from 'react'
import { FaHome} from 'react-icons/fa'
import {  IoIosCall } from "react-icons/io";
import {BiLocationPlus} from 'react-icons/bi'

function ChatInfo() {
  return (
    <div className="w-[20%] flex flex-col mx-auto">
      <div className="w-full grid grid-cols-2">
        <div className="h-[40px] flex  items-center
        cursor-pointer justify-center border-2">
          <p className="font-bold">Details</p>
        </div>
        <div className="h-[40px] flex items-center
         cursor-pointer justify-center border-2">
          <p className="font-bold text-sm">Shared Files</p>
        </div>
      </div>
      <div className="w-full flex flex-col text-sm">
        <div className="flex items-center mt-4">
          <FaHome className="text-2xl" />
          <p className="ml-2">From Texas, USA</p>
        </div>
        <div className="flex items-center mt-4">
          <BiLocationPlus className="text-2xl" />
          <p className="ml-2">Currently working in Ohio</p>
        </div>
        <div className="flex items-center mt-4">
          <IoIosCall className="text-2xl" />
          <p className="ml-2">+1998498349</p>
        </div>
      </div>
    </div>
  ); 
}

export default ChatInfo