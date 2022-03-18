let password, userName
setTimeout(() => {
    userName = document.querySelector("#username").value
}, 10000);
const getpswd = e => {
    password = e.target.value
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
            userName: (userName),
            password: (password)
        })
    }).then(res => res.json())
        .then(data => {
            if (data.message === "ACCOUNT DELETED SUCCESSFULLY") {
                console.log(data)
                localStorage.clear()
                window.location.replace('http://photo-rect-v.vercel.app/signup')
                window.alert("Account deleted successfully")
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
    getpswd,
    onload,
    onsubmit
}
export default deleteUtils