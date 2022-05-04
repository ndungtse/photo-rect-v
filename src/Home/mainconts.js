/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './Home.css';
import { GiHeartBeats } from 'react-icons/gi'
import { check } from '../checker';
import { TextField } from '@material-ui/core';


function Mainconts() {

  const [formClass, setFormClass] = useState("form1")
  const [areaClass, setAreaClass] = useState("b-area");
  const [inputClass, setInputClass] = useState("");
  const [iniImgClass, setinImgClass] = useState("img-file");

  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [image, setImage] = useState()

  const [comment, setComment] = useState()
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



  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
      setImage(reader.result)
    };
    console.log(image);
  }

  useEffect(() => {
    console.log(localStorage.getItem('userInfo'));
    if (localStorage.getItem('userInfo') === null) {
    }
    setUser(JSON.parse(localStorage.getItem('userInfo')))
  }, [])

  const getPosts = async () => {
    const res = await fetch('https://photocorner33.herokuapp.com/post/allPosts', {
      method: "GET",
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' }
    })
    const posts = await res.json()
    check(res)
    if (posts.message === "No token generated go back login") {
      window.location.replace('/login')
    }
    console.log(posts.posts);
    setPosts(posts.posts.reverse())
    console.log(posts);
    setLoader(false)
    return posts
  }

  useEffect(() => {
    getPosts()
  }, [])

  useEffect(() => {
    // console.log(posts);
  }, [posts])

  const handleSubmit = (e) => {
    e.preventDefault()
    newPost()
  }
  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    previewFile(file)
    setSelectedFile(file);
    setFileInputState(e.target.value);
  }

  const newPost = async () => {
    console.log(user);
    const username = user.username
    // console.log(image);
    const api = await fetch('https://photocorner33.herokuapp.com/post/newPost', {
      method: "POST",
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: (username),
        caption: (caption),
        imageStr: (image)
      })
    })
    const data = await api.json()
    check(data)
    console.log(data)
    if (data.message === "No token generated go back login") {
      window.location.replace('/login')
    }
    setPreviewSource('')
    getPosts()
  }

  const HandleLike = async (itemID) => {
    console.log('Liking post with ID ' + itemID);
    const api = await fetch('https://photocorner33.herokuapp.com/post/like/' + itemID, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'no-cors'
    })

    const res = await api.json()
    check(res)

    console.log(await api.json())
    if (res.message === `Post with ID ${itemID} was liked succesfully`) {
      document.querySelector(`'like' + ${itemID}`).classList.replace('bx-heart', 'bxs-heart')
    }
    useEffect(() => {
      getPosts()
    }, [posts.filter(x => x._id = itemID)])
  }

  const handleShare = async (itemID) => {
    const api = await fetch('https://photocorner33.herokuapp.com/post/share/' + itemID, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
    const res = await api.json()
    check(res)

    console.log(res)
    if (res.message === `Post with ID ${itemID} was shared succesfully`) {
      document.querySelector(`'like' + ${itemID}`).classList.replace('bx-share', 'bxs-share')
    }
  }
  const handleComment = async (itemID) => {
    const api = await fetch('http://localhost:5000/post/comment/' + itemID, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        username: (user.username),
        comment: (comment)
      })
    })
    const res = await api.json()
    check(res)
    console.log(res)
    if (res.message === `Post with ID ${itemID} was shared succesfully`) {
      document.querySelector(`'like' + ${itemID}`).classList.replace('bx-message-dots', 'bxs-message-dots')
    }
  }
  return (
    <div className="main-contents w-64">
      {loader ? <>
        Loading.....
      </> :
        <>
          <div className="post w-full">

            <form onSubmit={handleSubmit} className={`${formClass}`}>

              <div className="flex items-center w-full justify-between">

                <i onClick={hidePostForm} className={`bx bx-x float-left cursor-pointer ${iniImgClass} `}></i>

                <label className="text-center ">Post something</label></div>

              <input type="file" id="file" className='post-image' accept="image/png,jpg" onChange={handleFileInputChange} />

              {previewSource && (
                <img
                  src={previewSource}
                  alt="chosen"
                  style={{ height: '300px' }}
                />
              )}
              <textarea className={`bg-slate-300 text-black ${areaClass}`} type="textarea" onChange={(e) => { setCaption(e.target.value) }} placeholder='Say something' />
              <div className='p-input w-full justify-end'>

                <label htmlFor="file" className='pfile'>

                  <i title='add photos' className={`bx bx-image pt-4 mr-8 ${iniImgClass} `}>

                  </i></label>

                <input onClick={showPostForm} value='Start a post' type="button"

                  className={`bg-slate-300 hover:bg-slate-400 ${inputClass} cursor-pointer text-black h-[40px] px-4 mt-3 mr-3 rounded-4 ml-2 duration-300`}></input>
                <input onClick={hidePostForm} type={"submit"} value={"Post"} className={`px-7 mt-3 py-2 rounded-4 ${iniImgClass} postsub`} />
              </div>
            </form>
          </div>
          <div className="contents w-72">
            {
              posts.map((item) =>
                <div id='post' className='flex flex-col w-2/5' key={item._id}>
                  <div className='username'>{item.username}</div>
                  <div>
                    <img className='w-full h-81' src={item.secureUrl} alt='' />
                  </div>
                  <div className='reviews flex flex-row items-center justify-around m-2'>
                    <div className='flex flex-col items-center justify-center'>
                      <i color='red' onClick={() => {
                        HandleLike(item._id)
                      }} className={`${'like' + item._id} hover:cursor-pointer bx bx-heart bx-md `}></i>
                      <p>{item.likes}</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <i className={`hover:cursor-pointer bx bx-message-dots bx-md bx-tada-hover comment`}></i>
                      <p>{item.comments.count}</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <i className={`hover:cursor-pointer bx bx-share bx-md`}></i>
                    </div>
                  </div>
                  <div className='text-gray-500 text-sm'>{item.created}</div>
                  <div>{item.caption}</div>
                  <div className='mt-2 form w-ful flex flex-row'>
                    <form onSubmit={()=>{handleComment(item._id)}} className='w-2/3'>
                        <TextField className='w-full h-24 rounded' placeholder='Type a comment here' type='text' />
                    </form>
                    <button className='w-1/3 rounded-xl font-bold h-9 text-white bg-blue-700' type='submit'>Send</button>
                  </div>
                  <hr></hr>
                </div>)
            }
          </div></>
      }

    </div>
  );
}

export default Mainconts;