/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./Home.css";
import "./side.css";
import {
	BiDotsHorizontalRounded,
	BiCommentDots,
	BiHeart,
	BiShare,
	BiSmile,
	BiSend,
} from "react-icons/bi";
import checks from "../checker";
import Side from "./side";

function Mainconts() {
	checks.verification();
	const [formClass, setFormClass] = useState("form1");
	const [areaClass, setAreaClass] = useState("b-area");
	const [inputClass, setInputClass] = useState("");
	const [iniImgClass, setinImgClass] = useState("img-file");

	const [fileInputState, setFileInputState] = useState("");
	const [previewSource, setPreviewSource] = useState("");
	const [selectedFile, setSelectedFile] = useState();
	const [image, setImage] = useState();

	const [posts, setPosts] = useState();
	const [caption, setCaption] = useState("");
	const [loader, setLoader] = useState(true);
	const [user, setUser] = useState();
	const [comment, setComment] = useState("");

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

	const previewFile = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewSource(reader.result);
			setImage(reader.result);
		};
		console.log(image);
	};

	useEffect(() => {
		console.log(localStorage.getItem("userInfo"));
		if (localStorage.getItem("userInfo") === null) {
		}
		setUser(JSON.parse(localStorage.getItem("userInfo")));
	}, []);

	const getPosts = async () => {
		const res = await fetch(
			"https://photocorner33.herokuapp.com/post/allPosts",
			{
				method: "GET",

				headers: {
					"Content-Type": "application/json",
					token: "Bearer " + JSON.parse(localStorage.getItem("token")),
				},
			}
		);
		const posts = await res.json();
		checks.check(res);

		console.log(res);
		setPosts(posts.posts.reverse());
		console.log(posts);
		setLoader(false);
		return posts;
	};

	useEffect(() => {
		getPosts();
	}, []);

	useEffect(() => {
		// console.log(posts);
	}, [posts]);

	const handleSubmit = (e) => {
		e.preventDefault();
		newPost();
	};
	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		previewFile(file);
		setSelectedFile(file);
		setFileInputState(e.target.value);
	};

	const newPost = async () => {
		console.log(user);
		const username = user.username;
		// console.log(image);
		const api = await fetch(
			"https://photocorner33.herokuapp.com/post/newPost",
			{
				method: "POST",

				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					username: username,
					caption: caption,
					imageStr: image,
				}),
			}
		);
		const data = await api.json();
		checks.check(data);
		console.log(data);
		setPreviewSource("");
		getPosts();
	};

	const HandleLike = async (itemID) => {
		console.log("Liking post with ID " + itemID);
		const api = await fetch(
			"https://photocorner33.herokuapp.com/post/like/" + itemID,
			{
				method: "GET",
				headers: { "Content-Type": "application/json" },

				mode: "no-cors",
			}
		);

		const res = await api.json();
		checks.check(res);

		console.log(await api.json());
		if (res.message === `Post with ID ${itemID} was liked succesfully`) {
			document
				.querySelector(`'like' + ${itemID}`)
				.classList.replace("bx-heart", "bxs-heart");
		}
		useEffect(() => {
			getPosts();
		}, [posts.filter((x) => (x._id = itemID))]);
	};

	const handleShare = async (itemID) => {
		const api = await fetch(
			"https://photocorner33.herokuapp.com/post/share/" + itemID,
			{
				method: "GET",
				headers: { "Content-Type": "application/json" },
			}
		);
		const res = await api.json();
		checks.check(res);

		console.log(res);
		if (res.message === `Post with ID ${itemID} was shared succesfully`) {
			document
				.querySelector(`'like' + ${itemID}`)
				.classList.replace("bx-share", "bxs-share");
		}
	};
	const handleComment = async (e, itemID) => {
		e.preventDefault();
		const api = await fetch(
			"https://photocorner33.herokuapp.com/post/commentPost/" + itemID,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },

				body: JSON.stringify({
					username: user.username,
					comment: comment,
				}),
			}
		);
		const res = await api.json();
		checks.check(res);
		console.log(res);
		if (res.message === `Post with ID ${itemID} was shared succesfully`) {
			document
				.querySelector(`'like' + ${itemID}`)
				.classList.replace("bx-message-dots", "bxs-message-dots");
		}
	};
	return (
		<div className="flex">
			<div className="w-full h-[86vh] overflow-auto flex flex-col items-center">
				{loader ? (
					<>Loading.....</>
				) : (
					<>
						<div className="post w-full">
							<form onSubmit={handleSubmit} className={`${formClass}`}>
								<div className="flex items-center w-full justify-between">
									<i
										onClick={hidePostForm}
										className={`bx bx-x float-left cursor-pointer ${iniImgClass} `}
									></i>

									<label className="text-center ">Post something</label>
								</div>

								<input
									type="file"
									id="file"
									className="post-image"
									accept="image/png,jpg"
									onChange={handleFileInputChange}
								/>

								{previewSource && (
									<img
										src={previewSource}
										alt="chosen"
										style={{ height: "300px" }}
									/>
								)}
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
										className={`bg-slate-300 hover:bg-slate-400 ${inputClass} cursor-pointer text-black h-[40px] px-4 mt-3 mr-3 rounded-4 ml-2 duration-300`}
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
						<div className="w-full flex flex-col items-center">
							{posts.map((item) => (
								<div key={item._id} className="  w-[60%]  items-center mt-6">
									<div className="postcard px-4 flex flex-col justify-between rounded-sm shadow-sm py-[1%] border-[1px] aspect-[9/10]">
										<div className="flex items-center justify-between">
											<div className="flex items-center">
												<img src="" alt="" />
												<div className="flex flex-col my-auto">
													<p>{item.username} </p>
													<span className="text-sm opacity-[0.7] w-full flex whitespace-nowrap">
														{item.created}
													</span>
												</div>
											</div>
											<BiDotsHorizontalRounded className="cursor-pointer text-3xl" />
										</div>
										<div className="flex flex-col w-full aspect-square">
											<p className="m-auto">{item.caption}</p>
											<img src={item.secureUrl} alt="" />
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
					</>
				)}
			</div>
			<Side />
		</div>
	);
}

export default Mainconts;
