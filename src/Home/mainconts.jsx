import Heart from 'react-animated-heart';
import React, { useState, useEffect } from 'react';
import './Home.css';
import postUtils from './posts/post';


 function HeartRenderer() {
  const [isClick, setClick] = useState(false);
  return (
    <div className="App">
      <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
    </div>
  );
}



function Mainconts() {
  const [posts, setPosts] = useState([]);

  // setPosts(postUtils.showPosts())


  useEffect(() => {
    if (!posts.length) {
      getPosts()
    }
  }, [posts])

  const getPosts = async () => {
    let res = await postUtils.showPosts()
    if (res.length) {
      setPosts(res)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postUtils.onSubmit(() => {
      getPosts()
    })
  }
  // // setCount(count+1)
  // const increase = () => {
  //   setCount(count + 1)
  // }
  return (
    <div className="main-contents ">
      <div className="post">
        <form onLoad={postUtils.onLoad} onSubmit={handleSubmit}>
          <label>Post something</label>
          <input type="file" id="file" accept="image/png,jpg" /><label htmlFor="file">
            <i title='add photos' className='bx bx-image'>
            </i></label>
          <textarea type="textarea" onInput={postUtils.getCaption} placeholder='Say something' />
          <input type={"submit"} value={"Post"} />
        </form>
      </div>
      {/* <div onLoad={postUtils.onLoad} className="contents">
        <input onLoadStart={postUtils.showPosts} onClick={postUtils.showPosts} value={'See posts'}></input>
      </div> */}
      <div className="contents">
        {
          posts.map((item) =>
            <div id='post' key={item._id}>
              <div className='created'>{item.created}</div>
              <div className='userName'>{item.userName}</div>
              <div className='caption'>{item.caption}</div>{HeartRenderer}
              <hr></hr>
              {/* <div><input type="checkbox" id="heart"><label for="heart" id="heart-label">&#9829</label></input></div> */}<div><input type="checkbox" id="heart"/><label htmlFor="heart" id='heart-label' ></label></div>
            </div>)
        }
      </div>
    </div>
  );
}

export default Mainconts;