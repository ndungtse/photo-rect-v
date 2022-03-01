import { Link} from "react-router-dom";
import styled from 'styled-components';
import './Home.css';
import './side.css';
import Follow from './follow';
import Saved from './saved';
import Activity from './activity';


function Side({isVisible, handleShowRe, setVisible}) {
  

   const ReStyle = styled.div`
   display: ${({isVisible}) => (isVisible ? 'flex' : 'none')};
   flex-direction: column;
  `

  return ( 
      <div className='side'>
          <div className="side-view">
            <div className="topside">
              <div className="input-search">
                <input onClick={handleShowRe} type="text" placeholder="Search" />
                <i className="bx bx-search icon"></i>
              </div>
              <div className="bell" id="log">
                <i onClick={handleShowRe} title="See notifications" className="bx bx-bell icon"></i>
              </div>
              <div className="bell" id="bell">
                <Link to="login"><a href="login.html"><i title="Log out" className="bx bx-log-out"></i></a></Link>
              </div>
              <div>
              </div>
            </div>
              <ReStyle isVisible={isVisible} setVisible={setVisible} className="results">
                <p>No results found fjherfb refbhje</p>
                <p>No results found fjherfb refbhje</p>
                <p>No results found fjherfb refbhje</p>
                <p>No results found fjherfb refbhje</p>
              </ReStyle>
            <Follow onClick ={handleShowRe}/>
             <Saved />
           <Activity />
          </div>
      </div>
  );
}

export default Side;
