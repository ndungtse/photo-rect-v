import React from 'react'

function Test({usermess, setusername}) {

  const setUser = (e)=>{
    setusername({name: e.target.textContent, id: e.target.id});
    const user = {
      name: e.target.textContent,
      id: e.target.id,
    };
    localStorage.setItem("username",JSON.stringify(user));
  }

  return (
    <div>
        <p>Log as</p>
        {usermess.map(user => (
          <div key={user.id}
           id={user.id}
           onClick={setUser}
           className='mt-2 bg-blue-500 cursor-pointer'>
            {user.username}
          </div>
        ))}
    </div>
  )
}

export default Test