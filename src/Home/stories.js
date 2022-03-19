import './Home.css';
function Stories() {
  return (
    <div className='stories'>
      {Storysources.map(source =>(
      <a href="storyPreview.js" className="storyview">
        <div className="story-cont">
          {console.log(source)};
          <div ><img src={source} alt='' /></div>
          <div ><span>You</span></div>
        </div>
      </a>
      ))}
    </div>
  );
}
export default Stories;

const Storysources=["https://resources.premierleague.com/premierleague/photos/players/250x250/p219847.png","require('./Images/Bitmap-2.png')","require('./Images/other/Bitmap-2.png')"
            ,"require('./Images/Bitmap-1.png')","require('./Images/other/Bitmap-1.png')","require('./Images/Bitmap-3.png')"
            ,"require('./Images/Bitmap.png')","require('./Images/other/Group 18 Copy.png')", "require('./Images/other/Bitmap.png')"
          ]