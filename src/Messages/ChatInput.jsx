/* eslint-disable */
import React, {useState, useEffect} from 'react'
import './mess.css'
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
      const res = await fetch("https://zamuka.herokuapp.com/hidden/messages/newMessage", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(messageData),
      });
      const data =await res.json();
      console.log(data);
      setStart(!start)
      console.log('sent');
      getRelMessages(room);
      setInputMessage("");
    } else {
      return;
    }
  }

  return (
    <div className="chat-inputs md:container md:mx-auto">
      <form action="" className="messform pr-4">
      <div className="inputs-icon">
        <div title="show more options"><i className="bx bxs-plus-circle bl"></i></div>
        
        <label htmlFor="file-input"><i title="attach file" className="bx bxs-file-plus bl"></i></label>
        <input type="file" id="file-input" accept="image/png, image/jpg" />
        <div><i title="send a sticker" className="bx bxs-sticker bl"></i></div>
        <div><i title="add a gif" className="bx bxs-file-gif bl"></i></div>
      </div>
      <div className="input-m container ">
        <input value={inputMessage} onChange={handleInputChange} id= "text" type="text" placeholder="Aa" autoComplete="off"
          />
        <div><i className="bx bxs-smile pt-1"></i></div>
      </div>
      <div className="send-li">
        <div><i className="fas fa-thumbs-up"></i></div>
        <button onClick={sendMessage}
         id="send" href="index.html"
         type=''>send
            <i title="send" className='bx bxs-send'></i></button>
      </div>
      </form>
  </div>
  )
}

export default ChatInput