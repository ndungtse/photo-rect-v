
import './mess.css';

function Mess({messagetext, inputMessage}) {
  return (
      <div className="speaker1 sender">
        <div className="speaker1-cont">
          <p id="samptext1">{messagetext}</p>
        </div>
      </div>
  );
}

export default Mess;
