import { Link } from "react-router-dom";
import './Home.css';
import 'boxicons';
import logo from './Images/logo.png';
// import noLoading from './../utility';

function Nav() {
  
  return (
    <nav className="navbar">
        <div className="nav-contents">
          <div className="navlogo">
            <Link to="./"><img src={logo} alt='logo'/></Link>
          </div>
          <ul className="nav-container container">
            <li className="navlinks">
              <Link to='/home'><div title="Home" className="links active"><i
                  className="bx bx-home icon"></i></div></Link>
            </li>
            <li className="navlinks">
              <Link to='/messages'><div title="Message" className="links"><i
                  className="bx bx-message-rounded-dots icon"></i></div></Link>
            </li>
            <li className="navlinks">
             <Link to='/profile'><div title="Profile" className="links"><i className="bx bx-user icon"></i></div></Link>
            </li>
            <li className="navlinks">
              <div title="Saved" className="links"><i className="bx bx-bookmark icon"></i></div>
            </li>
            <li className="navlinks">
              <span></span>
            </li>
            <li className="navlinks">
              <div id="flex" title="Settings" className="links"><i className="bx bx-cog icon"></i></div>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Nav;
