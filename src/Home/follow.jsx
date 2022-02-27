import './side.css';
import './Home.css';

function Follow() {
  return ( 
    <div className="follow">
      <div className="p-follow">
        <div className="p-left"><span>People to follow</span></div>
        <div className="p-right"><div>See all</div></div>
      </div>
       <div className="follow-cont">
         <div className="follow-line">
           <div className="img">
             <div className="img-f"><div><img src={require("./Images/another/Bitmap.png")} alt="" /></div></div>
             <div className="img-des">
               <div><p>Mohamed Salisu</p>
               <p>@mohamedsalisu</p></div>
             </div>
           </div>
           <div className="follow-btn"><div>Follow</div></div>
         </div>
       </div>
    </div>
  );
}

export default Follow;
