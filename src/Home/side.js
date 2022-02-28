import { Link} from "react-router-dom";
import './Home.css';
import './side.css';
import Follow from './follow';
import Saved from './saved';
import Activity from './activity';


function Side() {
  return ( 
      <div className='side'>
          <div className="side-view">
            <div className="topside">
              <div className="input-search">
                <input type="text" placeholder="Search" />
                <i className="bx bx-search icon"></i>
              </div>
              <div className="bell" id="log">
                <i title="See notifications" className="bx bx-bell icon"></i>
              </div>
              <div className="bell">
                <Link to="login"><a href="login.html"><i title="Log out" className="bx bx-bell icon"></i></a></Link>
              </div>
            </div>
              <div className="results">
                <p>No results found fjherfb refbhje</p>
                <p>No results found fjherfb refbhje</p>
                <p>No results found fjherfb refbhje</p>
                <p>No results found fjherfb refbhje</p>
              </div>
            <Follow />
             <Saved />
           <Activity />
          </div>
      </div>
  );
}

export default Side;
