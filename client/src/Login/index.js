import { getCookie, setCookie } from "../contexts/RequireAuth";

export const login = async(data) => {
    fetch("https://photocorner33.onrender.com/user/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.message === "Can continue") {
					setCookie("token", data.token, 3);
					window.location.href = "/";
				} else if (data.message === "No token generated try logging in again") {
					window.alert("No token generated try logging in again");
				} else if (data.message === "Wrong login info") {
					window.alert("Login info incorrect");
				}
			})
			.catch((err) => {
				console.log(err);
			});   
}

export const follow = async (data) => {
    const res = await fetch(
			`https://photocorner33.onrender.com/user/followUser/${data._id}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${getCookie("token")}`,
				},
				body: JSON.stringify(data),
			}
		);
    const data1 = await res.json()
    console.log(data1);
}

export const unfollow = async (data) => {
    const res = await fetch(
			`https://photocorner33.onrender.com/user/unfollow/${data._id}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${getCookie("token")}`,
				},
				body: JSON.stringify(data),
			}
		);
    const data1 = await res.json()
    console.log(data1);
}