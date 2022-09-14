import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { FaFacebookMessenger } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Nav from '../Home/Nav';
import Stories from '../Home/TopBar';
import { useUsers } from '../Messages/contexts/userContext';

const Search = () => {
  const { query } = useParams();
  const { users } = useUsers();
  const [results, setResults] = React.useState([]);
  const [ reverse, setReverse ] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    setResults(users.filter(user => user.username.toLowerCase().includes(query.toLowerCase()) || user.fullname.toLowerCase().includes(query.toLowerCase())));
  }, [users, query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setResults(users.filter(user => user.username.includes(input)))
  }

  // const handleSearchChange = (e) => {
  //   e.preventDefault();
  // }

  return (
    <div className='main-container w-full fixed h-screen overflow-hidden'>
        <Nav active={`home`} />
        <div className="main w-full h-screen">
          {/* <div className='w-full h-[13vh] flex justify-between' style={{ backgroundColor: 'var(--ligth-color)', borderBottom: '1px solid hsla(0, 0%, 77%, 0.781)'}}> */}
            <Stories />
            {/* <div className='h-full flex' style={{ backgroundColor: 'var(--ligth-color)', borderBottom: '1px solid hsla(0, 0%, 77%, 0.781)'}}> */}
              {/* <form onSubmit={handleSearch} className={`flex w-1/3 min-w-[250px] text-xl h-[45px] items-center p-2 mr-6 rounded-3xl my-auto ${reverse?"flex-row-reverse":"flex-row"} bg-slate-200`}>
              <label htmlFor="sub"><BiSearch className="text-2xl cursor-pointer" /></label>
              <input className='outline-none w-full bg-transparent px-2'
               onChange={(e)=> setInput(e.target.value)} type="text" placeholder='Search...' />
               <input className='hidden' type="submit" value="" />
              </form> */}
            {/* </div> */}
          {/* </div> */}
            <div className='flex flex-col w-full p-4 items-center'>
                <div className='max-w-[800px] w-full p-2 border-[1px] border-slate-300'>
                    <h2 className='text-center font-semibold text-xl'>Results For "{query}"</h2>
                    <div>
                        {results.map((user, index) => (
                          <SearchResults user={user} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Search

const SearchResults = ({user}) => {
  const auth = useAuth();
  const duser = auth.user;

    return (
        <div className="w-full mt-3 text-sm flex justify-between items-center">
      <Link to={`/profile/${user._id}`} className="flex items-center">
        <div className="flex overflow-hidden w-[40px] h-[40px] rounded-full">
          <img className="min-w-full min-h-full object-cover"
           src={user.profile} alt="" />
        </div>
        <div className="flex flex-col ml-3">
          <p className="font-semibold">{user.fullname}</p>
          <p className="opacity-80 font-light">@{user.username}</p>
        </div>  
      </Link>
      <div className='flex items-center'>
        <div className='flex cursor-pointer text-blue-500 items-center'>
            <FaFacebookMessenger />
            <Link to={`/messages/${user._id+duser._id}`}><p className='ml-2'>Message</p></Link>
        </div>
        <Link to={`/profile/${user._id}`} className="text-blue-500 cursor-pointer ml-4">Profile</Link>
      </div>
    </div>
    )
}