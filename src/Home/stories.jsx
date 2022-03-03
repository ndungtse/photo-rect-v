/* import { Link } from 'react-router-dom'; */
import './Home.css';


function Stories() {
    return (
        <div className='stories'>
            <div className="story-cont ">
                <div> <img src={require('./Images/Oval.png')}
                    alt='' /> <div> <span> You </span></div></div>
                <div className="story-cont">
                    <div> <img src={require("./Images/Bitmap-2.png")} alt='' /> <div> <span> Nz'gobya </span></div> </div>
                </div> < div className="story-cont">
                    <div> <img src={require("./Images/Bitmap-3.png")} alt='' /> <div> <span> Pamphile </span></div></div>
                </div> <div className="story-cont">
                    <div> <img src={require("./Images/Bitmap.png")} alt='' /> <div> <span> Audrey </span></div></div>
                </div> <div className="story-cont">
                    <div> <img src={require("./Images/other/Bitmap.png")} alt='' /> <div> <span> Chloe </span></div></div>
                </div> <div className="story-cont">
                    <div> <img src={require("./Images/other/Bitmap-2.png")} alt='' /> <div> <span> Channella </span></div></div>
                </div> <div className="story-cont">
                    <div> <img src={require("./Images/other/Bitmap-1.png")} alt='' /> <div> <span> Sam </span></div></div>
                </div> <div className="story-cont">
                    <div> <img src={require("./Images/Bitmap-1.png")} alt='' /> <div> <span> Curry </span></div></div>
                </div> <div className="story-cont">
                    <div> <img src={require("./Images/other/Group 18 Copy.png")} alt='' />  <div> <span> See all </span></div></div>
                </div>
            </div>
        </div>
    );
}

export default Stories;