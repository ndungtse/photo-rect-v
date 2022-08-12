import React, { useContext, useState, useEffect } from "react";
import { io } from "socket.io-client";
import { useAuth } from "../../contexts/AuthContext";

const MessageContext = React.createContext();

const socket = io.connect("https://zamuka-chat.herokuapp.com");

export function useMessage() {
	return useContext(MessageContext);
}

export function MessageProvider({ children }) {
	const [room, setRoom] = useState("");
	const [room1, setRoom1] = useState("");
	const [start, setStart] = useState(false);
	const [relMessages, setRelMessages] = useState([]);
	const [mate, setMate] = useState("");
	const { user } = useAuth();

	const joinRoom = (username, room) => {
		if (username !== "" && room !== "") {
			socket.emit("join_room", room);
			console.log(`${username} joined room ${room}`);
			setStart(!start);
		}
	};

	const getRelMessages = async (room) => {
		const res = await fetch("https://zamuka.herokuapp.com/hidden/messages");
		const messages = await res.json();
		const relMess = messages.filter((m) => m.room === room || m.room1 === room);
		console.log(room, relMess);
		setRelMessages(relMess);
	};

	const startChat = async (e) => {
		setMate(e);
		setRoom(e + user._id);
		setRoom1(user._id + e);
		console.log(room);
		joinRoom(user.username, e + user._id);
		await getRelMessages(e + user._id);
		console.log("elleh");
	};

	useEffect(() => {
    console.log(mate);
		if (room !== "") {
      console.log("hello");
			const muser = room.replace(user._id, "");
      console.log(muser);
      setMate(muser)
		}
	}, [room]);

	useEffect(() => {
    if(mate !==''){
		getRelMessages(room);
  }
	}, [mate, room]);

	return (
		<MessageContext.Provider
			value={{
				room,
				setRoom,
				socket,
				room1,
				relMessages,
				setRelMessages,
				setRoom1,
				joinRoom,
				start,
				setStart,
				getRelMessages,
				mate,
				setMate,
				startChat,
			}}
		>
			{children}
		</MessageContext.Provider>
	);
}
