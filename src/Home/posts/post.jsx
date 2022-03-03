// import { useState } from "react"
// import ReactDOM from 'react-dom';
let caption, userName
const getCaption = (e) => {
    caption = e.target.value
}
const onLoad = (e) => {
    e.preventDefault()
}
const onSubmit = (e) => {
    e.preventDefault()
    userName = localStorage.getItem("userName")
    // return console.log(JSON.stringify({userName,caption}) )
    // userName = localStorage.getItem("userName")
    fetch('http://localhost:8080/post/newPost', {
        method: "POST",
        // mode:"no-cors",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, caption })
    })
        .then(res => res.json())
        .then(data => console.log([`${data.userName}`, `Created ${data.created}`, data.caption].join('\n'))
        )
}
// function arrangeNewPost(data) {
//         console.log([`${data.userName}`,`Created ${data.created}`, data.caption].join('\n'))
// }
const showPosts = () => {
    fetch('http://localhost:8080/post/allPosts', {
        method: "GET",
        // mode:"no-cors",
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
        .then(data1 => console.log(arrangePosts(data1)))
}
function arrangePosts(data1) {
    let holder = []
    let header1, header2, caption
    for (var i = 0; i < data1.length; i++) {
        header1 = `${data1[i].userName}` + "\n"
        header2 = `Created ${data1[i].created}` + "\n"
        caption = data1[i].caption + "\n"
        holder.push(header1, header2, caption)
    }
    return holder.join('\n')
    // document.querySelector('.contents').innerHTML = arrangeAllTweetsOutput(data)

}
const postUtils = {
    onLoad, getCaption, onSubmit, showPosts
}
export default postUtils;