import "./account.css";

const Follow = () => {
  return (
    <div className="fo">
      <h1 className="pl-3 pt-2">People to follow</h1>
      <div className="pt-3 p-2 grid-flow-col gap-10 grid overflow-x-auto">
        <div className="fcard flex flex-col items-center">
          <img className="w-[100%] rounded-full"
            src={require("./../Home/Images/olga.jpg")}
            alt=""
          />
          <p>Ella250</p>
          <p className="opacity-[0.7]">@ellabest</p>
          <p className="text-white hover:bg-blue-800 duration-300 px-2 rounded-sm bg-blue-600 cursor-pointer">Follow</p>
        </div>
        <div className="fcard flex flex-col items-center">
          <img className="w-[100%] rounded-full"
            src={require("./../Home/Images/olga.jpg")}
            alt=""
          />
          <p>Ella250</p>
          <p className="opacity-[0.7]">@ellabest</p>
          <p className="text-white hover:bg-blue-800 duration-300 px-2 rounded-sm bg-blue-600 cursor-pointer">Follow</p>
        </div>
        <div className="fcard flex flex-col items-center">
          <img className="w-[100%] rounded-full"
            src={require("./../Home/Images/olga.jpg")}
            alt=""
          />
          <p>Ella250</p>
          <p className="opacity-[0.7]">@ellabest</p>
          <p className="text-white hover:bg-blue-800 duration-300 px-2 rounded-sm bg-blue-600 cursor-pointer">Follow</p>
        </div>
        <div className="fcard flex flex-col items-center">
          <img className="w-[100%] rounded-full"
            src={require("./../Home/Images/olga.jpg")}
            alt=""
          />
          <p>Ella250</p>
          <p className="opacity-[0.7]">@ellabest</p>
          <p className="text-white hover:bg-blue-800 duration-300 px-2 rounded-sm bg-blue-600 cursor-pointer">Follow</p>
        </div>
        <div className="fcard flex flex-col items-center">
          <img className="w-[100%] rounded-full"
            src={require("./../Home/Images/olga.jpg")}
            alt=""
          />
          <p>Ella250</p>
          <p className="opacity-[0.7]">@ellabest</p>
          <p className="text-white hover:bg-blue-800 duration-300 px-2 rounded-sm bg-blue-600 cursor-pointer">Follow</p>
        </div>
      </div>
    </div>
  );
};
export default Follow;
