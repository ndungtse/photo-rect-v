<<<<<<< HEAD
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
=======

export const images = ['https://images.pexels.com/photos/2376994/pexels-photo-2376994.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/840666/pexels-photo-840666.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/1854897/pexels-photo-1854897.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
]


const users = [{
        names: 'Admin Charles',
        id: 1,
        username: 'admin',
        image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p184341.png',
        followed: false,
        followers: 0
    },
    {
        names: 'Chloe Morgan',
        id: 2,
        username: 'morgan_c',
        image: 'https://images.pexels.com/photos/6389355/pexels-photo-6389355.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        followed: false,
        followers: 0
    },
    {
        names: "Kyrie Ederson",
        id: 3,
        username: 'Ederson',
        image: 'https://images.pexels.com/photos/2635534/pexels-photo-2635534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        followed: false,
        followers: 0
    },
    {
        names: 'Kai Havertz',
        id: 4,
        username: 'havertz',
        image: 'https://cdn.kickoff.com/cms2/image_manager/uploads/News/704032/7/image%2010.jpg',
        followed: false,
        followers: 0
    }
]

export default users

let id = Math.random()*10000

export const posts = [
    {
        id: id,
        image: 'https://images.pexels.com/photos/2376994/pexels-photo-2376994.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        description: '',
        likes: 0,
        comments: 0,
        shares: 0,
        date: '3&nbsp;wed&nbsp;2022&nbsp;5:00PM' 
    },
    {
        id: id,
        image: 'https://images.pexels.com/photos/840666/pexels-photo-840666.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        description: '',
        likes: 0,
        comments: 0,
        shares: 0,
        date: '3&nbsp;wed&nbsp;2022&nbsp;5:00PM'
    },
    {
        id: id,
        image: 'https://images.pexels.com/photos/1854897/pexels-photo-1854897.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        description: '',
        likes: 0,
        comments: 0,
        shares: 0,
        date: '3&nbsp;wed&nbsp;2022&nbsp;5:00PM'
    },
    {
        id: id,
        image: 'https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        description: '',
        likes: 0,
        comments: 0,
        shares: 0,
        date: '3&nbsp;wed&nbsp;2022&nbsp;5:00PM'
    }
>>>>>>> b2a837bb4563fa7f2390cc8544b1b323e0743192
]