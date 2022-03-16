import "./account.css";

const Follow = ({isFollowed, setIsFollowed, users}) => {
  const HandleFollow = ()=> {
    setIsFollowed(!isFollowed);
}
   const test = () => {
     if(isFollowed) {
       return "following"
     }else{
      return "Follow"
     }
   }
   const followClass = test()
  const Pfollow = (props) => {
    const {user} = props
    return (
      <div className="fcard flex flex-col items-center">
            <img className="w-[100%] rounded-full"
              src={user.image}
              alt=""
            />
            <p>{user.names}</p>
            <p className="opacity-[0.7]">@{user.username}</p>
            <p onClick={HandleFollow} isFollowed={isFollowed} setIsFollowed={setIsFollowed}
            className={`text-white hover:bg-blue-800 duration-300 px-2 
            rounded-sm bg-blue-600 cursor-pointer ${followClass}`}>{followClass}</p>
          </div>
    )
  }
  return (
    <div className="fo">
      <h1 className="pl-3 pt-2">People to follow</h1>
      <div className="pt-3 p-2 grid-cols-4 gap-10 grid overflow-x-auto">
        {users.map((user) =>(
          <Pfollow user={user} key={user.id}>
          </Pfollow>))}
      </div>
    </div>
  );
 
};

export default Follow;

