/* eslint-disable */
import React, { useState, useEffect } from "react";
import UpTitles from "./uptitles";
import { MessageProvider } from "./contexts/messageContext";
import Unified from "./Unified";
import Nav from "../Home/Nav";

function Messages() {
  return (
    <MessageProvider>
      <div className="w-full flex h-screen bg-white overflow-hidden">
        <Nav active={`messages`} />
        <div className="flex w-full">
          <Unified />
        </div>
      </div>
    </MessageProvider>
  );
}

export default Messages;
