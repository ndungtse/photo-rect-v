let userName, password
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
    fetch("http://localhost:5000/user/deleteUser", {
        method: "POST",
        // mode: "no-cors",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userName: (userName),
            password: (password)
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
            else if (data.message === "ACCOUNT NOT DELETED") {
                window.alert("⚠️⚠️⚠️Password is incorrect try again!!⚠️⚠️⚠️")
            }
            else if (data.message === "USERNAME INCORRECT") {
                window.alert("⚠️⚠️⚠️Type the username correctly please!!⚠️⚠️⚠️")
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