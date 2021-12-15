import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import actionCable from 'actioncable'

const cableApp={}
// this will create the websocket connection
cableApp.cable=actionCable.createConsumer('ws://localhost:3000/cable')

// console.log(cableApp)
ReactDOM.render(
  <React.StrictMode>
    <App cableApp={cableApp}/>
  </React.StrictMode> 
,
  document.getElementById('root')
);

