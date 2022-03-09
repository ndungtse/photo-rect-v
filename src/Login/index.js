let email, password
const getemail = e => {
    email = e.target.value
}
const getpswd = e => {
    password = e.target.value
}
const onloginsubmit = e => {
    e.preventDefault()
    fetch("http://photocorner33.herokuapp.com/user/confirmUser", {
        method: "POST",
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email, password
        })
    }).then(res => res.json())
        .then(data => {
            if (data.message === "Email incorrect but passwords do not match") {
                window.alert("HHHHHH,😂😂😂😂😂😂Dude,both email and passwords are wrong")
            }
            else if (data.message === "Email incorrect but passwords match") {
                window.alert("You wrote a wrong email my friend")
            }
            else if (data.message === "Email correct but passwords match") {
                window.alert("You wrote a wrong email my friend")
            }
            console.log(data)
            localStorage.userName = data.userName
            localStorage.fullName = data.fullName
            window.location.replace('http://localhost:3030')
        })

}
const loginUtils = {
    getemail, getpswd, onloginsubmit
}
export default loginUtils;