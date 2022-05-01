import {BiDotsHorizontalRounded} from 'react-icons/bi'
import './mess.css';
import Test from './test';

function Messflow(props) {
  const {usermess,setRoom1, setUsername, joinRoom, setRoom, username} = props;
  const friends = usermess.filter(p => p.id != username.id)
  // console.log(usermess.filter((p) => p.id != username.id));
  const startChat = async(e)=>{
    // await setRece(e.target.id);
    await setRoom(e.target.id + username.id);
    await setRoom1(username.id + e.target.id);
    joinRoom()
  }

  return (
    <div className="mess-scroll">
      {friends.map((user) => (
        <div key={user.id} className="mess-cont mt-2 flex-col">
          <div
            id={user.id}
            onClick={startChat}
            className="conts flex justify-between w-full px-2 cursor-pointer"
          >
            <div className="img-mes">
              <img
                id={user.id}
                className=" aspect-square "
                src={user.image}
                alt=""
              />

              <div id={user.id} className="conts-mes ml-3">
                <p id={user.id}>{user.username}</p>
                <p id={user.id}>Hhhhhhhh</p>
              </div>
            </div>
            <BiDotsHorizontalRounded className='text-2xl cursor-pointer' />
          </div>
        </div>
      ))}
      <Test usermess={usermess} setUsername={setUsername} />
    </div>
  );
}

export default Messflow;
