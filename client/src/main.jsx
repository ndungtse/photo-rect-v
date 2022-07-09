import React from 'react'
import ReactDOM from 'react-dom/client'
import 'boxicons/css/boxicons.min.css'
import './index.css';
import App from './App';
import { UserProvider } from './Messages/contexts/userContext'
import AuthProvider from './contexts/AuthContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
   	    <App />
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
)
