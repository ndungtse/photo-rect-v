import React from "react";
// import images from "../../utilities/images";

function UpTitles() {
  return (
    <div className="flex items-center justify-between px-3 h-[80px] shadow shadow-blue-400">
      <div className="flex items-center w-1/2 px-3">
        <i className="cursor-pointer bx bxs-user text-blue-600 p-1 px-2 duration-300 ml-2 rounded-full text-2xl hover:bg-stone-300"></i>
        <i className="cursor-pointer bx bxs-group p-1 px-2 duration-300 ml-2 rounded-full text-2xl hover:bg-stone-300"></i>
        <i className="cursor-pointer bx bxs-phone p-1 px-2 duration-300 ml-2 rounded-full text-2xl hover:bg-stone-300"></i>
        <i className="cursor-pointer bx bxs-video p-1 px-2 duration-300 ml-2 rounded-full text-2xl hover:bg-stone-300"></i>
        <div className="flex items-center ml-3 cursor-pointer">
          {/* <img className="w-[40px]" alt="" /> */}
          <div className="flex flex-col">
            <p className="font-bold">Mark Atkinson</p>
            <p className="text-sm">Last seen 13 hours ago</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <i className="bx bx-cog p-1 px-2 duration-300 ml-2 rounded-full text-2xl hover:bg-stone-300 text-blue-800 cursor-pointer"></i>
        <i className="bx bx-cog p-1 px-2 duration-300 ml-2 rounded-full text-2xl hover:bg-stone-300 text-blue-800 cursor-pointer"></i>
        {/* <img className="w-[40px] ml-3  cursor-pointer" src={images.user} alt="" /> */}
      </div>
    </div>
  );
}

export default UpTitles;
