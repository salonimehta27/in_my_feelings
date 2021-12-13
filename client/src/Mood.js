import React,{useEffect,useState} from 'react'
import {useParams,useNavigate} from 'react-router'
import {Container} from 'react-bootstrap'
import {NavLink,Link} from "react-router-dom"
function Mood({currentUser}) {
    const{id}=useParams()
    const navigate=useNavigate()
    // console.log(id)
const[mood,setMood]=useState(null)
    useEffect(()=>{

        fetch(`/moods/${id}`)
        .then(r=>r.json())
        .then(res=>setMood(res))
    },[])
    return (
     <Container >
            {mood&&<p className="app-items" style={{color:"#5B4C81"}}> {mood.mood_body}</p>}
            <NavLink exact to={`/chatrooms/${id}`} className="app-items">{currentUser?"Enter the chatroom":<Link className="app-items" to="/signin">Please Sign in to enter Chatroom</Link>}</NavLink>

     </Container>
            
      
    )
}

export default Mood