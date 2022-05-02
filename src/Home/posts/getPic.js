const picture = document.querySelector('#file').value
const getPic = e => {
    e.preventDefault()
    fetch("http://localhost:5000/post/upload", {
        headers: { 'Content-Type': 'application/json' },
        method: "POST",
        body: {
            file: picture
        }
    })
}