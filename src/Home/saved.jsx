import React from 'react';
import './Home.css';
import './side.css';

function Saved() {
  return ( 
    <div className="saved">
      <div className="savetop">
        <p>You saved</p>
        <div><p>See all</p></div>
      </div>
      <div className="savedcont">
        <div className="contcont">
          <img src={require("./Images/other/Bitmap-4.png")} alt="" />
        </div>
        <div className="contcont">
          <img src={require("./Images/other/Bitmap-5.png")} alt="" />
        </div>
        <div className="contcont">
          <img src={require("./Images/other/Bitmap-6.png")} alt="" />
        </div>
        <div className="contcont">
          <img src={require("./Images/other/Bitmap-3.png")} alt="" />
        </div>
      </div>
  </div>
  );
}

export default Saved;
