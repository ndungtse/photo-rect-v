
import './Home.css';
import './side.css';

function Activity() {
  return (
    <div className="activity">
      <div className="l-activity">
        <p>People to follow</p>
        <p><div>See all</div></p>
      </div>
      <div className="act-cont">
        <div className="acts">
          <i className="bx bx-comment-dots icon"></i>
          <p>You’ve Comented on Mugisha Precieux's Shot</p>
        </div>
        <div className="acts">
          <i className="bx bx-heart icon"></i>
          <p>You’ve liked Ndungutse Charles's Shot</p>
        </div>
        <div className="acts">
          <i className="bx bx-bookmark icon"></i>
          <p>You’ve bookmarked Ahmed Mohamed Shot</p>
        </div>
      </div>
  </div>
  );
}

export default Activity;
