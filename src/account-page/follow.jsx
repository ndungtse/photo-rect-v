import React from 'react';
import "./account.css";

const Follow = (props) => {

  const {isUsers, setIsUsers, followCount, followDecrement} = props

  const Pfollow = (props) => {
    const {user, isUsers, setIsUsers, followCount,followDecrement} = props
    const followHandler = () => {
      setIsUsers(isUsers.map(card => {
        if (card.id === user.id) {
          return {
            ...card, followed: !card.followed
          }
        }
        return card
      }))
      if(!user.followed){
      followCount()
      }else{
        followDecrement()
      }
    }
    const test = () =>{
      if (user.followed) {
        return 'following'
      } else {
        return 'Follow'
      }
    }
    const tested = test()
    return (
      <div className="fcard w-[120px] flex flex-col items-center">
        <div className=" w-[100%] h-[50%] flex flex-col items-center">
          <img className="h-[100%] rounded-full"
          src={user.image} alt=""/>
        </div>
        <p>{user.names}</p>
        <p className="opacity-[0.7]">@{user.username}</p>
        <p onClick={followHandler} isUsers={isUsers} setIsUsers={setIsUsers}
        className={`text-white hover:bg-blue-800 duration-300 px-2 
        rounded-sm bg-blue-600 cursor-pointer ${tested}`}>{tested}</p>
      </div>
    )
  }
  return (
    <div className="fo">
      <h1 className="pl-3 pt-2">People to follow</h1>
      <div className="f-fol pt-3 p-2 gap-10 grid overflow-x-auto">
        {isUsers.map(user =>(
          <Pfollow user={user} key={user.id} 
           setIsUsers={setIsUsers} followCount={followCount}
           isUsers={isUsers} followDecrement={followDecrement}/>))}
      </div>
    </div>
  );
 
};

export default Follow;

