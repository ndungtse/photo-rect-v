let userName,password
const getuname = e => {
    userName = e.target.value
    console.log(userName)
}
const getpswd = e => {
    password = e.target.value
    console.log(password)
}
const onload = e => {
    e.preventDefault()
}
const onsubmit = e => {
    e.preventDefault()
    fetch("http://photocorner33.herokuapp.com/user/deleteUser", {
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
                window.location.replace('http://photo-rect-v.vercel.app/signup')
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