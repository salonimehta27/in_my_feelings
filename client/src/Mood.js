import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router'
import {Container} from 'react-bootstrap'
import {NavLink,Link} from "react-router-dom"

function Mood({currentUser}) {
    // debugger;
    // console.log(allUsers.data[0].attributes)
const{id}=useParams()
const[mood,setMood]=useState(null)
    useEffect(()=>{

        fetch(`/moods/${id}`)
        .then(r=>r.json())
        .then(res=>setMood(res))
    },[id])

    function handleListOfUsers()
    {
        setShowUsers(!showUsers)
    }
    const listOfUsers= allUsers.data.map(user=>user.attributes.name).map(x=><p>{x}</p>)
    return (
     <Container style={{marginTop:"5%",borderStyle:"solid",borderColor:"grey"}}>
            {mood&&<p className="app-items" style={{color:"#5B4C81"}}> {mood.mood_body}</p>}
            <NavLink exact to={`/chatrooms/${id}`} className="app-items">{currentUser?"Enter the chatroom":<Link className="app-items" to="/signin">Please Sign in to enter Chatroom</Link>}</NavLink>
     </Container>
            
      
    )
}

export default Mood
