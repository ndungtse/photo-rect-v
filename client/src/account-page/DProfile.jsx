import React, { useState, useEffect  } from 'react';
import Nav from '../Home/Nav';
import styled from 'styled-components';
import { BiGridAlt } from 'react-icons/bi';
import { useAuth } from '../contexts/AuthContext';
import { getCookie } from '../contexts/RequireAuth';
import Post from '../Home/Post';
import { useParams } from 'react-router-dom';

function DProfile() {
    const { user: { needed } } = useAuth()
    const [posts, setPosts] = useState([]);

    const { id } = useParams();

    const getPosts = async () => {
		const res = await fetch(
			`https://photocorner33.herokuapp.com/post/getPostByPosterID/${id}`,
			{
				method: "GET",

				headers: {
					"Content-Type": "application/json",
					token: "Bearer " + getCookie("token"),
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
        <Prof className='Profile overflow-hidden w-[100%] flex h-screen'>
            <Nav className='' active={`profile`} />
            <Main className='w-full flex p-4 overflow-auto'>
                <div className='w-full flex flex-col mx-auto items-center max-w-[900px]'>
                    <div className="w-full h-[30vh] overflow-hidden">
                        <img className="object-cover min-w-full min-h-full"
                         src="src/Home/Images/man.jpg" alt="" srcSet="" />
                    </div>
                    <div className="flex sticky top-0 flex-col w-full p-3 h-[40vh] translate-y-[-5vh]
                     bg-white rounded-t-3xl" style={{backgroundColor: 'var(--primary-color)'}}>
                        <div className="flex w-full items-center">
                            <div className="w-[100px]  h-[100px] border-2 border-blue-500 rounded-full overflow-hidden ">
                                <img className="object-cover min-w-full min-h-full"
                                src='src/Home/Images/Bitmap-3.png' />
                            </div>
                            <div className="flex flex-col items-center px-3 py-1 ml-4 bg-slate-200 rounded-xl shadow-md">
                                <p>1</p>
                                <p>Posts</p>
                            </div>
                            <div className="flex flex-col items-center px-3 py-1 ml-4 bg-slate-200 rounded-xl shadow-md">
                                <p>{needed.followers.count}</p>
                                <p>Followers</p>
                            </div>
                            <div className="flex flex-col items-center px-3 py-1 ml-4 bg-slate-200 rounded-xl shadow-md">
                                <p>{needed.following.count}</p>
                                <p>Following</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                          <div className="flex w-1/3 flex-col">
                              <p className="font-semibold">{needed.fullname}</p>
                              <p className="opacity-80">{needed.username}</p>
                          </div>
                          <div className="flex flex-col w-full items-center">
                            <p>Programming is all about thinking, solving problems and making people lazy 😂</p>
                            <p className='text-blue-500 cursor-pointer'>Edit Profile</p>
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
                            {posts.map((post) => (
                                <Post key={Math.random*99222} item={post}/>
                            ))}  
                        </div>                      
                     </div>
                </div>    
            </Main>
        </Prof>
    );
}

export default DProfile;
//styles
const Prof = styled.div`
background-color: var(--primary-color);
`
const Main = styled.div`
background-color: var(--primary-color);
`



