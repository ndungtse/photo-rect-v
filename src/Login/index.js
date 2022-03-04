let email, password
const getemail = e => {
    email = e.target.value
}
const getpswd = e => {
    password = e.target.value
}
const onloginsubmit = e => {
    e.preventDefault()
    fetch("http://localhost:5000/user/confirmUser", {
        method: "POST",
        mode:'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email, password
        })
    }).then(res => res.json())
        .then(data => {
            console.log(password)
            localStorage.userName = data.userName
            localStorage.fullName = data.fullName
            window.location.replace('http://localhost:3030')
        })

}
const loginUtils = {
    getemail, getpswd,onloginsubmit
}
export default loginUtils;