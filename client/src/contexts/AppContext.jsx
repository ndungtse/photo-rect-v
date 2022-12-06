import React from "react";
import { useContext } from "react";
import { useAuth } from "./AuthContext";
import { getCookie } from "./RequireAuth";

const AppContext = React.createContext();

export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
	const [isDark, setIsDark] = React.useState(null);
	const [following, setFollowing] = React.useState([]);
	const { user } = useAuth();

	const toggleDark = () => setIsDark(!isDark);

	const getSavedTheme = () => {
		const savedTheme = localStorage.getItem("theme");
		if (!savedTheme) setIsDark(false);
		if (savedTheme === "dark") {
			console.log("dark set");
			setIsDark(true);
		} else {
			console.log("light set");
			setIsDark(false);
		}
		console.log(savedTheme);
	};

	const getFollowingData = async () => {
		const res = await fetch(
			`https://photocorner33.onrender.com/user/getFollowingData`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
			}
		);
		const data = await res.json();
		setFollowing(data.following);
		return data.following;
	};

	const saveTheme = () => {
		localStorage.setItem("theme", isDark ? "dark" : "light");
	};

	React.useEffect(() => {
		getSavedTheme();
		if (user) getFollowingData();
	}, []);

	React.useEffect(() => {
		if (isDark !== null) {
			saveTheme();
		}
	}, [isDark]);

	return (
		<AppContext.Provider
			value={{ isDark, toggleDark, following, getFollowingData }}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
