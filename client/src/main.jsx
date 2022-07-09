import React from 'react'
import ReactDOM from 'react-dom/client'
import 'boxicons/css/boxicons.min.css'
import './index.css';
import App from './App';
import { UserProvider } from './Messages/contexts/userContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<UserProvider>
   	  <App />
    </UserProvider>
  </React.StrictMode>
)
