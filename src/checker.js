
const check = (response) => {
    if (response.message === "No token generated go back login") {
        document.write(`${<p>No token generated. Click ${<a href="/login">here</a>} to go back</p>} `)
    }
}
const verification = async () => {
    const api = await fetch('https://photocorner33.herokuapp.com/user/authorize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
            token: (JSON.parse(localStorage.getItem('token')))
        })
    })
    const response = await api.json()
    console.log(response);
    if (response.message === '#loginfirst') {
        window.location.replace('/login')
    }
    else if (response.message === '#Success') {
        console.log("Still logged in!!!")
    }
    else{
        window.location.replace('/login')
    }
}

const checks = { verification, check }

export default checks;