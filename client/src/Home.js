import React from 'react'
import Navbar from './Navbar'
import {NavLink} from 'react-router-dom'
import './App.css'
function Home() {
    return (
            <div className="container">
            How do you feel today?
                <br/>
               <ul className="app-list">
                   
            <li>  <NavLink exact to="/mood/happy" className="app-items">😁 Happy</NavLink> </li>
            <li> <NavLink exact to="/mood/sad" className="app-items">😭 Sad</NavLink></li>
            <li>  <NavLink exact to="/mood/stressed" className="app-items">😩 Stressed</NavLink></li>
            <li> <NavLink exact to="/mood/ifeelitall" className="app-items">😌 i feel it all</NavLink> </li>
              </ul>
            </div>
            
    )
}

export default Home
