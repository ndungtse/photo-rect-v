let fullName, email, password, userName

const getfullname = e => {
    fullName = e.target.value
}
const getuname = e => {
    userName = e.target.value
}
const getemail = e => {
    email = e.target.value
}
const getpswd = e => {
    password = e.target.value
}

const onload = e => {
    e.preventDefault()
}
const onsubmit = e => {
    e.preventDefault()
    // return console.log("Hi")
    fetch("http://photocorner33.herokuapp.com/user/registerUser", {
        method: "POST",
        // mode: "no-cors",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            fullName, userName, email, password
        })
    }).then(res => res.json())
        .then(data => {
            console.log("sdasdasd")
            if (data.message === "User with that username already exists") {
                window.alert("User with that username already exists. If you already have an account then login")
            }
            else if (data.message === "User with that email already exists") {
                window.alert("User with that email already exists. If you already have an account then login")
            }
            else if (data.message === "Account created") {
                console.log(data)
                localStorage.userName = userName
                localStorage.fullName = fullName
                window.location.replace('http://localhost:3030')
            }
            else {
                window.alert("Error in creating new account for you please")
            }
        })
}
const Utils = {
    getemail,
    getfullname,
    getuname,
    getpswd,
    onload,
    onsubmit
}
export default Utils
//apropose, wget file link, man