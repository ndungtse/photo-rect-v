const checkAuthorization = async () => {
    try {
        let res = await fetch('https://photocorner33.herokuapp.com/user/checkForAccess', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                token: (localStorage.getItem('token'))
            })
        })
        res = await res.json()
        console.log(res);
        if (res.message === "No token generated go back login"||res.message === "invalid token") {
            console.log("Token is not there")
            window.location.replace('/login')
        }
        else if (res.message === "#Success") {
            // window.location.replace('/home')
            console.log('response', res)
            localStorage.setItem('userInfo', JSON.stringify(res.result.needed))
        }

    } catch (e) {
        console.log("Error here", e)
    }
}

module.exports = checkAuthorization
