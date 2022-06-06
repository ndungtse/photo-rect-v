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
    fetch("http://localhost:5000/user/deleteUser", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: (username),
            password: (password)
        }),
        credentials:'include'
    }).then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.message === "ACCOUNT DELETED SUCCESSFULLY") {
                console.log(data)
                localStorage.clear()
                window.location.replace('http://localhost:3000/signup')
                window.alert("Account deleted successfully")
            }
            else if (data.message === "ACCOUNT NOT DELETED") {
                window.alert("Password is incorrect try again!!")
            }
            else if(data.message === "No token generated go back login"){
                window.location.replace('/login')
            }
        })
}
const deleteUtils = {
    getpswd,
    onload,
    onsubmit
}
export default deleteUtils