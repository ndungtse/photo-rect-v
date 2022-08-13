import React from 'react'
import { BiX } from 'react-icons/bi';

const CommentsBox = ({setShowComments, comments}) => {
  return (
    <div className="w-full top-0 left-0 z-[22] absolute bg-black/70 
		flex flex-col items-center justify-center h-screen">
			<div onClick={()=> setShowComments(false)}
			 className="w-full h-screen absolute top-0 left-0 z-[25]"></div>
			<div className="flex z-30 flex-col relative items-center w-2/3 max-w-[700px] rounded-xl p-4 min-w-[300px] bg-white">
					<BiX onClick={()=> setShowComments(false)} 
					 className="text-2xl absolute top-1 hover:text-red-600 cursor-pointer right-3" />
				<h2 className="text-center text-lg">Comment on this post</h2>
				{comments.map((comment, i) => (
                    <div key={i} className="flex flex-col items-center justify-center">frre
                    </div>
                ))}
			</div>
		</div>
  )
}

export default CommentsBox