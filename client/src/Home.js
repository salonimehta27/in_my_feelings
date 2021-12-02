import React from 'react'
import Navbar from './Navbar'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button,Alert,Breadcrumb,Card,Container} from 'react-bootstrap'
import './App.css'
function Home() {
    return (
           <Container>
            <p style={{fontFamily: 'Swanky and Moo Moo',fontSize:'50px',color:'#6284FF'}}>How do you feel today?</p>
                <br/>
               <ul className="app-list">
                   
            <li>  <NavLink exact to="/mood/happy" className="app-items">😁 Happy</NavLink> </li>
            <li> <NavLink exact to="/mood/sad" className="app-items">😭 Sad</NavLink></li>
            <li>  <NavLink exact to="/mood/stressed" className="app-items">😩 Stressed</NavLink></li>
            <li> <NavLink exact to="/mood/ifeelitall" className="app-items">😌 i feel it all</NavLink> </li>
              </ul>
            
              </Container>
    )
}

export default Home
