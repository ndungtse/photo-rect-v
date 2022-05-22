/* eslint-disable */
import React, { useState, useEffect } from "react";
import UpTitles from "./uptitles";
import { MessageProvider } from "./contexts/messageContext";
import Unified from "./Unified";

function Messages() {
  return (
    <MessageProvider>
      <div className="w-full messages flex flex-col h-screen bg-white overflow-hidden">
        <UpTitles />
        <div className="flex">
          <Unified />
        </div>
      </div>
    </MessageProvider>
  );
}

export default Messages;
