/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
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

  // useEffect(() => {
  //   if (!posts.length) {
  // getPosts()
  //   }
  // }, [posts])

  const previewFile = () => {
    const preview = document.querySelector('.image-picked')
    // preview? console.log("Defined"):console.log('Not defined');
    const file = document.querySelector('.post-image').files[0]
    const reader = new FileReader()

    reader.addEventListener('load', () => {
      preview.src = reader.result
      console.log(reader.result);
      setImage(reader.result)
    }, false)
    if (file) {
      reader.readAsDataURL(file)
    }
    console.log(image);
  }
  const newPost = async () => {

    let userName = localStorage.getItem("userName")
    const api = await fetch('https://photocorner33.herokuapp.com/post/newPost', {
      method: "POST",
      mode:'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName: (userName),
        caption: (caption),
        imageStr: (image)
      })
    })
    const data = api.json()
    console.log(data)
  }
  const getPosts = async () => {
    const res = await fetch('https://photocorner33.herokuapp.com/post/allPosts', {
      method: "GET",
      mode:'no-cors',
      headers: { 'Content-Type': 'application/json' }
    })
    console.log(await res.json());
    const posts = await res.json()
    return posts
  }



  useEffect(() => {
    setPosts(getPosts())
  }, [])

useEffect(()=>{
  console.log(posts);
},[posts])

  const handleSubmit = (e) => {
    e.preventDefault()
    newPost()
  }
  return (
    <div className="main-contents ">
      <div className="post">
        <form onSubmit={handleSubmit} className={`${formClass}`}>
          <div className="flex items-center w-full justify-between">
            <i onClick={hidePostForm} className={`bx bx-x float-left cursor-pointer ${iniImgClass} `}></i>
            <label className="text-center ">Post something</label></div>
          <input type="file" id="file" className='post-image' accept="image/png,jpg" onChange={previewFile} />
          <img src='' width={300} height={300} className='image-picked' alt='' />
          <textarea className={`bg-slate-300 text-black ${areaClass}`} type="textarea" onChange={(e) => { setCaption(e.target.value) }} placeholder='Say something' />
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
        {/* {
          posts.map((item) =>
            <div id='post' key={item._id}>
              <div className='created'>{item.created}</div>
              <div className='userName'>{item.userName}</div>
              <hr></hr>
            </div>)
        } */}
      </div>
    </div>
  );
}

export default Mainconts;