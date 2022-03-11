import { Link} from "react-router-dom";
import styled from 'styled-components';
import './Home.css';
import './side.css';
import Follow from './follow';
import Saved from './saved';
import Activity from './activity';


function Side({isVisible, handleShowRe, setVisible,
           isToggled, setToggled} ) {
  

   const ReStyle = styled.div`
   display: ${({isVisible}) => (isVisible ? 'flex' : 'none')};
   flex-direction: column;
   align-items: center;
   background-color: var(--ligth-color);
   color: var(--black-color);
  `

  return ( 
      <Test isToggled={isToggled} setToggled={setToggled}
      className={`side `}>
          <div className="side-view">
            <div className="topside">
              <div onClick={handleShowRe} className="input-search" >
                <input onClick={handleShowRe} type="text" placeholder="Search" disabled/>
                <i className="bx bx-search icon"></i>
              </div>
              <div className="bell" id="log">
                <i title="See notifications" className="bx bx-bell icon"></i>
              </div>
              <div className="bell" id="bell">
                <Link to="login"><a href="login.html"><i title="Log out" className="bx bx-log-out"></i></a></Link>
              </div>
              <div>
              </div>
            </div>
              <ReStyle isVisible={isVisible} setVisible={setVisible} className="results shadow-xl">
               <div className="input-search1">
                <input type="text" placeholder="Search" />
                <i className="bx bx-search icon"></i>
                <i onClick={handleShowRe} className='bx bx-x' id="close"></i>
                </div>
                <div onClick={handleShowRe}>
                <p>No results found fjherfb refbhje</p>
                <p>No results found fjherfb refbhje</p>
                <p>No results found fjherfb refbhje</p>
                <p>No results found fjherfb refbhje</p>
                </div>
              </ReStyle>
            <Follow onClick ={handleShowRe}/>
             <Saved />
           <Activity />
          </div>
      </Test>
  );
}

export default Side;

const Test = styled.div`
@media screen and (max-width: 900px){
        position: fixed;
        height: 100vh;
        // right: -1000px;
        right: ${({isToggled})=> (isToggled ? '0' :'-2000px')};
        width: 100%;
        background-color: rgba(12, 12, 12, 0.516);
        z-index: 56;
}
`
