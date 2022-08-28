/* eslint-disable */
import React, { useEffect, useState} from "react";
import './style.css'
import ScrollToBottom from "react-scroll-to-bottom";
import ChatInput from "./ChatInput";
import { useMessage } from "./contexts/messageContext";
import { BiArrowBack, BiMessageDots } from 'react-icons/bi'
import { getUserById } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

function Chat({user, mate, after, roomId, setAfter}) {
    const mContextData = useMessage();
    const [muser, setMuser] = useState({profile: ''});
    const [ready, setReady] = useState(false);
    const [messages, setMessages] = useState(null);
    const { socket,setRoom, setRoom1, start, room1, relMessages, getRelMessages  } = mContextData;

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
     setMessages(mes);
    }, [relMessages]);

    useEffect(() => {
      console.log(roomId);
      if (roomId !== undefined) {
        setRoom(roomId);
        getRelMessages(roomId);
        setAfter(true);
      }
    }, []);

  return (
    <div className={`mt-2 hidden tablet:flex px-1 flex-col tablet:mx-3 ${roomId!==undefined && 'flexed'}
       tablet:px-4 py-2 shadow-md shadow-sky-200 pt-5 tablet:pt-2 w-full h-screen overflow-auto`}>
      {!after?<PreMessage />:(
        <>
      {relMessages !== null &&(
        <>
        <Link to={`/messages`}>
        <BiArrowBack
         className="m-1 text-xl cursor-pointer tablet:hidden" />
         </Link>
      <div className="w-full flex items-center justify-between">
            <div className="mes-titl-left flex items-center w-1/2">
              <div className="w-[60px] h-[50px] rounded-full overflow-hidden">
                <img className="min-h-full min-w-full object-cover" src={muser.profile} alt="" />
              </div>
              <div className="flex ml-3 w-full flex-col">
                <p className="flex w-full whitespace-nowrap">{muser.fullname}</p>
                <p id="hour-left w-full">Active&nbsp;11h&nbsp;ago</p>
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
          <OneMessage key={rel._id} rel={rel} ready={ready} user={user} />
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

const OneMessage = ({ rel, user, ready }) => {
  return (
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
                    ? "p-2 items-center justify-center mr-2 flex relative min-w-[50px] mess1 break-word "
                    : "p-2 items-center justify-center ml-2 flex relative min-w-[50px] bg-[#00000086] mess  break-word "
                }
              >
                <p className="">{rel.text}</p>
            </div>
            </div>
          </div>
  )
}

function PreMessage(){
  return(
    <div className="mt-2 w-full  mx-auto px-4 py-2 
    h-[85vh] flex flex-col items-center justify-center">
      <BiMessageDots className='text-[670%] text-zinc-700' />
      <p className="text-xl">Your Chat Messages will appear Here</p>
    </div>
  )
}
