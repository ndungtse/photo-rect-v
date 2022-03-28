<<<<<<< HEAD

import './mess.css';

function Messflow() {
  return (
    <div className="mess-scroll">
        <div className="mess-cont">
          <div className='conts'>
            <div className="img-mes"><img src={require("./../Home/Images/Bitmap-1.png")} alt="" /></div>
            <div className="conts-mes">
              <p>Ishimwe Christian</p>
              <p>Hhhhhhhh</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Messflow;
=======

import './mess.css';

function Messflow(props) {
  const {usermess} = props;
  
  return (
    <div className="mess-scroll">
        {usermess.map((user) => (
      <div className="mess-cont mt-2 flex-col">
          <div className="conts w-full px-2">
            <div className="img-mes">
              <img className="w-[30px] h-[50px]" src={user.image} alt="" />
            </div>
            <div className="conts-mes">
              <p>{user.username}</p>
              <p>Hhhhhhhh</p>
            </div>
          </div>
      </div>
        ))}
    </div>
  );
}

export default Messflow;
>>>>>>> b2a837bb4563fa7f2390cc8544b1b323e0743192
