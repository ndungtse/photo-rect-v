/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import "./Home.css";
import Side from "./side";
import Post from "./Post";
import { usePosts } from "../contexts/PostContext";
import { BiImageAdd, BiPhotoAlbum, BiX } from "react-icons/bi";
import { useApp } from "../contexts/AppContext";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

function Mainconts() {
	const { posts, getPosts } = usePosts();
	const [showPostForm, setShowPostForm] = useState(false);
	const { user } = useAuth();

	useMemo(() => {
		if (posts.length === 0) {
			getPosts();
		}
	}, []);

	useCallback(() => {
		console.log("fetching posts");
		getPosts()
	}, []);

	return (
		<div className="flex">
			{showPostForm ? <PostForm setShowPostForm={setShowPostForm} /> : null}
			<div className="w-full h-[91vh] overflow-auto flex flex-col items-center ">
				<div className="flex items-center mobile:w-2/3 w-4/5  max-w-[600px] mx-auto justify-center mt-4 min-w-[150px]">
					<Link to={`/profile`} className="flex items-center">
						<div className="flex overflow-hidden w-[40px] h-[40px] rounded-full">
							<img
								className="min-w-full min-h-full object-cover"
								src={user.profile}
								alt=""
							/>
						</div>
					</Link>
					<button
						onClick={() => setShowPostForm(true)}
						className="text-whi ml-1 border-2 truncate border-gray-500/50 w-10/12 text-start rounded-3xl bg-slate-300 hover:bg-slate-400 px-4 py-2
						cursor-pointer"
					>
						{user.username}, Create a New Post
					</button>
				</div>
				<>
					<div className="w-full flex flex-col items-center">
						{posts.map((item) => (
							<Post item={item} key={item._id} />
						))}
					</div>
				</>
			</div>
			<Side />
		</div>
	);
}

export default Mainconts;

const PostForm = ({ setShowPostForm }) => {
	const { newPost, getPosts } = usePosts();
	const [imageString, setImageStr] = useState("");
	const [caption, setCaption] = useState("");
	const [preview, setPreview] = useState({ state: false, url: "" });
	const [loading, setLoading] = React.useState(false);
	const { isDark } = useApp();

	const previewFile = (e) => {
		const file = e.target.files[0];
		console.log(file);
		setPreview({ state: true, url: URL.createObjectURL(e.target.files[0]) });
		const reader = new FileReader();
		reader.addEventListener("loadend", () => {
			setImageStr(reader.result);
		});
		reader.readAsDataURL(file);
		console.log(imageString);
	};

	const submitPost = async (e) => {
		// e.preventDefault();
		setLoading(true);
		const isdone = await newPost(caption, imageString);
		if (isdone) {
			console.log("done");
			setShowPostForm(false);
		}
	};

	return (
		<div
			className="w-full top-0 left-0 z-[20] absolute bg-black/70 
		flex flex-col items-center justify-center h-screen"
		>
			<div
				onClick={() => setShowPostForm(false)}
				className="w-full h-screen absolute top-0 left-0 z-[25]"
			></div>
			<div
				className={`flex z-30 flex-col relative mobile:w-2/3 w-11/12 max-w-[600px] rounded-xl p-4 bg-white ${
					isDark && "text-white bg-[#0a0520]"
				}`}
			>
				<BiX
					onClick={() => setShowPostForm(false)}
					className="mobile:text-4xl text-2xl absolute top-1 hover:text-red-600 cursor-pointer right-3"
				/>
				<h2 className="text-center mobile:text-xl">Post Something</h2>
				<textarea
					onChange={(e) => setCaption(e.target.value)}
					className="border-2 h-[20vh] outline-none border-blue-500/70
				  p-2 w-full bg-transparent"
					placeholder="What's on your mind?"
					maxLength={700}
				></textarea>
				{preview.state && (
					<div className="w-[150px] mx-auto mt-3 h-[150px] overflow-hidden">
						<img
							src={imageString}
							className="object-cover min-h-full min-w-full"
							alt=""
						/>
					</div>
				)}
				<div className="w-full mt-4 flex items-center justify-between">
					<label
						htmlFor="post"
						className="flex cursor-pointer text-blue-700 items-center"
					>
						<BiImageAdd className="text-3xl" />
						<p>Add A Photo</p>
					</label>
					<ButtonSend
						submitPost={submitPost}
						setLoading={setLoading}
						loading={loading}
					/>
					<input
						onChange={previewFile}
						className="hidden"
						type="file"
						id="post"
						accept="image/*"
					/>
					{/* <button onClick={submitPost}
					 className="px-4 py-2 bg-blue-600 text-white">Post</button> */}
				</div>
			</div>
		</div>
	);
};

const ButtonSend = ({ loading, setLoading, submitPost }) => {
	function handleClick() {
		setLoading(true);
		submitPost();
	}

	return (
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
	);
};
