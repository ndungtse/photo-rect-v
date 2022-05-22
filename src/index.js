import React from 'react';
import ReactDOM from 'react-dom';
import 'boxicons/css/boxicons.min.css'
import './index.css';
import App from './App';
import { UserProvider } from './Messages/contexts/userContext'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App/>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
