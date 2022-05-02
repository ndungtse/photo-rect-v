// import Mess from './mess';
import './mess.css';

function Chatflow({message}) {

  return (
    <div className="chat-flow">
      <div className="speakers send">
        <div className="speaker2 sender">
          <div className="speaker1-cont">
            <p className="text-white px-[10px] bg-slate-600 py-[5px] rounded-[20px]">mess.messagetext</p>
          </div>
        </div>
        {message.map((mess) => (
          <div className="speaker1 sender">
            <div className="speaker1-cont">
              <p id="samptext1">{mess.messagetext}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chatflow;
