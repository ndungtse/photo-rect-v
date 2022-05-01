import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import 'boxicons';
import logo from './Images/another/flogo.png';

function Nav() {
  const [active, seActive] = useState("");
  const activate = () => {
    seActive("activate")
  }
  return (
    <nav className="navbar">
        <div className="nav-contents">
          <div className="navlogo">
            <Link to="./"><img src={logo} alt='logo'/></Link>
          </div>
          <ul className="nav-container">
            <li onClick={activate} className="navlinks">
              <Link to='/'><div title="Home" className="links"><i
                  className={`bx bxs-home icon ${active}`}></i></div></Link>
            </li>
            <li /* onClick={activate1}  */className="navlinks">
              <Link to='/messages'><div title="Message" className="links"><i
                  className={`bx bxs-message-dots icon`}></i></div></Link>
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
