import React from "react";
import "./Home.css";
import Stories from "./stories";
import Mainconts from "./mainconts";
import { useApp } from "../contexts/AppContext";

function Main() {
  const { isDark } = useApp()
  return (
    
    <div className={`main-side w-full ${isDark && 'dark-theme'}`}>
      <div className="main w-full h-screen">
        <Stories />
        <Mainconts />
      </div>
    </div>
  );
}

export default Main;
