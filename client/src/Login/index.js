import { getCookie, setCookie } from "../contexts/RequireAuth";

export const login = async(data) => {
    fetch("https://photocorner33.herokuapp.com/user/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(data => {
            if(data.message === "Can continue"){
                setCookie('token', data.token, 3)
                window.location.replace('http://localhost:3030/home')
            }
            else if(data.message === "No token generated try logging in again"){
                window.alert("No token generated try logging in again")
            }
            else if(data.message === "Wrong login info"){
                window.alert("Login info incorrect")
            }
            
        })
        .catch(err => {
            console.log(err)
        }
        )   
}

export const follow = async (data) => {
    delete data._v;
    data.biography="";
    const res = await fetch("http://photocorner33.herokuapp.com/user/followUser", {
        method: "POST",
        headers: {
             'Content-Type': 'application/json',
             'authorization': `Bearer ${getCookie("token")}` },
        body: JSON.stringify(data)
})
    const data1 = await res.json()
    console.log(data1);
}

export const unfollow = async (data) => {
    delete data._v;
    data.biography="";
    const res = await fetch("http://photocorner33.herokuapp.com/user/unfollow", {
        method: "POST",
        headers: {
             'Content-Type': 'application/json',
             'authorization': `Bearer ${getCookie("token")}` },
        body: JSON.stringify(data)
})
    const data1 = await res.json()
    console.log(data1);
}