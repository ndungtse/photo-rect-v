/* eslint-disable */
import React, {useState, useEffect} from 'react'
import './mess.css'
import { useMessage } from './contexts/messageContext'
import { useAuth } from '../contexts/AuthContext';


function ChatInput() {
  const [inputMessage, setInputMessage] = useState("")

  const mContextData = useMessage()
  const { socket, start, setStart, getRelMessages, relMessages, room, mate, setRelMessages } = mContextData
  const { user } = useAuth();

  const handleInputChange = (e)=>{
    setInputMessage(e.target.value);
  }

  const sendMessage = async (e)=>{
    e.preventDefault();
    if (inputMessage !== "") {
      const messageData = {
        room: user._id+mate,
        room1: mate+user._id,
        author: user.username,
        text: inputMessage,
        time:  new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      setRelMessages([...relMessages, messageData]);
      setInputMessage("");
      console.log(messageData);
      await socket.emit("send_message", messageData);
      console.log(messageData);
      const res = await fetch(
				"https://zamuka.onrender.com/hidden/messages/newMessage",
				{
					method: "POST",
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify(messageData),
				}
			);
      const data =await res.json();
      console.log(data);
      setStart(!start)
      console.log('sent');
      getRelMessages(room);
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
        <div><i title="send a sticker" className="bx hidden tablet:flex bxs-sticker bl"></i></div>
        <div><i title="add a gif" className="bx hidden tablet:flex bxs-file-gif bl"></i></div>
      </div>
      <div className="input-m container border-2 ml-1 ">
        <input value={inputMessage} onChange={handleInputChange} id= "text" type="text" placeholder="Aa" autoComplete="off"
          />
        <div><i className="bx bxs-smile pt-1"></i></div>
      </div>
      <div className="send-li">
        <div><i className="fas fa-thumbs-up"></i></div>
        <button onClick={sendMessage}
         id="send" href="index.html"
         type=''><p className='tablet:flex hidden'>send</p>
            <i title="send" className='bx text-xl tablet:text-base bxs-send'></i></button>
      </div>
      </form>
  </div>
  )
}

export default ChatInput