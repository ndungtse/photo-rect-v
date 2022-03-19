import "./account.css";

const Acts = () => {
  return (
    <div className="act flex flex-col pt-2 pl-3">
        <h1>Recent Activity</h1>
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
  );
};
export default Acts;
