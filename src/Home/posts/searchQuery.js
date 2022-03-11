let userName
const getuname = e => {
    userName = e.target.value
}
const onload = e => {
    e.preventDefault()
}
const showUser = e => {
    e.preventDefault()
    // return console.log("Hi")
    fetch("http://photocorner33.herokuapp.com/user/getUser"+userName, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json())
        .then(data => console.log(data))
}
const searchUtils = {
    getuname,
    onload,
    showUser
}
export default searchUtils