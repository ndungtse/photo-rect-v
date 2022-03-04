import Nav from './Home/Nav';
import './App.css';
import styled from 'styled-components';


function Home() {
  return (
      <Prof className='Profile flex h-screen'>
          <Nav className='w-[5%]' />
          <Main className="profile flex w-[95%] rounded-tl-[49px] h-screen bg-white-100">
              <Me className="me w-[30%] flex-col h-screen items-center bg-blue-100 shadow-2xl">
                  <h1 className="text-center">Profile</h1>
                <Avatar className="w-[100%] flex-col justify-center rounded-xl items-center mt-6">
                    <div className=" w-[100%] rounded-3xl ">
                      <div className="flex items-center justify-center">
                      <img className='w-[150px] rounded-full' src={require("./Home/Images/subs/mount.jpg")} alt="Bitmap"/></div> 
                    </div>
                    <div className="flex items-center justify-center"><p className="text-xl mt-7"> CaRiMount </p></div> 
                </Avatar>
                <div className="flex-col px-[30%] w-[100%] text-center items-center justify-center">
                    <div className="flex w=[80px] items-center justify-center px-4 py-2 rounded-md bg-blue-400">
                        <span>Messages</span>
                    </div>
                    <div className="flex items-center justify-center px-4 py-2 rounded-md bg-blue-400">
                        <span>Messages</span>
                    </div>
                    <div className="flex items-center justify-center px-4 py-2 rounded-md bg-blue-400">
                        <span>Messages</span>
                    </div>
                </div>  
              </Me>
              <Desc className="w-[70%] h-screen" >
                
              </Desc>
          </Main>
      </Prof>
  );
}

export default Home;
//styles
const Prof = styled.div`

`
const Main = styled.div`
`
const Me = styled.div`
`
const Desc = styled.div`
`
const Avatar = styled.div`
`


