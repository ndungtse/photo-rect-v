<<<<<<< HEAD
// import Mess from './mess';
import './mess.css';

function Chatflow({message}) {

  return (
    <div className="chat-flow">
      <div className="speakers send">
        <div className="speaker2 sender">
          <div className="speaker1-cont">
            <p className="text-white px-[10px] bg-slate-600 py-[5px] rounded-[20px]">mess.messagetext</p>
          </div>
        </div>
        {message.map((mess) => (
          <div className="speaker1 sender">
            <div className="speaker1-cont">
              <p id="samptext1">{mess.messagetext}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chatflow;
=======
// import Mess from './mess';
import "./mess.css";
import React, { useEffect, useState } from 'react'

function Chatflow({ username, room, socket }) {
  const [relMessages, setRelMessages]= useState([])

  const getRelMessages = async()=>{
   const res = await fetch("http://localhost:3000/messages");
   const messages = await res.json()
    const relMess = messages.filter((m) => m.room === room || m.room1 === room);
    setRelMessages(relMess)
  }

  useEffect(()=>{
    getRelMessages()
  },[socket, relMessages])

  return (
    <div className="chat-flow">
      <div className="speakers send">
        {relMessages.map((mess) => (
          <div
            key={mess.id}
            className={
              mess.author === username.name
                ? "speaker1 sender"
                : "speaker2 sender"
            }
          >
            <div className="speaker1-cont">
              <p id={mess.author === username.name ? "samptext1" : "samptext"}>
                {mess.message}
              </p>
              <p className="text-[10px] ml-4">{mess.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chatflow;
>>>>>>> refs/remotes/origin/master
