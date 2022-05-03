let email, password
const getemail = e => {
    email = e.target.value
}
const getpswd = e => {
    password = e.target.value
}

const onloginsubmit = e => {
    e.preventDefault()
        // console.log(email,password)
    fetch("http://localhost:5000/user/login", {
        method: "POST",
        // mode: 'no-cors',
        credentials:'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email:(email),
             password:(password) 
        })
    }).then(res => res.json())
        .then(data => {
            console.log(data.message)
            if(data.message === "Can continue"){
                window.location.replace('http://localhost:3000/home')
            }
            else if(data.message === "No token generated try logging in again"){
                window.alert("No token generated try logging in again")
            }
            else if(data.message === "Wrong login info"){
                window.alert("Login info incorrect")
            }
        })

}
const loginUtils = {
    getemail, getpswd, onloginsubmit
}
export default loginUtils;