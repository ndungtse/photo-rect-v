import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import { useAuth } from '../contexts/AuthContext';
import { follow, unfollow } from '../Login';
import { useUsers } from '../Messages/contexts/userContext';

const Side = () => {
  const { suggested } = useUsers();
  const { user } = useAuth();
  const [users, setUsers] = React.useState([]);
  const {  isDark } = useApp()
  

  useEffect(() => {
    const users = suggested.filter(use => use._id !== user._id)
    setUsers(users)
  }, [suggested, user]);

  return (
    <div className={`min-w-[200px] sticky top-0 px-3 xtab:flex flex-col hidden w-1/2 ${isDark && 'text-white'}`}>
      <div className="flex mt-6 w-full items-center justify-between">
        <Link to={`/profile`} className="flex items-center">
          <div className="flex overflow-hidden w-[60px] h-[60px] rounded-full">
            <img className="min-w-full min-h-full object-cover"
             src={user.profile} alt="" />
          </div>
          <div className="flex flex-col ml-3">
            <p className="font-semibold">{user.fullname}</p>
            <p className="opacity-80 font-light">@{user.username}</p>
          </div>
        </Link>
        <p className="text-blue-500 cursor-pointer">Switch</p>
      </div>
      <div className="flex flex-col w-full mt-6 h-[70vh] overflow-auto">
        <div className="flex items-center justify-between w-full">
          <p className="text-md font-semibold text-slate-600">Suggested For You</p>
          <p className="font-semibold text-sm cursor-pointer">See All</p>
        </div>
        {users.map((user, index) => {
          return (
            <Suggested key={index} user={user} />
          )})
          }
      </div>
      <div className="flex mt-4 w-full">
        <p className='text-slate-500'>&copy; Photo Corner 2022</p>
      </div>
    </div>
  )
}

export default Side


const Suggested = ({user})=>{
  const [foll, setFoll] = React.useState(false)

  const handleFollow = () => {
    if (foll) {
      unfollow(user)
    }else{
      follow(user)
    }
    setFoll(!foll)
  }

  return(
    <div className="w-full mt-3 text-sm flex justify-between items-center">
      <Link to={`/profile/${user._id}`} className="flex items-center">
        <div className="flex overflow-hidden w-[40px] h-[40px] rounded-full">
          <img className="min-w-full min-h-full object-cover"
           src={user.profile} alt="" />
        </div>
        <div className="flex flex-col ml-3">
          <p className="font-semibold">{user.fullname}</p>
          <p className="opacity-80 font-light">@{user.username}</p>
        </div>  
      </Link>
      <p onClick={handleFollow}
      className="text-blue-500 cursor-pointer">{foll?"Following": "Follow"}</p>
    </div>
  )
}