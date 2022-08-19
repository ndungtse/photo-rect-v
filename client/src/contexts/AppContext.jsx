import React from "react";
import { useContext } from "react";

const AppContext = React.createContext();

export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
	const [isDark, setIsDark] = React.useState(null);

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

	const saveTheme = () => {
		localStorage.setItem("theme", isDark ? "dark" : "light");
	};

	React.useEffect(() => {
		getSavedTheme();
	}, []);

	React.useEffect(() => {
		if(isDark !== null){
			saveTheme();
		}
	}, [isDark]);

	return (
		<AppContext.Provider value={{ isDark, toggleDark }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
