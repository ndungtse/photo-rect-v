import React, { useState, useEffect  } from 'react';
import Nav from '../Home/Nav';
import styled from 'styled-components';
import { BiEdit, BiGridAlt, BiImageAdd, BiX } from 'react-icons/bi';
import { useAuth } from '../contexts/AuthContext';
import { getCookie } from '../contexts/RequireAuth';
import Post from '../Home/Post';
import { FaCamera } from 'react-icons/fa';
import UpdateProfile from './UpdateProForm';
import Drop from './Drop';
import { useUsers } from '../Messages/contexts/userContext';
import { useApp } from '../contexts/AppContext';
import UpdateCover from './updateCover';
import TopBar from '../Home/TopBar';

function Profile() {
    const { user } = useAuth()
    const [posts, setPosts] = useState(null);
    const [showUpForm, setShowUpForm] = useState(false);
    const [showCoverForm, setShowCoverForm] = useState(false);
    const [loading , setLoading] = useState(true);
    const { setMobile } = useUsers();
    const { isDark } = useApp()

    const getPosts = async () => {
		const res = await fetch(
			"https://photocorner33.herokuapp.com/post/getPostByPosterID/" + user._id,
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
        setLoading(false);
		return posts;
	};
   
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <Prof onClick={()=> setMobile(false)}
        className={`Profile ${isDark && 'text-white bg-[#0a0520]'} overflow-hidden w-[100%] flex flex-col h-screen`}>
            <TopBar />
           <div className="flex w-full">
            <Nav className='' active={`profile`} />
            <Main className={`w-full flex p-4 pb-1 h-screen ${isDark?'text-white bg-[#0a0520]':'bg-slate-100'}  overflow-auto`}>
                <div className='w-full flex h-full flex-col  mx-auto items-center  max-w-[900px]'>
                    <div className="w-full relative h-[30vh] overflow-hidden">
                        <img className="object-cover min-w-full min-h-full"
                         src={user.cover} alt="" srcSet="" />
                         <BiEdit onClick={()=> setShowCoverForm(true)}
                           className='absolute cursor-pointer
                                 top-2 right-4 text-[2em] p-1 bg-blue-600 rounded-full  z-[999] text-white' />
                    </div>
                    {showUpForm && <UpdateProfile setShowUpForm={setShowUpForm} user={user} />}
                    {showCoverForm && <UpdateCover setShowCoverForm={setShowCoverForm} user={user} />}
                    <div className={`flex  flex-col w-full  p-3 h-[40vh] translate-y-[-5vh]
                     bg-slate rounded-t-3xl ${isDark?'text-white bg-[#0a0520]':'bg-slate-100'}`} style={{}}>
                        <div className="flex w-full items-center">
                            <div className="w-[100px] relative  h-[100px] border-2 border-blue-500 rounded-full overflow-hidden ">
                                <img className="object-cover min-w-full min-h-full"
                                src={user.profile} />
                                <FaCamera onClick={()=> setShowUpForm(true)}
                                 className='absolute cursor-pointer
                                 bottom-2 right-4 text-[1.4em] p-1 bg-blue-600 rounded-full  z-[999] text-white' />
                            </div>
                            <div className={`flex flex-col items-center px-3 py-1 ml-4 ${isDark?'text-white bg-[#04010f]':'bg-slate-200'} rounded-xl shadow-md`}>
                               {posts !== null &&(<p>{posts.length}</p>)} 
                                <p>Posts</p>
                            </div>
                            <div className={`flex flex-col items-center px-3 py-1 ml-4 ${isDark?'text-white bg-[#04010f]':'bg-slate-200'} rounded-xl shadow-md`}>
                                <p>{user.followers}</p>
                                <p>Followers</p>
                            </div>
                            <div className={`flex flex-col items-center px-3 py-1 ml-4 ${isDark?'text-white bg-[#04010f]':'bg-slate-200'} rounded-xl shadow-md`}>
                                <p>{user.following}</p>
                                <p>Following</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                          <div className="flex w-1/3 flex-col">
                              <p className="font-semibold">{user.fullname}</p>
                              <p className="opacity-80">{user.username}</p>
                          </div>
                          <div className="flex flex-col w-full items-center">
                            {/* <p>Programming is all about thinking, solving problems and making people lazy 😂</p> */}
                            <div className='flex items-center'>
                                <p className='text-blue-500 cursor-pointer'>Edit Profile</p>
                                <p onClick={()=> setShowUpForm(true)}
                                 className='text-blue-500 hover:underline ml-3 cursor-pointer'>Edit Profile Photo</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-3 w-full">
                            <div className="flex items-center">
                                <p className='py-1 border-b-2 border-blue-500'>Posts</p>
                                <p className='ml-4' >Status</p>
                                <p className='ml-4' >Media</p>
                            </div>
                            <BiGridAlt className="text-2xl" />
                        </div>
                        <div className="flex flex-col w-full items-center justify-center">
                            {loading && <p className='text-center text-2xl h-[20vh] flex items-center justify-center'>Loading....</p>}
                            { posts !== null &&(
                            posts.length === 0 ? <p className='text-center text-2xl h-[20vh] flex items-center justify-center'>No posts yet</p> :(
                            posts.map((post) => (
                                <Post key={Math.random()*99222} item={post}/>
                            ))))}  
                            {/* <Drop /> */}
                        </div>                      
                     </div>
                </div>    
            </Main>
            </div> 
        </Prof>
    );
}

export default Profile;
const Prof = styled.div`

`
const Main = styled.div`
`
const Me = styled.div`
background-color: var(--ligth-color);
color: var(--black-color);
`
const Avatar = styled.div`
`