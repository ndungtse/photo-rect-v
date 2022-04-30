
import './mess.css';
import Test from './test';

function Messflow(props) {
  const {usermess, setUsername, joinRoom, setRoom, username} = props;
  const friends = usermess.filter(p => p.id != username.id)
  // console.log(usermess.filter((p) => p.id != username.id));
  const startChat = async(e)=>{
    await setRoom(Number(parseInt(e.target.id)+ parseInt(username.id)))
    joinRoom()
  }

  return (
    <div className="mess-scroll">
      {friends.map((user) => (
        <div key={user.id} className="mess-cont mt-2 flex-col">
          <div
            id={user.id}
            onClick={startChat}
            className="conts w-full px-2 cursor-pointer"
          >
            <div className="img-mes">
              <img
                id={user.id}
                className="w-[30px] h-[50px]"
                src={user.image}
                alt=""
              />
            </div>
            <div id={user.id} className="conts-mes">
              <p id={user.id}>{user.username}</p>
              <p id={user.id}>Hhhhhhhh</p>
            </div>
          </div>
        </div>
      ))}
      <Test usermess={usermess} setUsername={setUsername} />
    </div>
  );
}

export default Messflow;
