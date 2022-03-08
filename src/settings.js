import React from 'react';
import './settings/settings.css';
import Nav from './Home/Nav'

const Settings = ({toggleLight,toggleDark, radioRef, radioRef1 ,tryThis}) => {
  /* const [check, setCheck] = useState("")

  const chec = "checked";
   */
  return (
    <div className='settings w-full flex'>
      <Nav />
      <div className='w-[95%]'>
        <h1 className='text-center'>Settings</h1>
        <div className='flex'>
          <div className='s-left flex flex-col w-[50%]'>
            <div className='pl-1'>
              <li>Prefferences: </li>
              <div className='p-cont flex items-center'>
                <p>Theme:</p>
                <div className='flex items-center pl-7'>
                  <div className='flex items-center pl-7'>
                    <input onClick={tryThis} onInput={toggleDark} type='radio' name='radio' ref={radioRef} /><label>Dark</label>
                  </div>
                  <div className='flex items-center pl-7'>
                    <input onClick={toggleLight} type='radio' name='radio' ref={radioRef1} /><label>Light</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='s-left flex flex-col w-[50%]'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings

