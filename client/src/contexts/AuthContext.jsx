import React from "react";
import jwtdecode from "jwt-decode";
import { deleteAllCookies, getCookie } from "./RequireAuth";
import AnimatedLogo from "../others/AnimatedLogo";

let AuthContext = React.createContext();

export const useAuth = () => {
	return React.useContext(AuthContext);
};

export default function AuthProvider({ children }) {
	let [user, setUser] = React.useState(undefined);

	const decodeToken = async () => {
		const token = getCookie("token");
		if (token) {
			try {
				const userDetails = await jwtdecode(token);
				console.log(userDetails);
				const userd = await getUserById(userDetails.userid);
				return setUser(userd);
			} catch (err) {
				console.log(err);
				return setUser(null);
			}
		}
		return setUser(null);
	};
	React.useEffect(() => {
		console.log('decoding');
		decodeToken();
	}, []);

	let value = { user, setUser };

	return (
		<>
			{user === undefined ? (
				<AnimatedLogo />
			) : (
				<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
			)}
		</>
	);
}

export const getUserById = async (id) => {
	try {
		const res = await fetch(
			`https://photocorner33.onrender.com/user/getUserByID/${id}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
			}
		);
		if (res.status !== 200) return null;
		const data = await res.json();
		return data.user;
	} catch (error) {
		console.log(error);
		return null;
	}
};
