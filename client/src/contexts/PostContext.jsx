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

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<PostContext.Provider value={{ posts, setPosts, getPosts }}>
			{children}
		</PostContext.Provider>
	);
};
