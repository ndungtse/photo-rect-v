import React, { useState, useEffect } from "react";
import "./Home.css";
import {
  BiDotsHorizontalRounded,
  BiCommentDots,
  BiHeart,
  BiShare,
  BiSmile,
  BiSend
} from "react-icons/bi";

function Mainconts() {
  const [formClass, setFormClass] = useState("form1");
  const [areaClass, setAreaClass] = useState("b-area");
  const [inpuClass, setInputClass] = useState("");
  const [iniImgClass, setinImgClass] = useState("img-file");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState();
  const [posts, setPosts] = useState([]);
  const [caption, setCaption] = useState("");

  const showPostForm = () => {
    setFormClass("form2");
    setAreaClass("area");
    setInputClass("none");
    setinImgClass("");
  };
  const hidePostForm = () => {
    setFormClass("form1");
    setAreaClass("b-area");
    setInputClass("");
    setinImgClass("img-file");
  };

  const previewFile = () => {
    const preview = document.querySelector("#preview");
    const file = document.querySelector("#file").files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      preview.src = reader.result;
    });
  };

  const onSubmit = () => {
    let username = localStorage.getItem("username");
    fetch("http://localhost:5000/post/newPost", {
      method: "POST",
      credentials: 'include',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        caption: caption,
        imageStr: image,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log({ message: "All data retrieved" });
      });
  };

  const showPosts = async () => {
    const res = await fetch(
      "http://localhost:5000/post/allPosts",
      {
        method: "GET",
        credentials: 'include',
        headers: { "Content-Type": "application/json" },
      }
    );
    const posts = await res.json();
    setPosts(posts);
  };
  console.log(posts);

  useEffect(() => {
    showPosts();
  }, []);

  return (
    <div className="main-contents ">
      <div className="post">
        <form className={`${formClass}`}>
          <div className="flex items-center w-full justify-between">
            <i
              onClick={hidePostForm}
              className={`bx bx-x p-1 float-left cursor-pointer ${iniImgClass} `}
            ></i>
            <label className="text-center ">Post something</label>
          </div>
          <input
            type="file"
            id="file"
            accept="image/png,jpg"
            onChange={previewFile}
          />
          <img alt="" />
          <textarea
            className={`bg-slate-300 text-black ${areaClass}`}
            type="textarea"
            onChange={(e) => {
              setCaption(e.target.value);
            }}
            placeholder="Say something"
          />
          <div className="p-input w-full justify-end">
            <label htmlFor="file" className="pfile">
              <i
                title="add photos"
                className={`bx bx-image pt-4 mr-8 ${iniImgClass} `}
              ></i>
            </label>
            <input
              onClick={showPostForm}
              value="Start a post"
              type="button"
              className={`bg-slate-300 hover:bg-slate-400 ${inpuClass} cursor-pointer text-black h-[40px] px-4 mt-3 mr-3 rounded-4 ml-2 duration-300`}
            ></input>
            <input
              onClick={hidePostForm}
              type={"submit"}
              value={"Post"}
              className={`px-7 mt-3 py-2 rounded-4 ${iniImgClass} postsub`}
            />
          </div>
        </form>
      </div>
      <div className="contents  flex-col items-center w-full felx">
        {posts.map((post) => (
          <div key={post._id} className="  w-[60%]  items-center mt-6">
            <div className="postcard px-4 flex flex-col justify-between rounded-sm shadow-sm py-[1%] border-[1px] aspect-[9/10]">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src="" alt="" />
                  <div className="flex flex-col my-auto">
                    <p>{post.username} </p>
                    <span className="text-sm opacity-[0.7] w-full flex whitespace-nowrap">
                      {post.created}
                    </span>
                  </div>
                </div>
                <BiDotsHorizontalRounded className="cursor-pointer text-3xl" />
              </div>
              <div className="flex flex-col w-full aspect-square">
                <p className="m-auto">{post.caption}</p>
                <img src="" alt="" />
              </div>
              <div className=" flex items-center text-2xl py-2">
                <BiHeart className="ml-4 cursor-pointer" />
                <BiCommentDots className="ml-4 cursor-pointer" />
                <BiShare className="ml-4 cursor-pointer" />
              </div>
              <div className="flex py-1 px-2 items-center rounded-3xl border-[2px]">
                <BiSmile className="text-2xl cursor-pointer" />
                <input
                  className="bg-transparent outline-none px-2 w-full"
                  type="text"
                  placeholder="Add a comment"
                />
                <BiSend className="text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mainconts;
