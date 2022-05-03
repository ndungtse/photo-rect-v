/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './Home.css';
import checkAuthorization from './../checker'



function Mainconts() {

  const [formClass, setFormClass] = useState("form1")
  const [areaClass, setAreaClass] = useState("b-area");
  const [inpuClass, setInputClass] = useState("");
  const [iniImgClass, setinImgClass] = useState("img-file");

  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();

  const [posts, setPosts] = useState()
  const [caption, setCaption] = useState('')
  const [loader, setLoader] = useState(true)
  const [user, setUser] = useState()
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


  useEffect((e) => {
    checkAuthorization()
  }, [])
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
    // console.log(image);
  }

  useEffect(() => {
    let keys = document.cookie.match(/(\w+)=/g).map(x => x.slice(0, -1))
    // console.log(keys)
    let decodedCookies = {}
    for (let i = 0; i < keys.length; i++) {
      decodedCookies[keys[i]] = document.cookie.split('; ')[i].slice(keys[i].length + 1)
    }
    decodedCookies.userInfo = decodeURIComponent(decodedCookies.userInfo)
    decodedCookies.userInfo = JSON.parse(decodedCookies.userInfo)
    console.log(decodedCookies)
    setUser(decodedCookies.userInfo)
    // console.log(decodedCookies.userInfo);
  }, [])
  const newPost = async () => {
    console.log(user);
    const username = user.needed.username
    // console.log(image);
    const api = await fetch('http://localhost:5000/post/newPost', {
      method: "POST",
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: (username),
        caption: (caption),
        imageStr: (previewSource)
      })
    })
    const data = api.json()
    getPosts()
  }
  const getPosts = async () => {
    const res = await fetch('http://localhost:5000/post/allPosts', {
      method: "GET",
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' }
    })

    const posts = await res.json()
    console.log(posts.posts);
    setPosts(posts.posts.reverse())
    setLoader(false)
    return posts
  }

  useEffect(() => {
    getPosts()
  }, [])

  useEffect(() => {
    console.log(posts);
  }, [posts])

  const handleSubmit = (e) => {
    e.preventDefault()
    newPost()
  }
  return (
    <div className="main-contents w-64">
      {loader ? <>Loading</> :
        <>
          <div className="post w-full">

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
          <div className="contents w-72">
            {
              posts.map((item) =>
                <div id='post' className='w-2/5' key={item._id}>
                  <div className='username'>{item.username}</div>
                  <div className='created'>{item.created}</div>
                  <div>
                    <img className='w-full h-81' src={item.secureUrl} alt='' />
                  </div>
                  <div>{item.caption}</div>
                  <hr></hr>
                </div>)
            }
          </div></>
      }

    </div>
  );
}

export default Mainconts;