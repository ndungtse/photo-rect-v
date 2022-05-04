// eslint-disable-next-line no-unused-vars
let previoususername, fullName, username, email, password, bio, userInfo
previoususername = localStorage.getItem("username")
const onload = async (e) => {
    return new Promise((resolve, reject)=>{
        fetch('https://photocorner33.herokuapp.com/user/loggedUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                previoususername: (previoususername)
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
    username = document.querySelector("#username").value
    password = document.querySelector("#password").value
    bio = document.querySelector("#bio").value
    console.log(previoususername)
    fetch('https://photocorner33.herokuapp.com/user/updateUser', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            previoususername:(previoususername),
            fullName: (fullName),
            username: (username),
            email: (email),
            password: (password)
        })
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.message === "USER UPDATED") {
                console.log(username, fullName);
                (username === "") ? console.log("username NOT UPDATED") : localStorage.setItem("username", username);
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
