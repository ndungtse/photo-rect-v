import Mess from './mess';
import './mess.css';

function Chatflow({message, setSend}) {
  // console.log(message);
  return (
    <div className="chat-flow">
    <div className="speakers send">
      
      {message.map((toSend)=>(
      <Mess messagetext={toSend.messagetext}/>
          ))}
    </div>
    
  </div>
  );
}

export default Chatflow;
