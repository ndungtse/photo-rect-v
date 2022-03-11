import Heart from 'react-animated-heart';
import React, { useState, useEffect, useRef } from 'react';
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
  const [formClass, setFormClass] = useState("form1")
  const [areaClass, setAreaClass] = useState("b-area");
  const [inpuClass, setInputClass] = useState("");
  const [iniImgClass, setinImgClass] = useState("img-file");

  const [posts, setPosts] = useState([]);

  const showPostForm = () =>{
    setFormClass("form2");
    setAreaClass("area")
    setInputClass("none")
    setinImgClass("")
  }
  const hidePostForm = () =>{
    setFormClass("form1");
    setAreaClass("b-area")
    setInputClass("")
    setinImgClass("img-file")
  }

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
        <form onLoad={postUtils.onLoad} onSubmit={handleSubmit} className={`${formClass}`}>
          <div className="flex items-center w-full justify-between">
            <i onClick={hidePostForm} className={`bx bx-x float-left cursor-pointer ${iniImgClass} `}></i>
          <label className="text-center ">Post something</label></div> 
          <input type="file" id="file" accept="image/png,jpg" />
          <textarea className={`bg-slate-300 text-black ${areaClass}`} type="textarea" onInput={postUtils.getCaption} placeholder='Say something' />
          <div className='p-input w-full justify-end'>
          <label htmlFor="file" className='pfile'>
            <i title='add photos' className={`bx bx-image pt-4 mr-8 ${iniImgClass} `}>
            </i></label>
            <input onClick={showPostForm}  value='Start a post' type="button" 
            className={`bg-slate-300 hover:bg-slate-400 ${inpuClass} cursor-pointer text-black h-[40px] px-4 mt-3 mr-3 rounded-4 ml-2 duration-300`}></input>
          <input onClick={hidePostForm} type={"submit"} value={"Post"} className={`px-7 mt-3 py-2 rounded-4 ${iniImgClass} postsub`}/>
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
              {/* <div><input type="checkbox" id="heart"><label for="heart" id="heart-label">&#9829</label></input></div> */}<div><input type="checkbox" id="heart"/><label htmlFor="heart" id='heart-label' ></label></div>
            </div>)
        }
      </div>
    </div>
  );
}

export default Mainconts;