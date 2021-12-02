import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import App from './App';
import actionCable from 'actioncable'
// import store from './store'

//React Redux includes a <Provider /> component, which makes the Redux store available to the rest of your app:

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

