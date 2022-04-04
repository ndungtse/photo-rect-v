
let caption, userName, message
const getCaption = (e) => {
    caption = e.target.value
}
const onLoad = (e) => {
    e.preventDefault()
}
const onSubmit = (callback) => {
    
    userName = localStorage.getItem("userName")
    fetch('https://localhost:5000/post/newPost', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, caption })
    })
        .then(res => res.json())
        .then(data => {console.log({message:"All data retrieved"});callback()})
}

const showPosts = async () => {
   const res = await fetch('https://localhost:5000/post/allPosts', {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    })
    const posts = await res.json()
    console.log(res)
    return posts
}

const postUtils = {
    onLoad, getCaption, onSubmit, showPosts,message
}
export default postUtils;