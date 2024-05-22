import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello'
import Library from './Chapter_03/Library';
import Clock from './Chapter_03/Clock';
import Welcome from './Welcome'
import CommentList from './Chapter_05/CommentList';
import Accommodate from './Chapter_07/Accommodate'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <Hello toWhat="World"/>
    <Library/>
    <Clock />    
    <Welcome name="인제" />
    <CommentList />
    <Accommodate />
  </React.StrictMode>
);

// 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
