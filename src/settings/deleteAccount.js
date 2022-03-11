const getuname = e => {
    userName = e.target.value
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
            userName, password
        })
    }).then(res => res.json())
        .then(data => {
            // console.log("sdasdasd")
            if (data.message === "ACCOUNT DELETED SUCCESSFULLY") {
                console.log(data)
                localStorage.removeItem("userName")
                localStorage.removeItem("fullName")
                window.location.replace('http://localhost:3030/signup')
            }
            else {
                window.alert("⚠️⚠️⚠️Either your username or password is incorrect try again!!⚠️⚠️⚠️")
            }
        })
}
const deleteUtils = {
    getuname,
    getpswd,
    onload,
    onsubmit
}
export default deleteUtils