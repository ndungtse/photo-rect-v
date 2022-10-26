import React from "react";
import "./Home.css";
import Mainconts from "./mainconts";
import { useApp } from "../contexts/AppContext";
import Nav from "./Nav";

function Main() {
  const { isDark } = useApp()
  return (
    
    <div className={`main-side w-full tab:flex-row flex flex-col-reverse ${isDark && 'dark-theme'}`}>
      <Nav active={`home`} />
      <div className="main w-full h-[86vh] tab:h-screen">
        <Mainconts />
      </div>
    </div>
  );
}

export default Main;
