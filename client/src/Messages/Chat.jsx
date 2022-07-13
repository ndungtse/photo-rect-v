/* eslint-disable */
import React, { useEffect, useState} from "react";
import './style.css'
import ScrollToBottom from "react-scroll-to-bottom";
import ChatInput from "./ChatInput";
import { useMessage } from "./contexts/messageContext";
import { BiMessageDots } from 'react-icons/bi'
import { getUserById } from "../contexts/AuthContext";

function Chat({user, mate, after}) {
    const mContextData = useMessage();
    const [muser, setMuser] = useState({profile: ''});
    const [ready, setReady] = useState(false);
    const [messages, setMessages] = useState([]);
    const { socket, start, room1, relMessages, getRelMessages  } = mContextData;

    useEffect(() => {
      socket.on("receive_message", (data) => {
        getRelMessages(room1);
      });
    }, [socket, start]);

    const getMate = async () => {
      const mat = await getUserById(mate);
      setMuser(mat);
      setReady(true);
    }

    useEffect(() => {
     getMate();
     const mes = relMessages.reverse();
     console.log(mes, relMessages);
     setMessages(mes);
    }, [after, relMessages]);

  return (
    <div className="mt-2 mx-3 chat px-4 py-2 shadow-md shadow-sky-200 w-full h-screen overflow-auto">
      {!after?<PreMessage />:(
        <>
      {relMessages.length > 0 &&(
        <>
      <div className="mes-prev-title">
            <div className="mes-titl-left">
              <div>
              <div id="left-title-img">
              </div>
              </div>
              <div id="left-title-img-desc">
                <div><p>Ishimwe&nbsp;Christian</p></div>
                <div><p id="hour-left">Active&nbsp;11h&nbsp;ago</p></div>
              </div>
            </div>
            <div className="mes-title-left-ico">
              <div ><i className="bx bxs-phone icon"></i></div>
              <div ><i className="bx bxs-video icon"></i></div>
              <div ><i className="bx bxs-info-circle icon"></i></div>
            </div>
          </div>
      <div className="w-full flex justify-center text-sm items-center mt-6">
        <p>Today 12:05 am</p>
      </div>
      <ScrollToBottom className="mt-6 flex text-white flex-col items-center justify-end h-[74vh] ref overflow-auto">
        {messages.map((rel) => (
          <div
            key={rel._id}
            className={
              rel.author === user.username
                ? `flex items-center w-full justify-end my-2 mdiv1`
                : `flex items-center w-full justify-start my-2 mdiv2`
            }
          > 
          <div className={`flex rowcont w-[75%] ${rel.author === user.username && "rowrev"}`}>
              {rel.author !== user.username && (
              ready && (<div className="text-black w-[40px] h-[40px] rounded-full">
                <img className="min-h-full rounded-full min-w-full object-cover" src={muser.profile} alt="" />
              </div>))}
              <div
                className={
                  rel.author === user.username
                    ? "p-3 mr-2 flex relative min-w-[50px] mess1 break-word "
                    : "p-3 ml-2 flex relative min-w-[50px] bg-[#00000086] mess  break-word "
                }
              >
                <p className="w-[90%]">{rel.text}</p>
            </div>
            </div>
          </div>
        ))}
      </ScrollToBottom>
      <ChatInput/>
      </>
      )}
      </>
     )}
    </div>
  );
}

export default Chat;

function PreMessage(){
  return(
    <div className="mt-2 chat mx-auto px-4 py-2 w-[50%] 
    h-[85vh] flex flex-col items-center justify-center">
      <BiMessageDots className='text-[670%] text-zinc-700' />
      <p className="text-xl">Your Chat Messages will appear Here</p>
    </div>
  )
}
