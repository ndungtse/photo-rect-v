import React, { useState, useEffect  } from 'react';
import Nav from '../Home/Nav';
import styled from 'styled-components';
import { BiGridAlt } from 'react-icons/bi';
import { getUserById, useAuth } from '../contexts/AuthContext';
import { getCookie } from '../contexts/RequireAuth';
import Post from '../Home/Post';
import { useParams } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';

function DProfile() {
    // const { user } = useAuth()
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const { isDark } = useApp()

    const { id } = useParams();

    const getPosts = async () => {
		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/getPostByPosterID/${id}`,
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

    const getUser = async()=> {
       const res = await getUserById(id);
         setUser(res);
    }

    useEffect(()=> {
        getUser();
    },[])

    return (
        <>{user !== null &&(
        <Prof className={`Profile overflow-hidden ${isDark && 'text-white bg-[#0a0520]'} w-[100%] flex h-screen`}>
            <Nav className='' active={`profile`} />
            <Main className={`w-full bg-slate-100 flex ${isDark && 'text-white bg-[#0a0520]'} p-4 overflow-auto`}>
                <div className='w-full flex flex-col mx-auto items-center max-w-[900px]'>
                    <div className="w-full h-[30vh] overflow-hidden">
                        <img className="object-cover min-w-full min-h-full"
                         src={user.cover} alt="" srcSet="" />
                    </div>
                    <div className={`flex flex-col w-full p-3 h-[40vh] translate-y-[-5vh]
                     ${isDark?'bg-[#0a0520]':'bg-slate-100'} rounded-t-3xl`}>
                        <div className="flex w-full items-center">
                            <div className="w-[100px]  h-[100px] border-2 border-blue-500 rounded-full overflow-hidden ">
                                <img className="object-cover min-w-full min-h-full"
                                src={user.profile} />
                            </div>
                            <div className={`flex flex-col items-center px-3 py-1 ml-4 ${isDark?'text-white bg-[#04010f]':'bg-slate-200'} rounded-xl shadow-md`}>
                                <p>{posts.length}</p>
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
                            {/* <p className='text-blue-500 cursor-pointer'>Edit Profile</p> */}
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
                        <div className={`flex pb-[10vh] flex-col w-full items-center ${isDark && 'bg-[#0a0520]'} justify-center`}>
                        {posts.length === 0 ? <p className='text-center text-2xl h-[20vh] flex items-center justify-center'>No posts yet</p> :(
                            posts.map((post) => (
                                <Post key={Math.random*99222} item={post}/>
                            )) 
                            )}
                        </div>                      
                     </div>
                </div>    
            </Main>
        </Prof>
            )}
        </>
    );
}

export default DProfile;
//styles
const Prof = styled.div`

`
const Main = styled.div`

`



