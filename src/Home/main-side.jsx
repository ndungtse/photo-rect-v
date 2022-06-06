import Main from './main';
import './Home.css';
import './side.css';
import React, { useState } from 'react';
import Side from './side'

function Mainside() {
  const [isVisible, setVisible] = useState(false);
  const [toggleicoClass, setToggleIconClass] = useState("bx bx-chevron-left");
  const [isToggled, setToggled] = useState(false)
    const handleShowRe = () => {
      setVisible(!isVisible);
    }
    
    const IconHandler = () => {
      if (toggleicoClass==='bx bx-chevron-left') {
        setToggleIconClass("bx bx-chevron-right")
      }else{
        setToggleIconClass("bx bx-chevron-left")
      }
    }

    const toggle = () => {
      setToggled(!isToggled);
      IconHandler()
    }
  return (
    <div className="main-side">
      <Main />
      <div onClick={toggle} className='toggle'>
        <i className={`duration-300 ${toggleicoClass}`}></i></div>
      {/* <Side
      isToggled={isToggled}
      
      setToggled={setToggled}
      toggle={toggle}
      isVisible={isVisible}
      setVisible={setVisible}
      handleShowRe={handleShowRe}></Side> */}
    </div>  
  );
}

export default Mainside;
