import React from 'react';
import ReactDOM from 'react-dom';
import 'boxicons'
import './index.css';
import App from './App';
import Login from "./Login/Login";
import reportWebVitals from './reportWebVitals';

let userName = localStorage.getItem("userName");

ReactDOM.render(
  <React.StrictMode>
    {userName ? <App/>:<Login />}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
