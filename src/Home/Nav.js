import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import 'boxicons';
import logo from './Images/logo.png';
// import noLoading from './../utility';

function Nav() {
  const [active, seActive] = useState("");
/*   const [active1, seActive1] = useState("");
  const [active2, seActive2] = useState("");
  const [active3, seActive3] = useState("");
  const [active4, seActive4] = useState(""); */

  const activate = () => {
    seActive("activate")
  }
/*   const activate1 = () => {
    seActive1("activate")
  }
  const activate2 = () => {
    seActive2("activate")
  }
  const activate3 = () => {
    seActive3("activate")
  }
  const activate4 = () => {
    seActive4("activate")
  } */
  return (
    <nav className="navbar">
        <div className="nav-contents">
          <div className="navlogo">
            <Link to="./"><img src={logo} alt='logo'/></Link>
          </div>
          <ul className="nav-container container">
            <li onClick={activate} className="navlinks">
              <Link to='/'><div title="Home" className="links"><i
                  className={`bx bxs-home icon ${active}`}></i></div></Link>
            </li>
            <li /* onClick={activate1}  */className="navlinks">
              <Link to='/messages'><div title="Message" className="links"><i
                  className={`bx bxs-message-rounded-dots icon`}></i></div></Link>
            </li>
            <li  className="navlinks">
             <Link to='/profile'><div title="Profile" className="links">
               <i className={`bx bxs-user icon`}></i></div></Link>
            </li>
            <li  className="navlinks">
              <div title="Clubs" className="links"><i className={`bx bxs-group icon`}></i></div>
            </li>
            <li className="navlinks">
              <span></span>
            </li>
            <li  className="navlinks">
              <Link to='/settings'><div id="flex" title="Settings" className="links">
                <i className={`bx bx-cog icon`}></i></div></Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Nav;
