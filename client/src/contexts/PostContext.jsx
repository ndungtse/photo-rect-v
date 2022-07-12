import React, { useContext, useEffect, useState } from "react";
import { getCookie } from "./RequireAuth";

const PostContext = React.createContext();

export const usePosts = () => {
	return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
	const [posts, setPosts] = useState([]);

	const getPosts = async () => {
		const res = await fetch(
			"https://photocorner33.herokuapp.com/post/allPosts",
			{
				method: "GET",

				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
			}
		);
		const posts = await res.json();
		console.log(res);
		setPosts(posts.posts.reverse());
		console.log(posts);
		setLoader(false);
		return posts;
	};

	const newPost = async (caption, imageStr) => {
		const res = await fetch(
			"https://photocorner33.herokuapp.com/post/new",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
				body: JSON.stringify({
					imageStr: imageStr,
					caption,
				}),
			}
		);
		const data = await res.json();
		console.log(res);
		setPosts(data.posts.reverse());
		console.log(posts);
		setLoader(false);
		return posts;
	}

	const deletePost = async (id) => {
		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/delete/${id}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
			}
		);
		const data = await res.json();
		console.log(res);
		setPosts(data.posts.reverse());
		console.log(posts);
		setLoader(false);
		return posts;
	}

	const commentOnPost = async (postID, comment) => {
		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/commentOnPost/${postID}`,
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
		console.log(data);
		return posts;
	}

	const likePost = async (postID) => {
		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/like/${postID}`,
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
		return posts;
	}

	const getCommentsByPost = async (postID) => {

		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/getCommentsByPosts/${postID}`,
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
	}

	const getLikesDataByPost = async (postID) => {

		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/getLikesDataByPost/${postID}`,
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
	}

	const getLikesCountByPost = async (postID) => {

		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/getLikeCountByPost/${postID}`,
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
	}

	const unlikePost = async (postID) => {
		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/unlikePost/${postID}`,
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
	}

	const updateCommentOnPost = async (postID, commentID, comment) => {
		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/updateCommentOnPost/${postID}`,
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
		console.log(data);
		return data;
	}

	const updatePost = async (postID, imageStr, caption) => {
		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/updatePost/${postID}`,
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
		console.log(data);
		setPosts(data.posts.reverse());
		return data;
	}

	const getPostsByFollowing = async () => {
		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/getPostsByFollowing`,
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
		setPosts(data.posts.reverse());
		return data;
	}

	const getAllPostDataById = async (postID) => {
		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/getAllPostData/${postID}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				authorization: "Bearer " + getCookie("token"),
			}
		});
		const data = await res.json();
		console.log(data);
		return data;
	}

	const deleteComment = async (postID, commentID) => {
		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/deleteComment/${postID}`,
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
		console.log(data);
		return data;
	}

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<PostContext.Provider value={{ posts, setPosts, getPosts }}>
			{children}
		</PostContext.Provider>
	);
};
