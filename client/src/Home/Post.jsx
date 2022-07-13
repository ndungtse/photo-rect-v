import React, { useEffect } from "react";
import {
	BiDotsHorizontalRounded,
	BiCommentDots,
	BiHeart,
	BiShare,
	BiSmile,
	BiSend,
} from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { getUserById } from "../contexts/AuthContext";
import { usePosts } from "../contexts/PostContext";

const Post = ({item}) => {
	const [user, setUser] = React.useState(undefined);
	const [liked, setLiked] = React.useState(false);
	const [likesData, setLikesData] = React.useState(0);
	const { likePost, unlikePost, posts, setPosts, getAllPostDataById ,commentOnPost, getLikesDataByPost } = usePosts();
	const [comment, setComment] = React.useState("");

	const posterImage =async(userID) => {
		const user = await getUserById(userID)
		setUser(user);
	}

	const handleLike = () => {
		if (liked) {
			unlikePost(item._id);
			setPosts(posts.map((post) => {
				if (post._id === item._id) {
					return {
						...post,
						likes: post.likes - 1,

					}
				}
				return post;
			}));
		}else{
			likePost(item._id);
			setPosts(posts.map((post) => {
				if (post._id === item._id) {
					return {
						...post,
						likes: post.likes + 1,

					}
				}
				return post;
			}));
		}
		setLiked(!liked);
	}

	const handleComment = () => {
		commentOnPost(item._id, comment);
		setComment("");
	}

	React.useEffect(() => {
		posterImage(item.user);
		setLikesData(getAllPostDataById(item._id));
	}, []);

	// useEffect(() => {
	// 	for(let i = 0; i < post.likes)

	return (
		<>{user !== undefined && (
		<div key={item._id} className="  w-[60%]  items-center mt-6">
			<div className="postcard px-4 flex flex-col justify-between rounded-sm shadow-sm py-[1%] border-[1px] aspect-[9/10]">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<div className="w-[50px] rounded-full h-[50px] overflow-hidden">
							<img className="min-h-full min-w-full object-cover" src={user.profile} alt="" />
						</div>
						<div className="flex ml-2 flex-col my-auto">
							<p>{user.username} </p>
							<span className="text-sm opacity-[0.7] w-full flex whitespace-nowrap">
								{item.date.split("T")[0]}
							</span>
						</div>
					</div>
					<BiDotsHorizontalRounded className="cursor-pointer text-3xl" />
				</div>
				<div className="flex flex-col w-full aspect-square">
					<p className="m-auto">{item.caption}</p>
					<img src={item.image_url} alt="" />
				</div>
				<div className=" flex items-center text-2xl py-2">
					{liked?(<div className="flex items-center">
					<FaHeart onClick={handleLike}
					className="ml-4 cursor-pointer text-red-600" />
						<p className="text-sm ml-2">{item.likes}</p>
					 </div>
					):(<div className="flex items-center">
					<BiHeart  onClick={handleLike}
					 className="ml-4 cursor-pointer" />
					 	<p className="text-sm ml-2">{item.likes}</p>
					 </div>
					 )}
					 <div className="flex items-center">
						<BiCommentDots className="ml-4 cursor-pointer" />
						<p className="text-sm ml-2">{item.comments}</p>
					 </div>
					{/* <BiShare className="ml-4 cursor-pointer" /> */}
				</div>
				<div className="flex py-1 px-2 items-center rounded-3xl border-[2px]">
					<BiSmile className="text-2xl cursor-pointer" />
					<textarea onChange={(e) => setComment(e.target.value)}
						className="bg-transparent h-[35px] outline-none px-2 w-full"
						type="text"
						placeholder="Add a comment"
					/>
					<BiSend onClick={handleComment}
					 className="text-2xl cursor-pointer" />
				</div>
			</div>
		</div>
		)}
		</>
	);
};

export default Post;
