import React, { useState, useEffect } from 'react';
import './Home.css';




function Mainconts() {
  const [formClass, setFormClass] = useState("form1")
  const [areaClass, setAreaClass] = useState("b-area");
  const [inpuClass, setInputClass] = useState("");
  const [iniImgClass, setinImgClass] = useState("img-file");
  const [image, setImage] = useState('')
  const [preview, setPreview] = useState()
  const [posts, setPosts] = useState()
  const [caption, setCaption] = useState('')


  const showPostForm = () => {
    setFormClass("form2");
    setAreaClass("area")
    setInputClass("none")
    setinImgClass("")
  }
  const hidePostForm = () => {
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

  const previewFile = () => {
    const preview = document.querySelector('#preview')
    const file = document.querySelector('#file').files[0]
    const reader = new FileReader()

    reader.addEventListener('load',()=>{
      preview.src = reader.result
    })

  }
  const getPosts = async () => {

    const onSubmit = (callback) => {

      let userName = localStorage.getItem("userName")
      fetch('https://localhost:5000/post/newPost', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          userName:(userName),
           caption:(caption),
           imageStr:(image)
         })
      })
        .then(res => res.json())
        .then(data => { console.log({ message: "All data retrieved" }); callback() })
    }

    const showPosts = async () => {
      const res = await fetch('https://localhost:5000/post/allPosts', {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
      })
      const posts = await res.json()
      console.log(res)
      return posts

    }

    setPosts(showPosts())
    let res = posts
    if (res.length) {
      setPosts(res)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    posts.onSubmit(() => {
      getPosts()
    })
  }
  return (
    <div className="main-contents ">
      <div className="post">
        <form onLoad={posts.onLoad} onSubmit={handleSubmit} className={`${formClass}`}>
          <div className="flex items-center w-full justify-between">
            <i onClick={hidePostForm} className={`bx bx-x float-left cursor-pointer ${iniImgClass} `}></i>
            <label className="text-center ">Post something</label></div>
          <input type="file" id="file" accept="image/png,jpg" onChange={previewFile} />
          <img alt=''/>
          <textarea className={`bg-slate-300 text-black ${areaClass}`} type="textarea" onChange={(e)=>{setCaption(e.target.value)}} placeholder='Say something' />
          <div className='p-input w-full justify-end'>
            <label htmlFor="file" className='pfile'>
              <i title='add photos' className={`bx bx-image pt-4 mr-8 ${iniImgClass} `}>
              </i></label>
            <input onClick={showPostForm} value='Start a post' type="button"
              className={`bg-slate-300 hover:bg-slate-400 ${inpuClass} cursor-pointer text-black h-[40px] px-4 mt-3 mr-3 rounded-4 ml-2 duration-300`}></input>
            <input onClick={hidePostForm} type={"submit"} value={"Post"} className={`px-7 mt-3 py-2 rounded-4 ${iniImgClass} postsub`} />
          </div>
        </form>
      </div>
      <div className="contents">
        {
          posts.map((item) =>
            <div id='post' key={item._id}>
              <div className='created'>{item.created}</div>
              <div className='userName'>{item.userName}</div>
              <hr></hr>
            </div>)
        }
      </div>
    </div>
  );
}

export default Mainconts;