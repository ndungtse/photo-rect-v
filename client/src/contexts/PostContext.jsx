import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { getCookie } from "./RequireAuth";

const PostContext = React.createContext();

export const usePosts = () => {
	return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
	const [posts, setPosts] = useState([]);
	const [userPosts, setUserPosts] = useState(null);
	const { user } = useAuth();

	const getPosts = async () => {
		const res = await fetch(
			"https://photocorner33.onrender.com/post/allPosts",
			{
				method: "GET",

				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
			}
		);
		const posts = await res.json();
		setPosts(posts.posts.reverse());
		// setLoader(false);
		return posts;
	};

	const newPost = async (caption, imageStr) => {
		const res = await fetch("https://photocorner33.onrender.com/post/newPost", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				authorization: "Bearer " + getCookie("token"),
			},
			body: JSON.stringify({
				imageStr: imageStr,
				caption,
			}),
		});
		await res.json();
		await getPosts();
		return true;
	};

	const deletePost = async (id) => {
		const res = await fetch(
			`https://photocorner33.onrender.com/post/delete/${id}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
			}
		);
		const data = await res.json();
		setPosts(data.posts.reverse());
		setLoader(false);
		return posts;
	};

	const commentOnPost = async (postID, comment) => {
		const res = await fetch(
			`https://photocorner33.onrender.com/post/commentOnPost/${postID}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
				body: JSON.stringify({
					postID,
					comment,
				}),
			}
		);
		const data = await res.json();

		return posts;
	};

	const likePost = async (postID) => {
		const res = await fetch(
			`https://photocorner33.onrender.com/post/like/${postID}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
			}
		);
		const data = await res.json();

		return posts;
	};

	const getCommentsByPost = async (postID) => {
		const res = await fetch(
			`https://photocorner33.onrender.com/post/getCommentsByPosts/${postID}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
			}
		);
		const data = await res.json();
		console.log(data);
		return data;
	};

	const getLikesDataByPost = async (postID) => {
		const res = await fetch(
			`https://photocorner33.onrender.com/post/getLikesDataByPost/${postID}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
			}
		);
		const data = await res.json();

		return data;
	};

	const getLikesCountByPost = async (postID) => {
		const res = await fetch(
			`https://photocorner33.onrender.com/post/getLikeCountByPost/${postID}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
			}
		);
		const data = await res.json();

		return data;
	};

	const unlikePost = async (postID) => {
		const res = await fetch(
			`https://photocorner33.onrender.com/post/unlikePost/${postID}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
			}
		);
		const data = await res.json();

		return data;
	};

	const updateCommentOnPost = async (postID, commentID, comment) => {
		const res = await fetch(
			`https://photocorner33.onrender.com/post/updateCommentOnPost/${postID}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
				body: JSON.stringify({
					commentID,
					comment,
				}),
			}
		);
		const data = await res.json();

		return data;
	};

	const updatePost = async (postID, imageStr, caption) => {
		const res = await fetch(
			`https://photocorner33.onrender.com/post/updatePost/${postID}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
				body: JSON.stringify({
					imageStr,
					caption,
				}),
			}
		);
		const data = await res.json();

		setPosts(data.posts.reverse());
		return data;
	};

	const getPostsByFollowing = async () => {
		const res = await fetch(
			`https://photocorner33.onrender.com/post/getPostsByFollowing`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
			}
		);
		const data = await res.json();

		setPosts(data.posts.reverse());
		return data;
	};

	const getAllPostDataById = async (postID) => {
		const res = await fetch(
			`https://photocorner33.onrender.com/post/getAllPostData/${postID}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
			}
		);
		const data = await res.json();

		return data;
	};

	const deleteComment = async (postID, commentID) => {
		const res = await fetch(
			`https://photocorner33.onrender.com/post/deleteComment/${postID}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
				body: JSON.stringify({
					commentID,
				}),
			}
		);
		const data = await res.json();

		return data;
	};

	return (
		<PostContext.Provider
			value={{
				posts,
				setPosts,
				getPosts,
				newPost,
				deletePost,
				deleteComment,
				commentOnPost,
				likePost,
				getAllPostDataById,
				getCommentsByPost,
				getLikesDataByPost,
				getLikesCountByPost,
				unlikePost,
				updateCommentOnPost,
				updatePost,
				getPostsByFollowing,
				userPosts,
				setUserPosts,
			}}
		>
			{children}
		</PostContext.Provider>
	);
};
