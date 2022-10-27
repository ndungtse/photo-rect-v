import React, { useEffect } from 'react'
import { useState } from 'react';
import { BiHeart, BiReply, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { getUserById } from '../contexts/AuthContext';

const CommentsBox = ({setShowComments, comments, getComments, user}) => {

	useEffect(() => {
		getComments();
	}, []);

  return (
    <div className="top-0 left-0 right-0 z-[22] fixed bg-black/70 
		flex flex-col items-center justify-center bottom-0">
			<div onClick={()=> setShowComments(false)}
			 className="w-full h-screen absolute top-0 left-0 z-[25]"></div>
			<div className="flex z-30 flex-col relative items-center w-2/3 max-w-[700px] rounded-xl p-4 min-w-[300px] bg-white">
					<BiX onClick={()=> setShowComments(false)} 
					 className="text-2xl absolute top-1 hover:text-red-600 cursor-pointer right-3" />
				<h2 className="text-center text-lg">Comment on {user.fullname}'s post</h2>
				{comments.map((comment, i) => (
                    <Comment key={i} comment={comment} />
                ))}
			</div>
		</div>
  )
}

export default CommentsBox

const Comment = ({comment}) => {
	const [user, setUser] = useState(null);

	const getCommentedUser = async () => {
		const user = await getUserById(comment.user)
		setUser(user);
	}

	useEffect(() => {
		getCommentedUser();
	} ,[])
	return(
		<div className="flex flex-col w-full items-end mt-3 border-b-2">
			<div className="flex items-center w-full">
				<Link to={`/profile/${user?._id}`} className="flex items-center">
        		<div className="flex overflow-hidden w-[40px] h-[40px] rounded-full">
        		  <img className="min-w-full min-h-full object-cover"
        		   src={user?.profile} alt="" />
        		</div>
      			</Link>
        		<div className="flex flex-col ml-3">
        		  <p className="font-semibold">{user?.fullname}</p>
        		  <p className="opacity-80 text-sm">{comment.comment}</p>
        		</div>  
			</div>
			<div className="flex items-center">
				<BiHeart className='cursor-pointer text-xl' /><span className='text-xs'>2</span>
				<BiReply className='cursor-pointer ml-3 text-xl' /><span className='text-xs'>12</span>
			</div>
		</div>
	)
}