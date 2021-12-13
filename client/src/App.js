import './App.css'; 
import Signup from './Signup';
import Signin from './Signin';
import Home from './Home';
import Navbar from './Navbar';
import RoomShow from './RoomShow';
import Mood from './Mood';
import Footer from './Footer';
import {useState,useEffect} from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Disclaimer from './Disclaimer';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate, useParams } from 'react-router';
import {Button,Alert,Breadcrumb,Card} from 'react-bootstrap'


function App({cableApp}) {
  const[currentUser,setCurrentUser]=useState(null)
  const[allUsers,setAllUsers]=useState([])
  const[chatrooms,setChatrooms]=useState([])
  const[currentRoom,setCurrentRoom]=useState({
    chatroom:{},
    users: [],
    messages: []
  })
  const[messages,setMessages]=useState(null)
 
  useEffect(()=>{
    fetch("/users")
    .then(r=>r.json())
    .then(users=>{
      setAllUsers(users)
    })

    fetch('/chatrooms')
    .then(resp=>resp.json())
    .then(chatrooms=>{
      setChatrooms(chatrooms)
    })
  },[])

  console.log(currentUser)
  console.log(allUsers)

  function handleSignups(newUser){
    setAllUsers({...allUsers,newUser})
  }

  function updateAppStateRoom(newRoom){
    // debugger;
    console.log("This is the updated rooms state",newRoom)
    setCurrentRoom({...currentRoom,
      chatroom: newRoom,
      users: newRoom.users,
      messages: newRoom.messages
    })
    setMessages(newRoom.messages)
  }

  function handleUpdateCurrentUser(user){
    setCurrentUser(user)
  }

  function handleCurrentRoom(result){
  return {
      chatroom: result.data.attributes,
      users: result.data.attributes.users.data,
      messages: result.data.attributes.messages
    }
  }

  function getRoomData(id){
    fetch(`/chatrooms/${id}`)
    .then(res=>res.json())
    .then(result=>{
      setCurrentRoom(()=>handleCurrentRoom(result))
    })

  }
console.log(currentRoom)
  // const postFirstMessage = (roomId) => {
  //   window.history.pushState(null, null, `/chatrooms/${roomId}`)
  //   const message = {
  //     message_body: `${currentUser.username} has joined this room!`,
  //     user_id: currentUser.id,
  //     chatroom_id: roomId
  //   }
  //   fetch("/messages", {
  //       method: "POST",
  //       headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json"
  //       },
  //       body: JSON.stringify({message: message})
  //   })
  //   .then(resp => resp.json())
  //   .then(result => {
  //       console.log(result)
  //   })
  // }

  // const subscribeToRoom = (event) => {
  //   const room_id = event.target.id
  //   currentUser ? (postFirstMessage(room_id)) : (alert('You must be logged in to subscribe to a room.'))
  // }
  // if(!user)return <Signin onSignin={setUser}/>
  return (
    <Router>
      <div className="App">
        <Navbar user={currentUser} setUser={setCurrentUser}/>
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup onSignup={handleSignups}/>}/>
            <Route path="/signin" element={<Signin onSignin={handleUpdateCurrentUser}/>}/>
            <Route path="/disclaimer" element={<Disclaimer/>}/>
            {currentUser&&<Route path="/chatrooms/:id" element={
            <RoomShow 
              users={allUsers}
              cableApp={cableApp}
              updateApp={updateAppStateRoom}
              getRoomData={getRoomData}
              roomData={currentRoom}
              currentUser={currentUser}
              messages={messages}
              handleMessageUpdate={setMessages}
              />
            }/>}
            <Route exact path="/moods/:id" element={<Mood/>}></Route>
            </Routes>
            <Footer/>
      </div>
    </Router>
  )
}

export default App;
