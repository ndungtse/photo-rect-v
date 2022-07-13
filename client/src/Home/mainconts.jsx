/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import React, { useState, useEffect } from "react";
import "./Home.css";
import "./side.css";
import Side from "./side";
import { getCookie } from "../contexts/RequireAuth";
import Post from "./Post";
import { usePosts } from "../contexts/PostContext";
import { BiImageAdd, BiPhotoAlbum, BiX } from "react-icons/bi";

function Mainconts() {
	const { posts } = usePosts();
	const [showPostForm, setShowPostForm] = useState(false);

	return (
		<div className="flex">
			{showPostForm ? <PostForm  setShowPostForm={setShowPostForm} /> : null}
			<div className="w-full h-[86vh] overflow-auto flex flex-col items-center">
					<div className="">
						<button onClick={()=> setShowPostForm(true)} className="text-white bg-blue-700 px-4 py-2
						cursor-pointer mt-4">Add New Post</button>
					</div>
					<>
						<div className="w-full flex flex-col items-center">
							{posts.map((item) => (
								<Post item={item} key={item._id}/>
							))}
						</div>
					</>
			</div>
			<Side />
		</div>
	);
}

export default Mainconts;

const PostForm = ({setShowPostForm}) =>{
	const { newPost, getPosts } = usePosts();
	const [imageString, setImageStr] = useState('');
	const [caption, setCaption] = useState('');
	const [preview, setPreview]= useState({state: false, url: ''});
	const [loading, setLoading] = React.useState(false);

	const previewFile = (e) => {
		const file = e.target.files[0];
		console.log(file);
		setPreview({state: true, url: URL.createObjectURL(e.target.files[0])})
		const reader = new FileReader();
		reader.addEventListener('loadend',() => {
			setImageStr(reader.result);
		});
		reader.readAsDataURL(file);
		console.log(imageString);
	}

	const submitPost = async(e) => {
		// e.preventDefault();
		setLoading(true);
	  const isdone = await newPost(caption, imageString);
	  if(isdone){
		console.log('done');
	    setShowPostForm(false);
	  }
	}

	return(
		<div className="w-full top-0 left-0 z-[10] absolute bg-black/70 
		flex flex-col items-center justify-center h-screen">
			<div onClick={()=> setShowPostForm(false)}
			 className="w-full h-screen absolute top-0 left-0 z-[15]"></div>
			<div className="flex z-20 flex-col relative w-1/3 rounded-xl p-4 min-w-[300px] bg-white">
				
					<BiX onClick={()=> setShowPostForm(false)} 
					 className="text-4xl absolute top-1 hover:text-red-600 cursor-pointer right-3" />
				<h2 className="text-center text-xl">Post Something</h2>
				<textarea onChange={(e)=> setCaption(e.target.value)}
				 className="border-2 h-[20vh] outline-none border-blue-500/70
				  p-2 w-full " placeholder="What's on your mind?" maxLength={700}>

				</textarea>
				{preview.state &&(
					<div className="w-[150px] mx-auto mt-3 h-[150px] overflow-hidden">
          				<img src={imageString} className="object-cover min-h-full min-w-full" alt="" />
          			</div>
				)}
				<div className="w-full mt-4 flex items-center justify-between">
					<label htmlFor="post" className="flex cursor-pointer text-blue-700 items-center">
						<BiImageAdd className="text-3xl" />
						<p>Add A Photo</p>
					</label>
					<ButtonSend submitPost={submitPost} setLoading={setLoading} loading={loading} />
					<input onChange={previewFile}  className="hidden" type="file" id="post" accept="image/*" />
					{/* <button onClick={submitPost}
					 className="px-4 py-2 bg-blue-600 text-white">Post</button> */}
				</div>
			</div>
		</div>
	)
}

const ButtonSend = ({loading, setLoading, submitPost}) => {
	function handleClick() {
	  setLoading(true);
	  submitPost();
	}

	return(
		<LoadingButton
          color="primary"
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
        //   startIcon={<SaveIcon />}
          variant="contained"
        >
          Post
        </LoadingButton>
	)
}