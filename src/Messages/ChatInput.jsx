import React from 'react';
import './mess.css';

function Chatinput ({setMessage, message, setSend, inputMessage, setStatus}) {
 
    const  MessageHandler = (e)=> {
        console.log(e.target.value);
        setMessage(e.target.value);

      }
      const submitMessage = (e) => {
        if (inputMessage==="") {
          alert("Please enter a message")
        }else {
          e.preventDefault();
        setSend([ 
            ...message, {messagetext: inputMessage, id: Math.random()*1000},
        ]);
        setMessage("");
        }

    } 
   /*  const triggerEnter = (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    } */

  return (
    <div className="chat-inputs">
      <div className="inputs-icon">
        <div title="show more options"><i className="bx bxs-plus-circle bl"></i></div>
        <label htmlFor="file-input"><i title="attach file" className="bx bxs-file-plus bl" onClick="sendPhoto()"></i></label>
        <input type="file" id="file-input" accept="image/png, image/jpg" />
        <div><i title="send a sticker" className="bx bxs-sticker bl"></i></div>
        <div><i title="add a gif" className="bx bxs-file-gif bl"></i></div>
      </div>
      <div className="input-m">
        <input value={inputMessage} onChange={MessageHandler} id= "text" type="text" placeholder="Aa" autoComplete="off"
          />
        <div><i className="bx bxs-smile"></i></div>
      </div>
      <div className="send-li">
        <div><i className="fas fa-thumbs-up"></i></div>
        <button onClick={submitMessage} id="send" href="index.html">send
            <i title="send" className='bx bxs-send'></i></button>
      </div>
  </div>
  );
}

export default Chatinput;
