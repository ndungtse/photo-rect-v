/* eslint-disable */
import React, { useState, useEffect } from "react";
import UpTitles from "./uptitles";
import { MessageProvider, useMessage } from "./contexts/messageContext";
import Unified from "./Unified";
import Nav from "../Home/Nav";
import { useParams } from "react-router-dom";
import { useUsers } from "./contexts/userContext";
import LinearLoader from "../utils/LinearProgress";

function Messages() {
  const { roomId } = useParams();
  const { mate } = useMessage()
  const { setMobile } = useUsers()
  const [ linear, setLinear ] = useState(false)
  console.log(roomId, mate);
  
  return (
      <div onClick={()=> setMobile(false)} 
      className="w-full flex h-screen bg-white overflow-hidden">
        <Nav active={`messages`} />
        <div className="flex w-full">
          <Unified roomId={roomId} setLinear={setLinear} />
        </div>
        {linear && <LinearLoader />}
      </div>
  );
}

export default Messages;
