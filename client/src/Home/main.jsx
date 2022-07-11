import React from "react";
import "./Home.css";
import Stories from "./stories";
import Mainconts from "./mainconts";

function Main() {
  return (
    
    <div className="main-side">
      <div className="main w-full h-screen">
        <Stories />
        <Mainconts />
      </div>
    </div>
  );
}

export default Main;
