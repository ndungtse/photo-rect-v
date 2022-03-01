import Main from './main';
import './Home.css';
import React, { useState } from 'react';
import Side from './side'

function Mainside() {
  const [isVisible, setVisible] = useState(false)
    //  isVisible='none';
    const handleShowRe = () => {
      setVisible(!isVisible);
    }
  return (
    <div className="main-side">
      <Main />
      <Side isVisible={isVisible}
      setVisible={setVisible}
      handleShowRe={handleShowRe}/>
    </div>  
  );
}

export default Mainside;
