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
    fetch("https://photocorner33.herokuapp.com/user/confirmUser", {
        method: "POST",
        // mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email:(email),
             password:(password) 
        })
    }).then(res => res.json())
        .then(data => {
            console.log(data.message)
            if(data.message === "Email correct and passwords match"){
                console.log(data.user.fullName)
                localStorage.fullName = data.user.fullName
                localStorage.userName = data.user.userName
                window.location.replace('https://photo-rect-v.vercel.app')
            }
            else if(data.message === "Email incorrect "){
                window.alert("Email incorrect")
            }
            else if(data.message === "Email correct and passwords do not match"){
                window.alert("Password is incorrect")
            }
        })

}
const loginUtils = {
    getemail, getpswd, onloginsubmit
}
export default loginUtils;