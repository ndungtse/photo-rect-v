<<<<<<< HEAD
// import Mess from './mess';
=======
import Mess from './mess';
>>>>>>> 3d74eb451d9869778d1f3d35f2ac79b69846a9d2
import './mess.css';

function Chatflow({message}) {

  return (
    <div className="chat-flow">
    <div className="speakers send">
      {message.map((toSend)=>(
      <Mess
      messagetext={toSend.messagetext}/>
          ))}
    </div>
    
  </div>
  );
}

export default Chatflow;
