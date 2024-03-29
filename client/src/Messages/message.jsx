/* eslint-disable */
import React, { useState, useEffect } from "react";
import UpTitles from "./uptitles";
import { MessageProvider, useMessage } from "./contexts/messageContext";
import Unified from "./Unified";
import Nav from "../Home/Nav";
import { useParams } from "react-router-dom";
import { useUsers } from "./contexts/userContext";
import LinearLoader from "../utils/LinearProgress";
import { useApp } from "../contexts/AppContext";
import TopBar from "../Home/TopBar";

function Messages() {
	const { roomId } = useParams();
	const { mate, setMate, setRoom, setRoom1 } = useMessage();
	const { setMobile } = useUsers();
	const [linear, setLinear] = useState(false);
	const { isDark } = useApp();
	
	useEffect(() => {
		return () => {
			setMate("");
			setRoom("");
			setRoom1("");
		};
	}, []);

	return (
		<div
			onClick={() => setMobile(false)}
			className={`w-full flex flex-col h-screen ${
				isDark ? "bg-[#0a0520] dark-theme text-white" : "bg-[#edf1f8]"
			} overflow-hidden`}
		>
			<TopBar />
			<div className="flex w-full tab:flex-row flex-col-reverse">
				<Nav active={`messages`} />
				<div className="flex w-full h-[86vh] tab:h-fit">
					<Unified roomId={roomId} setLinear={setLinear} />
				</div>
			</div>
			{linear && <LinearLoader />}
		</div>
	);
}

export default Messages;
