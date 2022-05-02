const picture = document.querySelector('#file').value
const getPic = e => {
    e.preventDefault()
    fetch("https://photocorner33.herokuapp.com/post/upload", {
        headers: { 'Content-Type': 'application/json' },
        method: "POST",
        body: {
            file: picture
        }
    })
}