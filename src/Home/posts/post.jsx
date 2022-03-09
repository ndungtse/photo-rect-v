
let caption, userName, message
const getCaption = (e) => {
    caption = e.target.value
}
const onLoad = (e) => {
    e.preventDefault()
}
const onSubmit = (callback) => {
    
    userName = localStorage.getItem("userName")
    fetch('http://localhost:5000/post/newPost', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, caption })
    })
        .then(res => res.json())
        .then(data => {console.log(data);callback()}/*console.log([`${data.userName}`, `Created ${data.created}`, data.caption].join('\n'))*/)
}

const showPosts = async () => {
   const res = await fetch('http://localhost:5000/post/allPosts', {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    })
    const posts = await res.json()
    console.log(res,posts)
    return posts
}

const postUtils = {
    onLoad, getCaption, onSubmit, showPosts,message
}
export default postUtils;