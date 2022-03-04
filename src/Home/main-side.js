import Main from './main';
import './Home.css';
import './side.css';
import React, { useState } from 'react';
import Side from './side'

function Mainside() {
  const [isVisible, setVisible] = useState(false);
  const [isToggled, setToggled] = useState(false)
    const handleShowRe = () => {
      setVisible(!isVisible);
      
    }
    
    const toggle = () => {
      setToggled(!isToggled);
    }
  return (
    <div className="main-side">
      <Main />
      <div onClick={toggle} className='toggle'>
        <i className={`bx bx-chevron-left`}></i></div>
      <Side
      isToggled={isToggled}
      
      setToggled={setToggled}
      toggle={toggle}
      isVisible={isVisible}
      setVisible={setVisible}
      handleShowRe={handleShowRe}></Side>
    </div>  
  );
}

export default Mainside;
