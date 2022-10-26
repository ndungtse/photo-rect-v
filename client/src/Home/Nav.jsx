import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import "../App.css";
import "boxicons";
import {
	BiMessageRoundedDots,
	BiUser,
	BiHome,
	BiGroup,
	BiCog,
	BiDoorOpen,
	BiLogOut,
	BiMenu,
} from "react-icons/bi";
import { deleteAllCookies } from "../contexts/RequireAuth";
import { useAuth } from "../contexts/AuthContext";
import { useApp } from "../contexts/AppContext";
import { debounce } from "../utils";

function Nav({ active }) {
	const [width, setWidth] = useState(0);
	const { isDark } = useApp();
	const navigate = useNavigate();
	const { setUser } = useAuth();
	const [mobile, setMobile] = useState(false);

	const handleLogout = () => {
		setUser(null);
		deleteAllCookies();
		navigate("/login", { replace: true });
	};

	const handleMobile = () => {
		if (window.innerWidth < 640) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	};

	useEffect(() => {
		if (typeof window !== undefined) {
			setWidth(window.innerWidth);
			window.addEventListener("resize", () => {
				setWidth(window.innerWidth);
				console.log(width);
				handleMobile()
			});
			handleMobile();
		}
	}, []);

	return (
		<>
			<div
				className={`z-[19] 
      duration-500 tab:h-[92vh] tab:py-4 shadow-inner tab:w-fit w-full flex tab:flex-col justify-between ${
				isDark
					? "bg-[#08021d] border-r-2 border-r-slate-200/20"
					: "bg-[#eff3f9] border-r-2 "
			}`}
			>
				<div
					className={`flex tab:flex-col w-full items-center px-0 ${
						isDark ? "text-slate-100" : "text-black"
					}`}
				>
					<Link
						style={{ width: mobile ? width / 5 : "100%" }}
						to="/"
						className={`${
							active === "home" &&
							"text-blue-500 tab:border-l-[3px] border-b-[3px border-blue-700"
						}
         flex cursor-pointer tab:mt-3 mx-auto items-center tab:flex-row flex-col tab:flex-row flex-col tab:w-full p-2 hover:text-blue-500`}
					>
						<BiHome className="text-xl" />
						<p className="tab:ml-3 text-[0.7em] tab:text-base">Home</p>
					</Link>
					<Link
						style={{ width: mobile ? width / 5 : "100%" }}
						to="/messages"
						className={`${
							active === "messages" &&
							"text-blue-500 tab:border-l-[3px] border-b-[3px border-blue-700"
						}
        flex cursor-pointer tab:mt-3 mx-auto items-center tab:flex-row flex-col tab:w-full p-2 hover:text-blue-500`}
					>
						<BiMessageRoundedDots className="text-xl" />
						<p className="tab:ml-3 text-[0.7em] tab:text-base">Messages</p>
					</Link>
					<Link
						style={{ width: mobile ? width / 5 : "100%" }}
						to="/profile"
						className={`${
							active === "profile" &&
							"text-blue-500 tab:border-l-[3px] border-b-[3px border-blue-700"
						}
        flex cursor-pointer tab:mt-3 mx-auto items-center tab:flex-row flex-col tab:w-full p-2 hover:text-blue-500`}
					>
						<BiUser className="text-xl" />
						<p className="tab:ml-3 text-[0.7em] tab:text-base">Profile</p>
					</Link>
					<Link
						style={{ width: mobile ? width / 5 : "100%" }}
						to=""
						className={`${
							active === "groups" &&
							"text-blue-500 tab:border-l-[3px] border-b-[3px border-blue-700"
						}
          flex cursor-pointer tab:mt-3 mx-auto items-center tab:flex hidden tab:flex-row flex-col tab:w-full p-2 hover:text-blue-500`}
					>
						<BiGroup className="text-xl" />
						<p className="tab:ml-3 text-[0.7em] tab:text-base">Groups</p>
					</Link>
				</div>
				<div
					className={`flex tab:flex-col w-full items-center tab:px-3 ${
						isDark ? "text-slate-100" : "text-black"
					}`}
				>
					<Link
						style={{ width: mobile ? width / 5 : "100%" }}
						to={`/settings`}
						className={`${
							active === "settings" &&
							"text-blue-500 tab:border-l-[3px] border-b-[3px border-blue-700"
						}
          flex cursor-pointer tab:mt-3 mx-auto items-center tab:flex-row flex-col tab:w-full p-2 hover:text-blue-500`}
					>
						<BiCog className="text-xl" />
						<p className="tab:ml-3 text-[0.7em] tab:text-base">Settings</p>
					</Link>
					<div
						style={{ width: mobile ? width / 5 : "100%" }}
						onClick={handleLogout}
						className={`
          flex cursor-pointer tab:mt-3 mx-auto items-center tab:flex-row flex-col tab:w-full p-2 hover:text-blue-500`}
					>
						<BiLogOut className="text-xl" />
						<p className="tab:ml-3 text-[0.7em] tab:text-base">Logout</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Nav;
