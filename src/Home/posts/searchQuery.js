import  check  from "../../checker"

/* eslint-disable no-unused-vars */
let username
const getuname = e => {
    // username = e.target.value
}
const onload = e => {
    // e.preventDefault()
}
const onsubmit = async () => {
    let urlPath = "http://localhost:5000/user/getUser/" + 'mprecieux'
    const res = await fetch(urlPath, {
        method: "GET",
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
    })
    // const user = await res.json()
    const user = await res.json()
    check(user)

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