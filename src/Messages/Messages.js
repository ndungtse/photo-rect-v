import React, {useState, useEffect} from 'react';
import Messprev from './mesprev';
import Messflow from './Messflow'
import Nav from '../Home/Nav';
import './mess.css';
import io from "socket.io-client";

const socket = io.connect("/* https://photocornerchat.herokuapp.com/ */");



function Messages() {
  const [usermess, setUsermess] = useState([]);
  const [username, setusername] = useState('');
  const [room, setRoom] = useState("");
  const [room1, setRoom1] = useState("");
  const [inputMessage, setMessage] = useState("");
  // const [message, setSend] = useState([]);

  // useEffect(() => {
  //   getMessage();
  // }, []);

  // const getMessage = async () => {
  //   const res = await fetch("https://localhost:3000/messages")
  //   const messages = await res.json()
  //   console.log(messages);
  //   setSend(messages)
  // };
  const getUsers= async() =>{
    const res = await fetch("https://localhost:3000/users");
    const users = await res.json()
    setUsermess(users)
    console.log(users);
  }

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      console.log("helle");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="m-mes">
      <Nav />
      <div className="message">
        <div className="simple-m">
          <div className="simple-view">
            <div className="chat-title">
              <p>Chats</p>
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
            <div className="px-4">
              <div className="search-mess pr-3">
                <i className="bx bx-search icon"></i>
                <input type="text" placeholder="Search messages" />
              </div>
            </div>
            <Messflow
              setRoom1={setRoom1}
              joinRoom={joinRoom}
              setRoom={setRoom}
              setusername={setusername}
              username={username}
              usermess={usermess}
              setUsermess={setUsermess}
            />
          </div>
        </div>
        <Messprev
          inputMessage={inputMessage}
          setMessage={setMessage}
          usermess={usermess}
          joinRoom={joinRoom}
          room={room}
          setRoom={setRoom}
          room1={room1}
          setRoom1={setRoom1}
          username={username}
          setusername={setusername}
          socket={socket}
          setUsermess={setUsermess}
        />
      </div>
    </div>
  );
}

export default Messages;
