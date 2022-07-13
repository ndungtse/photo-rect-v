import React, { useState, useEffect  } from 'react';
import Nav from '../Home/Nav';
import styled from 'styled-components';
import { BiEdit, BiGridAlt, BiImageAdd, BiX } from 'react-icons/bi';
import { useAuth } from '../contexts/AuthContext';
import { getCookie } from '../contexts/RequireAuth';
import Post from '../Home/Post';
import { FaCamera } from 'react-icons/fa';
import LoadingButton from '@mui/lab/LoadingButton';
import { useUsers } from '../Messages/contexts/userContext';
import { usePosts } from '../contexts/PostContext';


function Profile() {
    const { user } = useAuth()
    const [posts, setPosts] = useState([]);
    // const { getPosts } = usePosts()
    const [showUpForm, setShowUpForm] = useState(false);

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
		return posts;
	};
   
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <Prof className='Profile overflow-hidden w-[100%] flex h-screen'>
            <Nav className='' active={`profile`} />
            <Main className='w-full flex p-4 bg-slate-100 overflow-auto'>
                <div className='w-full flex flex-col  mx-auto items-center  max-w-[900px]'>
                    <div className="w-full relative h-[30vh] overflow-hidden">
                        <img className="object-cover min-w-full min-h-full"
                         src={user.cover} alt="" srcSet="" />
                         <BiEdit  className='absolute cursor-pointer
                                 top-2 right-4 text-[2em] p-1 bg-blue-600 rounded-full  z-[999] text-white' />
                    </div>
                    {showUpForm && <UpdateProfile setShowUpForm={setShowUpForm} user={user} />}
                    <div className="flex sticky top-0 flex-col w-full  p-3 h-[40vh] translate-y-[-5vh]
                     bg-slate-100 rounded-t-3xl" style={{}}>
                        <div className="flex w-full items-center">
                            <div className="w-[100px] relative  h-[100px] border-2 border-blue-500 rounded-full overflow-hidden ">
                                <img className="object-cover min-w-full min-h-full"
                                src={user.profile} />
                                <FaCamera onClick={()=> setShowUpForm(true)}
                                 className='absolute cursor-pointer
                                 bottom-2 right-4 text-[1.4em] p-1 bg-blue-600 rounded-full  z-[999] text-white' />
                            </div>
                            <div className="flex flex-col items-center px-3 py-1 ml-4 bg-slate-200 rounded-xl shadow-md">
                                <p>1</p>
                                <p>Posts</p>
                            </div>
                            <div className="flex flex-col items-center px-3 py-1 ml-4 bg-slate-200 rounded-xl shadow-md">
                                <p>{user.followers}</p>
                                <p>Followers</p>
                            </div>
                            <div className="flex flex-col items-center px-3 py-1 ml-4 bg-slate-200 rounded-xl shadow-md">
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
                            <p>Programming is all about thinking, solving problems and making people lazy 😂</p>
                            <div className='flex items-center'>
                                <p className='text-blue-500 cursor-pointer'>Edit Profile</p>
                                <p className='text-blue-500 hover:underline ml-3 cursor-pointer'>Edit Profile Photo</p>
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
                            {posts.length === 0 ? <p className='text-center text-2xl h-[20vh] flex items-center justify-center'>No posts yet</p> :(
                            posts.map((post) => (
                                <Post key={Math.random()*99222} item={post}/>
                            )))}  
                        </div>                      
                     </div>
                </div>    
            </Main>
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

const UpdateProfile = ({setShowUpForm, user}) => {
    const [imageString, setImageStr] = useState('');
	const [caption, setCaption] = useState('');
	const [preview, setPreview]= useState({state: false, url: ''});
	const [loading, setLoading] = React.useState(false);
    const { updatePhoto } = useUsers()
    const { setUser } = useAuth()

    const previewFile = (e) => {
		const file = e.target.files[0];
		console.log(file);
		setPreview({state: true, url: URL.createObjectURL(e.target.files[0])})
		const reader = new FileReader();
		reader.addEventListener('loadend',() => {
			setImageStr(reader.result);
		});
		reader.readAsDataURL(file);
		console.log(imageString);
	}

    const submitPhoto = async(e) => {
		setLoading(true);
	  const isdone = await updatePhoto({ imageStr: imageString, user: user._id });
	  if(isdone.done){
		console.log('done');
        setUser(isdone.user)
	    setShowUpForm(false);
	  }
	}

    return(
        <div className="w-full top-0 left-0 z-[10] absolute bg-black/70 
		flex flex-col items-center justify-center h-screen">
			<div onClick={()=> setShowUpForm(false)}
			 className="w-full h-screen absolute top-0 left-0 z-[15]"></div>
			<div className="flex z-20 flex-col relative items-center w-1/3 rounded-xl p-4 min-w-[300px] bg-white">
				
					<BiX onClick={()=> setShowUpForm(false)} 
					 className="text-4xl absolute top-1 hover:text-red-600 cursor-pointer right-3" />
				<h2 className="text-center text-xl">Add a profile photo</h2>
				<label htmlFor="post" className="flex flex-col mt-2 cursor-pointer text-blue-700 items-center">
						<BiImageAdd className={`${preview.state?'text-3xl':'text-[8em]'}`} />
						<p>Add A Photo</p>
					</label>
				{preview.state &&(
					<div className="w-[150px] mx-auto mt-3 h-[150px] overflow-hidden">
          				<img src={imageString} className="object-cover min-h-full min-w-full" alt="" />
          			</div>
				)}
				<div className="w-full mt-4 flex items-center justify-center">
					<ButtonSend submitPhoto={submitPhoto} setLoading={setLoading} loading={loading} />
					<input onChange={previewFile}  className="hidden" type="file" id="post" accept="image/*" />
					{/* <button onClick={submitPost}
					 className="px-4 py-2 bg-blue-600 text-white">Post</button> */}
				</div>
			</div>
		</div>
    )
}

const ButtonSend = ({loading, setLoading, submitPhoto}) => {
	function handleClick() {
	  setLoading(true);
	  submitPhoto();
	}

	return(
		<LoadingButton
          color="primary"
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
        //   startIcon={<SaveIcon />}
          variant="contained"
        >
          Update Photo
        </LoadingButton>
	)
}