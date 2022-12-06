import React, { useState, useEffect } from "react";
import Nav from "../Home/Nav";
import styled from "styled-components";
import { BiGridAlt } from "react-icons/bi";
import { getUserById, useAuth } from "../contexts/AuthContext";
import { getCookie } from "../contexts/RequireAuth";
import Post from "../Home/Post";
import { useParams } from "react-router-dom";
import { useApp } from "../contexts/AppContext";
import { follow, unfollow } from "../Login";
import TopBar from "../Home/TopBar";
import Layout from "../others/Layout";

function DProfile() {
	const auth = useAuth();
	const [user, setUser] = useState(null);
	const [posts, setPosts] = useState([]);
	const { isDark, following, getFollowingData } = useApp();
	const [followable, setFollowable] = useState(true);

	const { id } = useParams();

	const handleFollowings = async () => {
		let pfoll = following;
		for (let i = 0; i < pfoll.length; i++) {
			if (following[i].user === id) {
				setFollowable(false);
			}
		}
	};

	const getPosts = async () => {
		const res = await fetch(
			`https://photocorner33.onrender.com/post/getPostByPosterID/${id}`,
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
		return posts;
	};

	useEffect(() => {
		getPosts();
	}, []);
	useEffect(() => {
		handleFollowings();
	}, [following]);

	const getUser = async () => {
		const res = await getUserById(id);
		setUser(res);
	};

	useEffect(() => {
		getUser();
	}, []);

	const handleFollow = () => {
		// const { user, setUser } = auth;
		if (!followable) {
			unfollow(user);
			setUser({ ...user, followers: user?.followers - 1 });
			auth.setUser({ ...auth.user, following: auth.user?.following - 1 });
			setFollowable(true);
		} else {
			follow(user);
			setUser({ ...user, followers: user?.followers + 1 });
			auth.setUser({ ...auth.user, following: auth.user?.following + 1 });
		}
		setFollowable(!followable);
	};

	return (
			<Layout active={'profile'}>
				<Main
					className={`w-full bg-slate-100 flex ${
						isDark && "text-white bg-[#0a0520]"
					} p-4 overflow-auto h-[86vh] tab:h-full`}
				>
					<div className="w-full flex flex-col mx-auto items-center max-w-[900px]">
						<div className="w-full h-[30vh] overflow-hidden">
							<img
								className="object-cover min-w-full min-h-full"
								src={user?.cover}
								alt=""
								srcSet=""
							/>
						</div>
						<div
							className={`flex flex-col w-full p-3 h-[40vh] translate-y-[-5vh]
                     ${isDark ? "bg-[#0a0520]" : "bg-slate-100"} rounded-t-3xl`}
						>
							<div className="flex w-full five:flex-row flex-col items-center text-xs sm:text-sm">
								<div className="flex flex-col items-center">
									<div className="tab:w-[100px] relative  tab:h-[100px] h-[70px] w-[70px] border-2 border-blue-500 rounded-full overflow-hidden flex flex-col">
										<img
											className="object-cover min-w-full min-h-full"
											src={user?.profile}
										/>
									</div>
									<div className="flex w-full items-center flex-col">
										<p className="font-semibold">{user?.fullname}</p>
										<p className="opacity-80">{user?.username}</p>
									</div>
								</div>
								<div className="flex items-center sm:flex-row flex-col w-full justify-between">
									<div className="flex items-center  justify-between">
										<div
											className={`flex flex-col items-center px-3 py-1 ml-4 ${
												isDark ? "text-white bg-[#04010f]" : "bg-slate-200"
											} rounded-xl shadow-md`}
										>
											{posts !== null && <p>{posts.length}</p>}
											<p>Posts</p>
										</div>
										<div
											className={`flex flex-col items-center px-3 py-1 ml-4 ${
												isDark ? "text-white bg-[#04010f]" : "bg-slate-200"
											} rounded-xl shadow-md`}
										>
											<p>{user?.followers}</p>
											<p>Followers</p>
										</div>
										<div
											className={`flex flex-col items-center px-3 py-1 ml-4 ${
												isDark ? "text-white bg-[#04010f]" : "bg-slate-200"
											} rounded-xl shadow-md`}
										>
											<p>{user?.following}</p>
											<p>Following</p>
										</div>
									</div>
									<div className="flex items-center sm:mt-0 mt-3">
										{auth.user?._id === id ? null : (
											<div className="flex flex-col w-full items-center">
												{followable ? (
													<p
														onClick={handleFollow}
														className="bg-blue-500 text-white rounded-md px-4 py-1 cursor-pointer"
													>
														follow
													</p>
												) : (
													<p
														onClick={handleFollow}
														className="bg-slate-500 text-white rounded-md px-4 py-1 cursor-pointer"
													>
														unfollow
													</p>
												)}
											</div>
										)}
									</div>
								</div>
							</div>
							<div className="flex items-center justify-between mt-3 w-full">
								<div className="flex items-center">
									<p className="py-1 border-b-2 border-blue-500">Posts</p>
									<p className="ml-4">Status</p>
									<p className="ml-4">Media</p>
								</div>
								<BiGridAlt className="text-2xl" />
							</div>
							<div
								className={`flex pb-[10vh] flex-col w-full items-center ${
									isDark && "bg-[#0a0520]"
								} justify-center`}
							>
								{posts.length === 0 ? (
									<p className="text-center text-2xl h-[20vh] flex items-center justify-center">
										No posts yet
									</p>
								) : (
									posts.map((post) => <Post key={post._id} item={post} />)
								)}
							</div>
						</div>
					</div>
				</Main>
			</Layout>
	);
}

export default DProfile;
//styles
const Prof = styled.div``;
const Main = styled.div``;
