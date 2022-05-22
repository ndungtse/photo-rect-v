/* eslint-disable */
import React, {useState, useEffect} from 'react'
import { BiSmile, BiMicrophone } from 'react-icons/bi'
import { FaPaperclip, FaTelegramPlane } from "react-icons/fa"; 
import { useMessage } from './contexts/messageContext'
import { useUsers } from "./contexts/userContext";


function ChatInput() {
  const [inputMessage, setInputMessage] = useState("")

  const mContextData = useMessage()
  const { socket, start, setStart, getRelMessages, room } = mContextData
  const { user } = useUsers();

  const handleInputChange = (e)=>{
    setInputMessage(e.target.value);
  }

  const sendMessage = async (e)=>{
    e.preventDefault();
    if (inputMessage !== "") {
      const messageData = {
        room: mContextData.room,
        room1: mContextData.room1,
        author: user.firstname,
        text: inputMessage,
        time:  new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      await fetch("https://zamuka.herokuapp.com/hidden/messages/newMessage", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(messageData),
      });
      setStart(!start)
      console.log('sent');
      getRelMessages(room);
      setInputMessage("");
    } else {
      return;
    }
  }

  return (
    <div className=' border-t-2 flex py-1 px-3 mt-6'>
        <form 
        onSubmit={sendMessage}
        className="flex w-full items-center justify-between">
            <div className="w-[70%] flex items-center p-2 mt-2 rounded-3xl bg-stone-300">
                <BiSmile className='text-2xl cursor-pointer' />
                <input
                value={inputMessage}
                onChange={handleInputChange}
                 className='px-3 w-full outline-none border-none bg-transparent'
                 type="text" placeholder='Type message...' />
            </div>
            <div className="flex items-center">
                <BiMicrophone className='text-2xl cursor-pointer' />
                <FaPaperclip className='text-2xl ml-2 cursor-pointer' />
                <FaTelegramPlane className='text-3xl text-white p-1 ml-2 rounded-full bg-cyan-600 cursor-pointer' />
            </div>
        </form>
    </div>
  )
}

export default ChatInput