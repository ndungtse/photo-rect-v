let userName
const getuname = e => {
    userName = e.target.value
}
const onload = e => {
    e.preventDefault()
}
const onsubmit = async (callback) => {
    let urlPath = "http://photocorner33.herokuapp.com/user/getUser/" + userName
    const res = fetch(urlPath, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    })
    // const user = await res.json()
    const user = await (await res).json()
    if (user == []) {
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