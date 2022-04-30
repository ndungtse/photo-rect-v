// import Mess from './mess';
import './mess.css';

function Chatflow({message, username, room}) {
  const relMessages = message.filter(m => m.room === room)
  console.log(relMessages);
  return (
    <div className="chat-flow">
      <div className="speakers send">
        {relMessages.map((mess) => (
          <div key={mess.id} className={mess.author === username.name? 'speaker1 sender': 'speaker2 sender'}>
            <div className="speaker1-cont">
              <p id={mess.author === username.name ? 'samptext1': 'samptext'}>{mess.message}</p>
              <p className='text-[10px] ml-4'>{mess.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chatflow;
