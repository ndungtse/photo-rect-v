/* eslint-disable */
import React, { useEffect} from "react";
import './style.css'
import ScrollToBottom from "react-scroll-to-bottom";
import ChatInput from "./ChatInput";
import { useMessage } from "./contexts/messageContext";
import { BiMessageDots } from 'react-icons/bi'

function UniChat({user, after}) {
    const mContextData = useMessage();
    const { socket, start, room1, relMessages, getRelMessages  } = mContextData;

    useEffect(() => {
      socket.on("receive_message", (data) => {
        getRelMessages(room1);
      });
    }, [socket, start]);

  return (
    <div className="mt-2 mx-3 chat px-4 py-2 shadow-md shadow-sky-200 w-full h-screen overflow-auto">
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
      <ScrollToBottom className="mt-6 flex flex-col items-center justify-end h-[74vh] ref overflow-auto">
        {relMessages.map((rel) => (
          <div
            key={rel._id}
            className={
              rel.author === user.username
                ? `flex items-center w-full justify-end my-2 mdiv1`
                : `flex items-center w-full justify-start my-2 mdiv2`
            }
          >
            <div
              className={
                rel.author === user.username
                  ? "p-3 w-[40%] mess1 overflow-x-hidden break-words "
                  : "p-3 w-[40%] bg-slate-300 mess overflow-x-hidden  break-words "
              }
            >
              <p className="w-[90%]">{rel.text}</p>
            </div>
          </div>
        ))}
      </ScrollToBottom>
      <ChatInput/>
    </div>
  );
}

export default UniChat;

