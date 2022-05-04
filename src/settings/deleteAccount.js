let password, username
const getpswd = e => {
    password = e.target.value
}
const onload = e => {
    e.preventDefault()
}
const onsubmit = e => {
    e.preventDefault()
    username = document.querySelector("#username").value
    password = document.querySelector("#password").value
    console.log(username, password)
    fetch("https://photocorner33.herokuapp.com/user/deleteUser", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: (username),
            password: (password)
        })
    }).then(res => res.json())
        .then(data => {
            if (data.message === "ACCOUNT DELETED SUCCESSFULLY") {
                console.log(data)
                localStorage.clear()
                window.location.replace('https://photo-rect-v.vercel.app/signup')
                window.alert("Account deleted successfully")
            }
            else if (data.message === "ACCOUNT NOT DELETED") {
                window.alert("Password is incorrect try again!!")
            }
            else if (data.message === "username INCORRECT") {
                window.alert("Type the username correctly please!!")
            }
        })
}
const deleteUtils = {
    getpswd,
    onload,
    onsubmit
}
export default deleteUtils