/* eslint-disable */
import React, {useState, useEffect} from 'react'
import ChatInfo from './ChatInfo'
import Chat from './Chat'
import Recent from './Recent'
import { useMessage } from "./contexts/messageContext";
import { useUsers } from "./contexts/userContext";
import { BiMessageDots } from 'react-icons/bi'

function Unified() {
    const [start, setStart]= useState(false)
    const [before, setAfter] = useState(false)

    const { user } = useUsers();

    const mContextData = useMessage();
    const { socket, getRelMessages } = mContextData;

    const { setRoom1, setRoom, joinRoom, room } = useMessage();

    const startChat = async (e) => {
      await setRoom(e + user.id);
      await setRoom1(user.id + e);
      console.log(room);
      await joinRoom(user.name, e+user.id);
      setAfter(true)
      await getRelMessages(e + user.id);
      console.log('elleh');
    };
  return (
    <>
      <Recent startChat={startChat} />
      <Chat user={user} setStart={setStart} />
    </>
  );
}

export default Unified
