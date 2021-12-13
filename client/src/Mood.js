import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router'
import {Button,Alert,Breadcrumb,Card,Container} from 'react-bootstrap'
import {NavLink} from "react-router-dom"
function Mood() {

    const{id}=useParams()
    console.log(id)
const[mood,setMood]=useState(null)
    useEffect(()=>{

        fetch(`/moods/${id}`)
        .then(r=>r.json())
        .then(res=>setMood(res))
    },[])
    return (
     <Container >
            {mood&&<p className="app-items" style={{color:"#5B4C81"}}> {mood.mood_body}</p>}
            <NavLink exact to={`/chatrooms/${id}`} className="app-items">Enter the chatroom</NavLink>

     </Container>
            
      
    )
}

export default Mood
