import React, { useState, useEffect  } from 'react';
import Nav from '../Home/Nav';
import styled from 'styled-components';
import users, { posts } from '../utility';
import { Link } from 'react-router-dom';
import { BiGridAlt } from 'react-icons/bi';


function Profile() {
    const [followers, setFollowers] = useState(0);
    const [isUsers, setIsUsers] = useState(users);
    const [user, setUser] = useState()
    
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('userInfo')))
    }, [])

    const followCount = () => {
        setFollowers((prevCount) => prevCount + 1
        )
    }
    const followDecrement = () => {
        setFollowers((prevCount) => prevCount - 1
        )
    }


    return (
        <Prof className='Profile  w-[100%] flex h-screen'>
            <Nav className='' active={`profile`} />
            <Main className='w-full flex p-4'>
                <div className='w-full flex flex-col mx-auto items-center max-w-[900px]'>
                    <div className="w-full h-[30vh] overflow-hidden">
                        <img className="object-cover min-w-full min-h-full"
                         src="src/Home/Images/man.jpg" alt="" srcSet="" />
                    </div>
                    <div className="flex flex-col w-full p-3 h-[40vh] translate-y-[-5vh]
                     bg-white rounded-t-3xl" style={{backgroundColor: 'var(--primary-color)'}}>
                        <div className="flex w-full items-center">
                            <div className="w-[100px] h-[100px] border-2 border-blue-500 rounded-full overflow-hidden ">
                                <img className="object-cover min-w-full min-h-full"
                                src='src/Home/Images/Bitmap-3.png' />
                            </div>
                            <div className="flex flex-col items-center px-3 py-1 ml-4 bg-slate-200 rounded-xl shadow-md">
                                <p>128</p>
                                <p>Posts</p>
                            </div>
                            <div className="flex flex-col items-center px-3 py-1 ml-4 bg-slate-200 rounded-xl shadow-md">
                                <p>128k</p>
                                <p>Followers</p>
                            </div>
                            <div className="flex flex-col items-center px-3 py-1 ml-4 bg-slate-200 rounded-xl shadow-md">
                                <p>128</p>
                                <p>Following</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                          <div className="flex w-1/3 flex-col">
                              <p className="font-semibold">Jessica Rire Ikutann</p>
                              <p className="opacity-80">@riraikutann</p>
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
                     </div>
                </div>    
            </Main>
        </Prof>
    );
}

export default Profile;
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


