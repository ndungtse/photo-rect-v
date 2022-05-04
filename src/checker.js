const checkAuthorization = async () => {
    try {
        let res = await fetch('https://photocorner33.herokuapp.com/user/checkForAccess', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json','Accept':'application/json' },
            credentials: 'include'
        })
        res = await res.json()
        console.log(res);
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
