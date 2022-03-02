import { useState } from "react"
import ReactDOM from 'react-dom';
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
        .then(data => console.log(data))
}
const showPosts = () => {
    fetch('http://localhost:8080/post/allPosts', {
        method: "GET",
        // mode:"no-cors",
        headers: { 'Content-Type':'application/json' }
    }).then(res => res.json())
        .then(data1 => ReactDOM.render(ArrangePosts(data1),document.getElementById('root')))
}
function ArrangePosts(data1) {
    let holder = []
    let header1, header2, caption
    for (var i = 0; i < data1.length; i++) {
        header1 = `User: ${data1[i].userName} <br>`
        header2 = `Posted on: ${data1[i].created} <br>`
        caption = data1[i].caption + `<br>`
        let text = [header1, header2,caption].join(' ')
        holder.push(text)
        // for (i = 0; i < data.length; i++) {
            
    
        // }

        // holder.push(post)
    }
    return holder
    // document.querySelector('.contents').innerHTML = arrangeAllTweetsOutput(data)

}
const postUtils = {
    onLoad, getCaption, onSubmit, showPosts
}
export default postUtils;