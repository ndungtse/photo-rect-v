/* eslint-disable */
import React, { useState, useEffect } from "react";
import UpTitles from "./uptitles";
import { MessageProvider, useMessage } from "./contexts/messageContext";
import Unified from "./Unified";
import Nav from "../Home/Nav";
import { useParams } from "react-router-dom";

function Messages() {
  const { roomId } = useParams();
  const { mate } = useMessage()
  console.log(roomId, mate);
  
  return (
      <div className="w-full flex h-screen bg-white overflow-hidden">
        <Nav active={`messages`} />
        <div className="flex w-full">
          <Unified roomId={roomId} />
        </div>
      </div>
  );
}

export default Messages;
