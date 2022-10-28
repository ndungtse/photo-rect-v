import React from "react";
import { useApp } from "../contexts/AppContext";
import Nav from "../Home/Nav";
import TopBar from "../Home/TopBar";
import { useUsers } from "../Messages/contexts/userContext";

const Layout = ({ children, active }) => {
  const { isDark } = useApp();
  const { setMobile } = useUsers();
	return (
		<div
			onClick={() => setMobile(false)}
			className="main-container flex-col w-full h-screen overflow-hidden"
		>
			<TopBar />
			<div
				className={`main-side w-full tab:flex-row flex flex-col-reverse ${
					isDark && "dark-theme text-white"
				}`}
			>
				<Nav active={active} />
				<div className="main w-full h-[86vh] tab:h-screen">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
