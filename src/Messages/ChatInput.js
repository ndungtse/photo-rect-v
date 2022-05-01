import React, { useEffect } from 'react';
import './mess.css';

function Chatinput ({setMessage,room1, username, room, socket, inputMessage}) {
 
    const  MessageHandler = (e)=> {
        setMessage(e.target.value);

      }

        const sendMessage = async (e) => {
          e.preventDefault();
          if (inputMessage !== "") {
            const messageData = {
              id: Math.random().toString(36).substr(2, 9),
              room: room,
              room1: room1,
              author: username.name,
              message: inputMessage,
              time:
                new Date(Date.now()).getHours() +
                ":" +
                new Date(Date.now()).getMinutes(),
            }

            await socket.emit("send_message", messageData);
            const res = await fetch("http://localhost:3000/messages", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(messageData),
            });
            console.log(res);
            // setSend((list) => [...list, messageData]);
            setMessage("");
          }else{
            return
          }
        };
       useEffect(() => {
         socket.on("receive_message", (data) => {
          //  setSend((list) => [...list, data]);
          fetch("http://localhost:3000/messages", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
         });
       }, [ socket]);
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
        <input value={inputMessage} onChange={MessageHandler} id= "text" type="text" placeholder="Aa" autoComplete="off"
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
  );
}

export default Chatinput;
