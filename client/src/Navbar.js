import React from 'react'
import {NavLink}from 'react-router-dom'
import './css/Navbar.css'

function Navbar({user,setUser}) {
// console.log("this is from navbar",user)

// fetch('/users')
// .then(r=>r.json())
// .then(console.log)

    function handleSignout(){
        fetch("/signout",{
            method:"delete"
        }).then((r)=>{
            if(r.ok){
                setUser(null)
            }
        })
    }
    return (
        <div className="nav-container">
            <ul className="nav-list">
                <li>
            {user?<NavLink exact to="/" className="nav-items">Home</NavLink>:null}</li>
            {/* <li className="nav-items">{user?`Hi , ${user.name.toUpperCase()}`:null}</li> */}
          {user?<li><button className="nav-button" onClick={handleSignout}>Sign out</button></li>: <li> <NavLink exact to="/signup"className="nav-items">Sign up/Sign in</NavLink></li>}
            </ul>
        </div>
    )
}

export default Navbar
