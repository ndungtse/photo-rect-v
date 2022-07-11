/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./Home.css";
import "./side.css";
import Side from "./side";
import { getCookie } from "../contexts/RequireAuth";
import Post from "./Post";
import { usePosts } from "../contexts/PostContext";

function Mainconts() {
	const { posts } = usePosts();


	return (
		<div className="flex">
			<div className="w-full h-[86vh] overflow-auto flex flex-col items-center">
					<>
						<div className="w-full flex flex-col items-center">
							{posts.map((item) => (
								<Post item={item} key={Math.random*10000}/>
							))}
						</div>
					</>
			</div>
			<Side />
		</div>
	);
}

export default Mainconts;


