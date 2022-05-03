/* eslint-disable no-unused-vars */
let userName
const getuname = e => {
    // userName = e.target.value
}
const onload = e => {
    // e.preventDefault()
}
const onsubmit = async () => {
    let urlPath = "http://localhost:5000/user/getUser/" + userName
    const res = await fetch(urlPath, {
        method: "GET",
        credentials:'include',
        headers: { 'Content-Type': 'application/json' },
    })
    // const user = await res.json()
    const user = await res.json()
    console.log(user);
    if (user === []) {
        console.log({ message: "No user found with that username" })
    }
    else {
        console.log(user)
    }
    return user
}
const searchUtils = {
    getuname,
    onload,
    onsubmit
}
export default searchUtils