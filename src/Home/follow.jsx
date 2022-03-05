import './side.css';
import './Home.css';
import { Link } from 'react-router-dom';

function Follow({handleShowRe}) {
  return ( 
    <div  className="follow">
      <div className="p-follow">
      </div>
       <div className="follow-cont">
         <div className="follow-line">
           <div className="img">
             <div className="img-f"><div><img src={require("./Images/another/Bitmap.png")} alt="" /></div></div>
             <div className="img-des">
               <div><p>{localStorage.fullName}</p>
               <p>{localStorage.userName}</p></div>
             </div>
           </div>
           <Link to='/profile'> <div className="follow-btn"><div onClick={handleShowRe}>View profile</div></div></Link>
         </div>
       </div>
    </div>
  );
}

export default Follow;
