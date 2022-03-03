// import styled from 'styled-components';
// import React, { useState /*, useEffect*/ } from 'react';
// import { Form } from 'react-bootstrap';

import './Home.css';
import postUtils from './posts/post';


function Mainconts() {
  // const [count, setCount] = useState(0);

  /*  useEffect(()=>{
     handleIncrease();
   },[]) */
  // const handleIncrease = () => {

  // }
  // // setCount(count+1)
  // const increase = () => {
  //   setCount(count + 1)
  // }
  return (
    <div className="main-contents ">
      <div className="post">
        <form onLoad={postUtils.onLoad} onSubmit={postUtils.onSubmit}>
          <label>Post something</label>
          <input type="file" id="file" accept="image/png,jpg" /><label htmlFor="file">
            <i title='add photos' className='bx bx-image'>
            </i></label>
          <textarea type="textarea" onInput={postUtils.getCaption} placeholder='Say something' />
          <input type={"submit"} value={"Post"} />
        </form>
      </div>
      <div onLoad={postUtils.onLoad} className="contents">
        <input onLoadStart={postUtils.showPosts} onClick={postUtils.showPosts} value={'See posts'}></input>
      </div>
    </div>
  );
}

export default Mainconts;