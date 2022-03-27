
const onload = e => {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:5000/user/allUsers', {
            headers: { 'Content-Type': 'application/json' },
            method: "GET"
        }).then(res => res.json())
            .then(data => {
                // console.log(data.users)
                resolve(data)
            })
    })
}
const allUsers = {
    onload
}
export default allUsers;