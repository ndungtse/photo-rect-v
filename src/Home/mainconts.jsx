// import styled from 'styled-components';
import React, { useState /*, useEffect*/ } from 'react';

import './Home.css';
import getCaption from './posts/post';

function Mainconts() {
  const [count, setCount] = useState(0);

  /*  useEffect(()=>{
     handleIncrease();
   },[]) */
  const handleIncrease = () => {

  }
  // setCount(count+1)
  const increase = () => {
    setCount(count + 1)

  }
  return (
    <div className="main-contents ">
      <div className="post">
        <Form>
          <label>Post something</label>
          <input type="file" id="file" accept="image/png,jpg" /><label htmlFor="file">
            <i title='add photos' className='bx bx-image'>
            </i></label>
          <textarea type="textarea" placeholder='Say something' />
          <input type={submit} onSubmit={getCaption} value={"Post"}/>
        </Form>
      </div>

      <div className="time">
        <p>Timeline</p>
        <ul className="time-cont">
          <li className="time-item">
            <div className="t-link">All</div>
          </li>
          <li className="time-item">
            <div className="t-link">Following</div>
          </li>
          <li className="time-item">
            <div className="t-link">Newest</div>
          </li>
          <li className="time-item">
            <div className="t-link">Popular</div>
          </li>
        </ul>
      </div>
      <div className="contents">
        <div className="cont-cont ">
          <div className="cont-img ">
            <div className="img-fluid"><img src={require("./Images/other/Bitmap1.png")} alt="" /></div>
          </div>
          <div className="cont-desc">
            <div className="cont-post">
              <img src={require("./Images/subs/Bitmap.png")} alt="" />
              <span id="postname">Chloe</span>
            </div>
            <div className="react">
              <div className="react-cont">
                <input type="checkbox" id="like" />
                <label for="like" id="love" onClick={handleIncrease ? increase : count + 0}><i className='bx bxs-heart'></i></label>
                <div><span id="react-spa">{count}</span></div>
              </div>
              <div className="react-cont">
                <div id="comment"><i className='bx bxs-comment-dots'></i></div>
                <div><span id="react-spa">45</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="cont-cont ">
          <div className="cont-img ">
            <div className="img-fluid"><img src={require("./Images/other/Bitmap1.png")} alt="" /></div>
          </div>
          <div className="cont-desc">
            <div className="cont-post">
              <img src={require("./Images/subs/Bitmap.png")} alt="" />
              <span id="postname">Chloe</span>
            </div>
            <div className="react">
              <div className="react-cont">
                <input type="checkbox" id="like" />
                <label for="like" id="love" onClick={handleIncrease ? increase : count + 0}><i className='bx bxs-heart'></i></label>
                <div><span id="react-spa">{count}</span></div>
              </div>
              <div className="react-cont">
                <div id="comment"><i className='bx bxs-comment-dots'></i></div>
                <div><span id="react-spa">45</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="cont-cont ">
          <div className="cont-img ">
            <div className="img-fluid"><img src={require("./Images/other/Bitmap1.png")} alt="" /></div>
          </div>
          <div className="cont-desc">
            <div className="cont-post">
              <img src={require("./Images/subs/Bitmap.png")} alt="" />
              <span id="postname">Chloe</span>
            </div>
            <div className="react">
              <div className="react-cont">
                <input type="checkbox" id="like" />
                <label for="like" id="love" onClick={handleIncrease ? increase : !increase}><i className='bx bxs-heart'></i></label>
                <div><span id="react-spa">{count}</span></div>
              </div>
              <div className="react-cont">
                <div id="comment"><i className='bx bxs-comment-dots'></i></div>
                <div><span id="react-spa">45</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="cont-cont ">
          <div className="cont-img ">
            <div className="img-fluid"><img src={require("./Images/other/Bitmap1.png")} alt="" /></div>
          </div>
          <div className="cont-desc">
            <div className="cont-post">
              <img src={require("./Images/subs/Bitmap.png")} alt="" />
              <span id="postname">Chloe</span>
            </div>
            <div className="react">
              <div className="react-cont">
                <input type="checkbox" id="like" />
                <label for="like" id="love" onClick={handleIncrease ? increase : count + 0}><i className='bx bxs-heart'></i></label>
                <div><span id="react-spa">{count}</span></div>
              </div>
              <div className="react-cont">
                <div id="comment"><i className='bx bxs-comment-dots'></i></div>
                <div><span id="react-spa">45</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainconts;