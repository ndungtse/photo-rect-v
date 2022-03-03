import Nav from './Home/Nav';
import './App.css';
import styled from 'styled-components';

function Home() {
  return (
      <Prof className='Profile flex h-screen'>
          <Nav />
          <Main className="profile flex w-[95%] rounded-tl-[49px] h-screen">
              <Me className="me w-[30%] h-screen">

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
background-color: blue;
`
const Me = styled.div`
background-color: white;
`
const Desc = styled.div`
background-color: black;
`
