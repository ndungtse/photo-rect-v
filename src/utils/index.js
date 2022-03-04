let fullName,email,password,userName

const getfullname = e =>{
    fullName = e.target.value
}
const getuname = e =>{
    userName = e.target.value
}
const getemail = e =>{
    email = e.target.value
}
const getpswd = e =>{
    password = e.target.value
}

const onload = e =>{
    e.preventDefault()
}
const onsubmit = e=>{
    e.preventDefault()
    fetch("http://localhost:3000/user/registerUser",{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            fullName,userName,email,password
        })
    }).then(res => res.json())
    .then(data => {
        console.log(data)
        localStorage.userName = userName
        localStorage.fullName = fullName
        window.location.replace('http://localhost:3030')
    })
    
}
const Utils = {
    getemail,
    getfullname,
    getuname,
    getpswd,
    onload,
    onsubmit
}
export default Utils
//apropose, wget file link, man