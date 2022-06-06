import "./side.css";
import "./Home.css";
import { Link } from "react-router-dom";

function Follow({ handleShowRe }) {
  return (
    <div className="flex">
      <div className=" flex items-center px-2">
        <div className="img-f">
          <div>
            <img src={require("./Images/another/Bitmap.png")} alt="" />
          </div>
        </div>
        <div className="img-des">
          <div>
            <p>{`fullName`}</p>
            <p>{`userName)`}</p>
          </div>
        </div>
      </div>
      <Link to="/profile">
        {" "}
        <div className="follow-btn">
          <div onClick={handleShowRe}>View profile</div>
        </div>
      </Link>
    </div>
  );
}

export default Follow;
