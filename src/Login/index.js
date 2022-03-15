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
        // mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email, password
        })
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.response === "Email correct and passwords do not match") {
                window.alert("Password is incorrect")
            }
            else if (data.response === "Email incorrect") {
                window.alert("You wrote a wrong email my friend")
            }
            else {
                console.log(data)
                localStorage.userName = data.userName
                localStorage.fullName = data.fullName
                window.location.replace('http://photo-rect-v.vercel.app')
            }
        })

}
const loginUtils = {
    getemail, getpswd, onloginsubmit
}
export default loginUtils;