import React from "react";
import { useContext } from "react";

const AppContext = React.createContext();

export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
	const [isDark, setIsDark] = React.useState(false);

	const toggleDark = () => setIsDark(!isDark);

	const getSavedTheme = () => {
		const savedTheme = localStorage.getItem("theme");
		if (!savedTheme) return;
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

	// React.useEffect(() => {
		
	// }, []);

	React.useEffect(() => {
		saveTheme();
		console.log(isDark);
	}, [isDark]);

	return (
		<AppContext.Provider value={{ isDark, toggleDark }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
