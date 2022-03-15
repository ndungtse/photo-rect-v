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
        .then(data => console.log(data))

}
const loginUtils = {
    getemail, getpswd, onloginsubmit
}
export default loginUtils;