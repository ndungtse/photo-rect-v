
import './Home.css';
import Stories from './stories';
import Mainconts from './mainconts'

function Main() {
  return ( 
      <div className='main overflow-auto h-screen'>
          <Stories />
          <Mainconts />
      </div>
  );
}

export default Main;
