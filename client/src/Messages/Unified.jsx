/* eslint-disable */
import React, {useState, useEffect} from 'react'
import Chat from './Chat'
import Recent from './Recent'
import { useMessage } from "./contexts/messageContext";
import { useAuth } from '../contexts/AuthContext';

function Unified({roomId}) {
    const [start, setStart]= useState(false)
    const [after, setAfter] = useState(false)
    const { mate } = useMessage()

    const { user } = useAuth();

  return (
    <>
      <Recent roomId={roomId} />
      <Chat user={user} roomId={roomId} setAfter={setAfter}
      setStart={setStart} mate={mate} after={after} />
    </>
  );
}

export default Unified
