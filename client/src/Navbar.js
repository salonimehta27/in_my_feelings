import React from 'react'
import {NavLink}from 'react-router-dom'
import './css/Navbar.css'

function Navbar() {
    return (
        <div className="nav-container">
            <ul className="nav-list">
                <li>
            <NavLink exact to="/" className="nav-items">Home</NavLink></li>
           <li> <NavLink exact to="/signup"className="nav-items">Sign up</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar
