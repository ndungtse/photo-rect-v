
let caption,userName
const getCaption = (e) => {
    caption = e.target.value
}
const onLoad = (e) => {
    e.preventDefault()
}
const onSubmit = (e) => {
    e.preventDefault()
    userName = localStorage.getItem("userName")
    fetch('http://localhost:8080/post/newPost', {
        method: "POST",
        mode:"no-cors",
        headers: { 'Content-Type': 'application/json' },
        body: 
            userName,caption
    })
    .then(res => res.text())
    .then(data => console.log(data))
    }
   
const postUtils = {
    onLoad,getCaption,onSubmit
}
export default postUtils;