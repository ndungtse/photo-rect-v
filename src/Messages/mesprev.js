import React, { useState, useEffect } from 'react';
import Chatflow from './chatflow';
import Chatinput from './ChatInput';
import './mess.css';

function Messprev() {
  const [inputMessage, setMessage] = useState("");
  const [message, setSend] = useState([]);
  return (
    <div className="mess-prev">
        <div className="prev-content">
          <div className="mes-prev-title">
            <div className="mes-titl-left">
              <div>
              <div id="left-title-img">
                <img src={require("./../Home/Images/Bitmap-2.png")} alt="" />
              </div>
              </div>
              <div id="left-title-img-desc">
                <div><p>Ishimwe&nbsp;Christian</p></div>
                <div><p id="hour-left">Active&nbsp;11h&nbsp;ago</p></div>
              </div>
            </div>
            <div className="mes-title-left-ico">
              <div><i className="bx bxs-phone icon"></i></div>
              <div><i className="bx bxs-video icon"></i></div>
              <div><i className="bx bxs-info-circle icon"></i></div>
            </div>
          </div>
          <Chatflow message={message}
                    setSend={setSend}/>
          <Chatinput inputMessage={inputMessage}
             setMessage={setMessage}
             message={message}
             setSend={setSend}/> 
        </div>
    </div>
  );
}

export default Messprev;
