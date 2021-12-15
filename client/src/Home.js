import React from 'react'
import {NavLink} from 'react-router-dom'
import {FaRegSadTear,FaRegSadCry} from 'react-icons/fa'
import {ImConfused} from 'react-icons/im'
import {BiHappyHeartEyes} from 'react-icons/bi'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import './App.css'
function Home() {
    return (
           <Container style={{marginTop:"5%",borderStyle:"solid",borderColor:"grey"}}>
            <p style={{fontFamily: 'Swanky and Moo Moo',fontSize:'50px',color:'#977FD7'}}>How do you feel today?</p>
                <br/>
               <ul className="app-list">
                   
            <li>  <NavLink exact to="/moods/1" className="app-items"><BiHappyHeartEyes/> Happy</NavLink> </li>
            <li> <NavLink exact to="/moods/2" className="app-items"><FaRegSadCry/> Sad</NavLink></li>
            <li>  <NavLink exact to="/moods/3" className="app-items"><FaRegSadTear/> Stressed</NavLink></li>
            <li> <NavLink exact to="/moods/4" className="app-items"><ImConfused/> i feel it all</NavLink> </li>
              </ul>
            
              </Container>
    )
}

export default Home
