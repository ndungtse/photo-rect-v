import allUsers from "./Home/users"

export const images = ['https://images.pexels.com/photos/2376994/pexels-photo-2376994.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/840666/pexels-photo-840666.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/1854897/pexels-photo-1854897.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
]
async function getUsers(){
    const all = await allUsers.onload()
    console.log(all.users);
    return all.users
}

const users = getUsers()
export default users
export const posts = [
    {
        image: 'https://images.pexels.com/photos/2376994/pexels-photo-2376994.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        description: '',
        likes: 0,
        comments: 0,
        shares: 0,
        date: '3&nbsp;wed&nbsp;2022&nbsp;5:00PM' 
    },
    {
        image: 'https://images.pexels.com/photos/840666/pexels-photo-840666.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        description: '',
        likes: 0,
        comments: 0,
        shares: 0,
        date: '3&nbsp;wed&nbsp;2022&nbsp;5:00PM'
    },
    {
        image: 'https://images.pexels.com/photos/1854897/pexels-photo-1854897.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        description: '',
        likes: 0,
        comments: 0,
        shares: 0,
        date: '3&nbsp;wed&nbsp;2022&nbsp;5:00PM'
    },
    {
        image: 'https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        description: '',
        likes: 0,
        comments: 0,
        shares: 0,
        date: '3&nbsp;wed&nbsp;2022&nbsp;5:00PM'
    }
]