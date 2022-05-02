// eslint-disable-next-line no-unused-vars
let previousUserName, fullName, userName, email, password, bio, userInfo
previousUserName = localStorage.getItem("userName")
const onload = async (e) => {
    return new Promise((resolve, reject)=>{
        fetch('http://localhost:5000/user/loggedUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                previousUserName: (previousUserName)
            })
        }).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    })
}

const onSubmit = e => {
    e.preventDefault()
    email = document.querySelector("#email").value
    fullName = document.querySelector("#fullname").value
    userName = document.querySelector("#username").value
    password = document.querySelector("#password").value
    bio = document.querySelector("#bio").value
    console.log(previousUserName)
    fetch('http://localhost:5000/user/updateUser', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            previousUserName:(previousUserName),
            fullName: (fullName),
            userName: (userName),
            email: (email),
            password: (password)
        })
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.message === "USER UPDATED") {
                console.log(userName, fullName);
                (userName === "") ? console.log("USERNAME NOT UPDATED") : localStorage.setItem("userName", userName);
                (fullName === "") ? console.log("FULLNAME NOT UPDATED") : localStorage.setItem("fullName", fullName);
                window.alert("ACCOUNT UPDATED SUCCESSFULLY")
            }
            else if (data.message === "No user found") {
                window.alert("SORRY NO USER FOUND")
            }
            else if (data.message === "USER WITH THAT EMAIL ALREADY EXISTS") {
                window.alert("USER WITH THAT EMAIL ALREADY EXISTS")
            }
            else {
                window.alert("ERROR IN UPDATING ACCOUNT")
            }
        })
}
const updateUtils = {
    onSubmit,
    onload
}
export default updateUtils
