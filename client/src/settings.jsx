import React, { useState } from "react";
import "./settings/settings.css";
import Nav from "./Home/Nav";
import Sleft from "./settings/sleft";
import deleteUtils from "./settings/deleteAccount";
import { BiToggleLeft, BiToggleRight } from "react-icons/bi";
import { useApp } from "./contexts/AppContext";
import TopBar from "./Home/TopBar";
import Layout from "./others/Layout";

const Settings = () => {
	const [showDel, setShowDel] = useState(false);
	const { isDark, toggleDark } = useApp();

	return (
		<Layout>
			{showDel ? <Delete setShowDel={setShowDel} /> : null}
			<h1 className="text-center">Settings</h1>
			<div className="flex set-cont">
				<div className="s-left flex flex-col w-[50%]">
					<div className="pl-1">
						<li>Prefferences: </li>
						<div className="p-cont flex items-center set-view px-4">
							<p>Dark mode:</p>

							<div className="flex items-center pl-7">
								<div className="flex items-center pl-7">
									<label>Off</label>
									{isDark ? (
										<BiToggleRight
											onClick={toggleDark}
											className="text-4xl text-blue-600 cursor-pointer mx-2"
										/>
									) : (
										<BiToggleLeft
											onClick={toggleDark}
											className="text-4xl cursor-pointer mx-2"
										/>
									)}
									<label>On</label>
								</div>
							</div>
						</div>
					</div>
					<div className="pl-1 set-view">
						<li>Account Settings: </li>
						<div className="p-cont pt-2 flex items-center px-4 set-view">
							<p className="">Account delete:</p>
							<button
								onClick={() => setShowDel(true)}
								className="flex items-center px-1 rounded-[5px] ml-7 bg-red-400"
							>
								Delete Account
							</button>
						</div>
					</div>
				</div>
				<Sleft />
			</div>
			<p className="text-center pt-2">
				©️ 2022 Photo Corner. All rights reserved
			</p>
		</Layout>
	);
};

export default Settings;

const Delete = ({ setShowDel }) => {
	return (
		<div
			className={`bg-black/70 flex 
          items-center w-full absolute h-screen justify-center`}
		>
			<form
				className="delform py-5 px-5 "
				onLoad={deleteUtils.onload}
				onSubmit={deleteUtils.onsubmit}
			>
				<h1 className="text-center text-xl">
					Confirm deletion of your account
				</h1>
				<p className="text-center mt-4">This action cannot be undone.</p>
				<p className="text-center">
					Type <strong>YOUR PASSWORD</strong> in the password field.
				</p>
				<div className="labels mt-5">
					<label>username</label>
					<input
						className="bg-white border-[1.5px] rounded-m ml-3 p-1
               border-black"
						id="username"
						type="text"
					/>
				</div>
				<div className="labels mt-5">
					<label>Password</label>
					<input
						className="bg-white border-[1.5px] rounded-m ml-3 p-1
               border-black"
						id="password"
						type={"password"}
						placeholder="Enter your password"
						required
					/>
				</div>
				<div className="labels w-full mt-3">
					<input
						className="bg-red-300 w-full p-2 hover:bg-red-400 dele duration-300 cursor-pointer"
						type="submit"
						value="Delete"
					/>
				</div>
				<div className="labels mt-3 w-full">
					<input
						onClick={() => setShowDel(false)}
						type="button"
						className="cursor-pointer w-full p-2 bg-slate-300 hover:bg-slate-400 duration-300 "
						value="Cancel"
					/>
				</div>
			</form>
		</div>
	);
};
