let previousUserName, fullName, userName, email, password, bio
previousUserName = localStorage.getItem("userName")
const getFullName = e => {
    fullName = e.target.value
}
const getUserName = e => {
    userName = e.target.value
}
const getEmail = e => {
    email = e.target.value
}
const getPassword = e => {
    password = e.target.value
}
const getBio = e => {
    bio = e.target.value
}
const onload = e => {
    // e.preventDefault()
}
const onSubmit = e => {
    e.preventDefault()
    fetch('http://photocorner33.herokuapp.com/user/updateUser', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            previousUserName: (previousUserName),
            fullName: (fullName),
            userName: (userName),
            email: (email),
            password: (password)
        })
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.message === "USER UPDATED") {
                window.alert("ACCOUNT UPDATED SUCCESSFULLY")
            }
            else if (data.message === "No user found") {
                window.alert("SORRY NO USER FOUND")
            }
            else if (data.message === "USER WITH THAT EMAIL OR USERNAME EXISTS TRY AGAIN") {
                window.alert("USER WITH THAT USERNAME OR EMAIL ALREADY EXISTS")
            }
            else {
                window.alert("ERROR IN UPDATING ACCOUNT")
            }
        })
}
const updateUtils = {
    onSubmit,
    onload,
    getEmail,
    getFullName,
    getUserName,
    getPassword,
    getBio
}
export default updateUtils
