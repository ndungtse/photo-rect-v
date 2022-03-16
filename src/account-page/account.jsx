import React from 'react';
import './account.css'
import Follow from './follow'
import Acts from './acts'
import SGroup from './groups';

function Account({isFollowed, setIsFollowed, users}) {
    return (
        <div  className="proright w-[65%] h-screen flex flex-col overflow-x-hidden rounded-lg ml-[0.5%]">
            <div className="flex flex-col">
                <h1 className="pl-3 pt-2">Recent Posts</h1>
                <div className="imgscroll grid-flow-col grid auto-cols-[25%] gap-x-[2%] overflow-x-auto p-3">
                    <div className="imgcard shadow-2xl hover:scale-[1.04] duration-500 flex flex-col">
                        <img src={im1} alt="" />
                        <div className="rect flex justify-between px-4">
                            <div className="like">
                                <i className='bx bxs-heart'></i>
                                <span>22</span>
                            </div>
                            <div className="">
                                <i className='bx bxs-comment' ></i>
                                <span>12</span>
                            </div>
                            <div className="share">
                                <i className='bx bxs-share'></i>
                                <span>54</span>
                            </div>
                        </div>
                        <div className="tim flex item-center justify-center w-full px-1 "><p className="mx-auto">3&nbsp;wed&nbsp;2022&nbsp;5:00PM</p></div>
                    </div>
                    <div className="imgcard shadow-2xl hover:scale-[1.04] duration-500 flex flex-col">
                        <img src={im2} alt="" />
                        <div className="rect flex justify-between px-4">
                            <div className="like">
                                <i className='bx bxs-heart'></i>
                                <span>22</span>
                            </div>
                            <div className="">
                                <i className='bx bxs-comment' ></i>
                                <span>12</span>
                            </div>
                            <div className="share">
                                <i className='bx bxs-share'></i>
                                <span>54</span>
                            </div>
                        </div>
                        <div className="tim flex item-center justify-center w-full px-1 "><p>3&nbsp;wed&nbsp;2022&nbsp;5:00PM</p></div>
                    </div>
                    <div className="imgcard shadow-2xl hover:scale-[1.04] duration-500 flex flex-col">
                        <img src={im3} alt="" />
                        <div className="rect flex justify-between px-4">
                            <div className="like">
                                <i className='bx bxs-heart'></i>
                                <span>22</span>
                            </div>
                            <div className="">
                                <i className='bx bxs-comment' ></i>
                                <span>12</span>
                            </div>
                            <div className="share">
                                <i className='bx bxs-share'></i>
                                <span>54</span>
                            </div>
                        </div>
                        <div className="tim flex item-center justify-center w-full px-1 "><p>3&nbsp;wed&nbsp;2022&nbsp;5:00PM</p></div>
                    </div>
                    <div className="imgcard shadow-2xl hover:scale-[1.04] duration-500 flex flex-col">
                        <img src={im4} alt="" />
                        <div className="rect flex justify-between px-4">
                            <div className="like">
                                <i className='bx bxs-heart'></i>
                                <span>22</span>
                            </div>
                            <div className="">
                                <i className='bx bxs-comment' ></i>
                                <span>12</span>
                            </div>
                            <div className="share">
                                <i className='bx bxs-share'></i>
                                <span>54</span>
                            </div>
                        </div>
                        <div className="tim flex item-center justify-center w-full px-1 "><p>3&nbsp;wed&nbsp;2022&nbsp;5:00PM</p></div>
                    </div>
                    <div className="imgcard shadow-2xl hover:scale-[1.04] duration-500 flex flex-col">
                        <img src={im5} alt="" />
                        <div className="rect flex justify-between px-4">
                            <div className="like">
                                <i className='bx bxs-heart'></i>
                                <span>22</span>
                            </div>
                            <div className="">
                                <i className='bx bxs-comment' ></i>
                                <span>12</span>
                            </div>
                            <div className="share">
                                <i className='bx bxs-share'></i>
                                <span>54</span>
                            </div>
                        </div>
                        <div className="tim flex item-center justify-center w-full px-1 "><p>3&nbsp;wed&nbsp;2022&nbsp;5:00PM</p></div>
                    </div>
                    <div className="imgcard shadow-2xl hover:scale-[1.04] duration-500 flex flex-col">
                        <img src={im6} alt="" />
                        <div className="rect flex justify-between px-4">
                            <div className="like">
                                <i className='bx bxs-heart'></i>
                                <span>22</span>
                            </div>
                            <div className="">
                                <i className='bx bxs-comment' ></i>
                                <span>12</span>
                            </div>
                            <div className="share">
                                <i className='bx bxs-share'></i>
                                <span>54</span>
                            </div>
                        </div>
                        <div className="tim flex item-center justify-center w-full px-1 "><p>3&nbsp;wed&nbsp;2022&nbsp;5:00PM</p></div>
                    </div>
                    <div className="imgcard shadow-2xl hover:scale-[1.04] duration-500 flex flex-col">
                        <img src={im7} alt="" />
                        <div className="rect flex justify-between px-4">
                            <div className="like">
                                <i className='bx bxs-heart'></i>
                                <span>22</span>
                            </div>
                            <div className="">
                                <i className='bx bxs-comment' ></i>
                                <span>12</span>
                            </div>
                            <div className="share">
                                <i className='bx bxs-share'></i>
                                <span>54</span>
                            </div>
                        </div>
                        <div className="tim flex item-center justify-center w-full px-1 "><p>3&nbsp;wed&nbsp;2022&nbsp;5:00PM</p></div>
                    </div>
                </div>
                
            </div>
            <Follow isFollowed={isFollowed} users={users}
                    setIsFollowed={setIsFollowed}/>
            <Acts />
            <SGroup />
        </div>
    )
}
export default Account;

const im1 ='https://images.pexels.com/photos/2376994/pexels-photo-2376994.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';
const im2 ='https://images.pexels.com/photos/840666/pexels-photo-840666.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
const im3 ='https://images.pexels.com/photos/1854897/pexels-photo-1854897.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
const im4 ='https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
const im5 ='https://images.pexels.com/photos/594226/pexels-photo-594226.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
const im6 ='https://images.pexels.com/photos/267961/pexels-photo-267961.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
const im7 ='https://images.pexels.com/photos/368893/pexels-photo-368893.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'

export {im1, im2, im3, im4, im5, im6, im7,}