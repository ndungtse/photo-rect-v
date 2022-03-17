import React, {useState/* , useEffect */} from 'react';
import Nav from './Home/Nav';
import './App.css';
import './account-page/account.css'
import Account from './account-page/account'
import styled from 'styled-components';
import users from './utility'


function Home() {
    // const [followers, setFollowers] = useState(0);
    const [isUsers, setIsUsers] = useState(users);
   
   
    let fullName = localStorage.getItem("fullName")
    let userName = localStorage.getItem("userName")
  return (
      <Prof className='Profile  w-[100%] flex h-screen'>
          <Nav className='' />
          <Main className="profile flex w-[95%] rounded-tl-lg h-screen bg-white-100">
              <Me className="me w-[35%] flex-col h-screen items-center bg-white shadow-md rounded-xl">
                  
                  <div className=''>
                  <h1 className="text-center">Profile</h1>
                <Avatar className="w-[100%] flex-col justify-center rounded-xl items-center mt-6">
                    <div className=" w-[100%] rounded-3xl ">
                      <div className="flex items-center justify-center">
                      <img className='w-[150px] rounded-full' src={require("./Home/Images/subs/mount.jpg")} alt="Bitmap"/></div> 
                    </div>
                    <div className="w-[100%] flex flex-col items-center justify-center">
                        <p className="text-xl mt-7 mx-auto">{fullName}</p>
                        <p className="text-xl mx-auto opacity-[0.7]">@{userName}</p>
                    </div> 
                </Avatar>
                <div className="flex px-[6%] justify-between items-center">
                    <div className='flex flex-col items-center'>
                        <p>1M</p>
                        <p>Followers</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p>1K</p>
                        <p>Following</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p>500</p>
                        <p>Posts</p>
                    </div>
                </div>
                <div className='flex flex-col items-center mt-2'>
                    <div className='flex items-center'><i className="fas fa-map-marker-alt mr-2"></i><p>Kigali, Rwanda</p></div>
                    <div className='flex items-center'><i className="fas fa-graduation-cap mr-2"></i><p>Student at RCA</p></div>
                    <div className='flex px-2 text-center flex-col items-center'><p className='mx-auto'>Programing is 
                        all about thinking and solving problems and making people lazy</p></div>
                    <div className='flex items-center text-blue-500'><a href='/'>Edit Profile <i className='bx bx-edit'></i></a></div>
                </div>
                <div className="flex  w-[100%] text-center items-center justify-center">
                    <div className="hover:text-blue-500 duration-300 cursor-pointer mx-auto mt-4 flex w=[80px] items-center justify-center py-2 rounded-md ">
                        <span className="flex items-center"><i className='bx bxs-message-rounded-dots text-xl' ></i>Messages</span>
                    </div>
                    <div className="hover:text-blue-500 duration-300 cursor-pointer mx-auto mt-4 flex items-center justify-center py-2 rounded-md ">
                        <span className="flex items-center"><i className='bx bxs-photo-album text-xl' ></i>Photos</span>
                    </div>
                    <div className="cursor-pointer hover:text-blue-500 duration-300 mx-auto mt-4 flex items-center justify-center py-2 rounded-md ">
                        <span className="flex items-center"><i className='bx bxs-group text-xl' ></i>Groups</span>
                    </div>
                </div> 
                <div className="mt-5 flex items-center justify-center w-full">
                    <div className="bg-slate-100 py-2 px-4 rounded-3xl cursor-pointer">
                        <input className="border-none outline-none bg-transparent cursor-pointer" type="text" placeholder="write a post " disabled/>
                    </div>
                    <div className="">
                        <input className="bg-blue-500 py-2 ml-2 px-3 rounded-3xl duration-300" type="submit" value="Post"/>
                    </div>
                </div> 
                </div>
              </Me>
                <Account isUsers={isUsers}
                    setIsUsers={setIsUsers}/>
          </Main>
      </Prof>
  );
}

export default Home;
//styles
const Prof = styled.div`
background-color: var(--primary-color);
`
const Main = styled.div`
background-color: var(--primary-color);
`
const Me = styled.div`
background-color: var(--ligth-color);
color: var(--black-color);
`
const Avatar = styled.div`
`


