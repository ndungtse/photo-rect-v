/* eslint-disable */
import React, {useState, useEffect} from 'react'
import ChatInfo from './ChatInfo'
import Chat from './Chat'
import Recent from './Recent'
import { useMessage } from "./contexts/messageContext";
import { useUsers } from "./contexts/userContext";
import { BiMessageDots } from 'react-icons/bi'
import { useAuth } from '../contexts/AuthContext';

function Unified() {
    const [start, setStart]= useState(false)
    const [after, setAfter] = useState(false)

    const data = useAuth();
    const user = data.user.needed;

    const mContextData = useMessage();
    const { socket, getRelMessages } = mContextData;

    const { setRoom1, setRoom, joinRoom, room } = useMessage();

    const startChat = async (e) => {
      await setRoom(e + user._id);
      await setRoom1(user._id + e);
      console.log(room);
      await joinRoom(user.username, e+user._id);
      setAfter(true)
      await getRelMessages(e + user._id);
      console.log('elleh');
    };
  return (
    <>
      <Recent startChat={startChat} />
      <Chat user={user} setStart={setStart} after={after} />
    </>
  );
}

export default Unified
