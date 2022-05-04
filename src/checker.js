const checkAuthorization = async () => {
    try {
        let res = await fetch('http://localhost:5000/user/checkForAccess', { method: 'GET', credentials: 'include' })
        res = await res.json()
        if (res.message === "No token generated go back login") {
            console.log("Token is not there")
            window.location.replace('/login')
        }
        else if (res.message === "#Success") {
            window.location.replace('/home')
        }

    } catch (e) {
        console.log("Error here", e)
    }
}

module.exports = checkAuthorization
