import React from 'react'
import Signup from './Signup'
import {NavLink}from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <NavLink exact to="/signup">Sign up</NavLink>
        </div>
    )
}

export default Navbar
