import "./account.css";
import { im1 } from "./account";
const SGroup = () => {
  return (
    <div className="sgroup pt-2 pl-3">
      <h1>Groups you currently in</h1>
      <div className="flex w-[100%] pt-3 p-2 justify-start">
        <div className="g w-[20%] flex flex-col items-center">
          <img className="w-[100%]" src={im1} alt="" />
          <p>222 members</p>
          <p className="text-white hover:bg-blue-800 duration-300 px-2 rounded-sm bg-blue-600 cursor-pointer">
            View
          </p>
        </div>
      </div>
    </div>
  );
};
export default SGroup;
