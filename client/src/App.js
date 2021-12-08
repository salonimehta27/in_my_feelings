import './App.css'; 
import Signup from './Signup';
import Signin from './Signin';
import Home from './Home';
import Navbar from './Navbar';
import RoomShow from './RoomShow';
import {useState,useEffect} from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Disclaimer from './Disclaimer';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate, useParams } from 'react-router';
import {Button,Alert,Breadcrumb,Card} from 'react-bootstrap'
import ChatroomList from './ChatroomList';


function App({cableApp}) {
  //1. based on blog i need current user state to be null which i already have as a user variable set to null
  //2. create a state for all the rooms and set that to empty array
  //3. set a state for the currentRoom{ chatroom: {},users:[],messages:[]}
  // const navigate=useNavigate()
  // const {chatroomId}=useParams()
  // // const navigate=useNavigate()
  // console.log(chatroomId)
  const[currentUser,setUser]=useState(null)
  const[users,setUsers]=useState([])
  const[chatrooms,setChatrooms]=useState([])
  const[currentRoom,setCurrentRoom]=useState({
    chatroom:{},
    users: [],
    messages: []
  })
  
  useEffect(()=>{
    fetch("/me")
    .then((r)=>{
      if(r.ok){
        r.json().then(user=>setUser(user));
      }
      else{
        r.json().then(err=><p>{err.errors}</p>)
      }
    })

    fetch("/users")
    .then(r=>r.json())
    .then(users=>setUsers(users))
    console.log("Users inside the use effect",users)

    fetch('/chatrooms')
    .then(resp=>resp.json())
    .then(chatrooms=>{
      setChatrooms(chatrooms)
    })
  },[])
  // console.log(chatrooms)

  

  function handleSignups(newUser){
    setUsers({...users,newUser})
  }
  // console.log(users)
  // console.log(currentUser)
  console.log(currentRoom)

  function updateAppStateRoom(newRoom){
    // debugger;
    console.log("This is the updated rooms state",newRoom)
    setCurrentRoom({...currentRoom,
      chatroom: newRoom,
      users: newRoom.users,
      messages: newRoom.messages
    })
  }

  


  function getRoomData(id){

    fetch(`/chatrooms/${id}`)
    .then(res=>res.json())
    .then(result=>{
      console.log("this is where i should get result for chatroom/:id",result)
      setCurrentRoom({
        chatroom: result,
        users: result.users,
        messages: result.messages
      })
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
        <Navbar user={currentUser} setUser={setUser}/>
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup onSignup={handleSignups}/>}/>
            <Route path="/signin" element={<Signin onSignin={setUser}/>}/>
            <Route path="/disclaimer" element={<Disclaimer/>}/>
            <Route exact path="/chatrooms" element={<ChatroomList handleSubscr/>}/>
            {/* <Route exact path="/chatrooms/:id" element={}/> */}
            {currentUser&&<Route path="/chatrooms/:id" element={
            <RoomShow 
              users={users}
              cableApp={cableApp}
              updateApp={updateAppStateRoom}
              getRoomData={getRoomData}
              roomData={currentRoom}
              currentUser={currentUser}
              />
            }/>}
            </Routes>
      </div>
    </Router>
  )
}

export default App;
