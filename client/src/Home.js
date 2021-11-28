import React from 'react'
import Navbar from './Navbar'
import {NavLink} from 'react-router-dom'

function Home() {
    return (
        <div>
            {/* This is the Home page */}
            {/* <Navbar/> */}
            <div className="Container">
              How do you feel today?
                <br/>
              <NavLink exact to="/mood/happy">😁 Happy</NavLink>
              <NavLink exact to="/mood/sad">😭 Sad</NavLink>
              <NavLink exact to="/mood/stressed">😩 Stressed</NavLink>
              <NavLink exact to="/mood/ifeelitall">😌 i feel it all</NavLink>
              
            </div>
            
        </div>
    )
}

export default Home
