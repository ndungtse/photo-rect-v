let content

const getContent = (e) => {
    content = e.target.value
}
const onload = e => {
    e.preventDefault()
}
const onsubmit = e => {
    e.preventDefault()
    // return console.log("Hi")
    fetch("https://photocorner33.herokuapp.com/message/newMessage", {
        method: "POST",
        // mode: "no-cors",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
    }).then(res => res.json())
        .then(data => {
            // console.log("sdasdasd")
            if (data.message === "Message sent") {
                console.log(data)
            }
            else {
                console.log(data)
            }
        })
}
const messageUtils = {
    getContent,
    onload,
    onsubmit
}
export default messageUtils
//apropose, wget file link, man