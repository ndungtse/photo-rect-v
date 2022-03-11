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
  return (
    <div className="main-contents ">
      <div className="post">

        <form onLoad={postUtils.onLoad} onSubmit={handleSubmit} className='form1'>
          <label>Post something</label>
          <input type="file" id="file" accept="image/png,jpg" />
          <textarea className='bg-slate-300 text-black b-area' type="textarea" onInput={postUtils.getCaption} placeholder='Say something' />
          <div className='p-input w-full justify-end'>
            <label htmlFor="file" className='pfile'>
              <i title='add photos' className='bx bx-image pt-4 mr-8 img-file '>
              </i></label>
            <input placeholder='Start a post' type="text" disabled className='cursor-pointer h-[40px] mt-3 mr-3 rounded-4 ml-2'></input>
            <input type={"submit"} value={"Post"} className='px-7 mt-3 py-2 rounded-4' />
          </div>
        </form>
      </div>
      <div className="contents">
        {
          posts.map((item) =>
            <div id='post' key={item._id}>
              <div className='created'>{item.created}</div>
              <div className='userName'>{item.userName}</div>
              <div className='caption'>{item.caption}</div>{HeartRenderer}
              <hr></hr>
            </div>)
        }
      </div>
    </div>
  );
}

export default Mainconts;