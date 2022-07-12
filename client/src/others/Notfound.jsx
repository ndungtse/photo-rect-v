import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {

  return (
    <>
      <div className="h-[100vh] flex flex-col items-center justify-center w-full">
        <h1 className="text-[6em]">404</h1>
        <p>Page Not Found</p>
        <Link to="/">
          <p className="text-green-900">Go To Homepage</p>{" "}
        </Link>
      </div>
    </>
  );
}

export default NotFound