import Messflow from './Messages/Messflow';
import Messprev from './Messages/mesprev';
import Nav from './Home/Nav';
import './Messages/mess.css';

function Messages() {
  return (
    <div className="m-mes">

    <Nav />
    <div className="message">
        <div className="simple-m">
          <div className="simple-view">
            <div className="chat-title">
              <p>Chats</p>
              <div className="chat-icons">
                <div><i className="bx bx-dots-horizontal-rounded icon"></i></div>
                <div><i className='bx bxs-message-square-edit'></i></div>
                <div><i className="bx bxs-video-plus icon"></i></div>
              </div>
              
            </div>
            <div className="px-4">
            <div className="search-mess pr-3">
                <i className="bx bx-search icon"></i>
                <input type="text" placeholder="Search messages" />
             </div>
             </div>
            <Messflow />
          </div>
        </div>
        <Messprev />
    </div>
    </div>
  );
}

export default Messages;
