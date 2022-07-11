import React from "react";
import {
	BiDotsHorizontalRounded,
	BiCommentDots,
	BiHeart,
	BiShare,
	BiSmile,
	BiSend,
} from "react-icons/bi";

const Post = ({item}) => {
	return (
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
						className="bg-transparent h-[35px] outline-none px-2 w-full"
						type="text"
						placeholder="Add a comment"
					/>
					<BiSend className="text-2xl cursor-pointer" />
				</div>
			</div>
		</div>
	);
};

export default Post;
