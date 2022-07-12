import React from 'react'
import { PostProvider } from '../contexts/PostContext';
import Profile from './Profile';

const Prof = () => {
  return (
    <PostProvider>
        <Profile />
    </PostProvider>
  )
}

export default Prof