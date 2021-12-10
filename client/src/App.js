import './App.css'; 
import Signup from './Signup';
import Signin from './Signin';
import Home from './Home';
import Navbar from './Navbar';
import RoomShow from './RoomShow';
import Mood from './Mood';
import {useState,useEffect} from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Disclaimer from './Disclaimer';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate, useParams } from 'react-router';
import {Button,Alert,Breadcrumb,Card} from 'react-bootstrap'


function App({cableApp}) {
  //1. based on blog i need current user state to be null which i already have as a user variable set to null
  //2. create a state for all the rooms and set that to empty array
  //3. set a state for the currentRoom{ chatroom: {},users:[],messages:[]}
  // const navigate=useNavigate()
  // const {chatroomId}=useParams()
  // // const navigate=useNavigate()
  // console.log(chatroomId)
  const[currentUser,setCurrentUser]=useState(null)
  const[allUsers,setAllUsers]=useState([])
  const[chatrooms,setChatrooms]=useState([])
  const[currentRoom,setCurrentRoom]=useState({
    chatroom:{},
    users: [],
    messages: []
  })
  
  useEffect(()=>{
    // fetch("/me")
    // .then((r)=>{
    //   if(r.ok){
    //     r.json().then(result=>setCurrentUser(result));
    //   }
    //   else{
    //     r.json().then(err=><p>{err.errors}</p>)
    //   }
    // })

    fetch("/users")
    .then(r=>r.json())
    .then(users=>{
      // debugger;
      // console.log(users)
      setAllUsers(users)
    })
    // console.log("Users inside the use effect",allUsers)

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
  function handleUpdateCurrentUser(user){
    setCurrentUser(user)
  }
  


  function getRoomData(id){

    fetch(`/chatrooms/${id}`)
    .then(res=>res.json())
    .then(result=>{
      // debugger;
      console.log("this is where i should get result for chatroom/:id",result)
      setCurrentRoom({
        chatroom: result.data.attributes,
        users: result.data.attributes.users.data,
        messages: result.data.attributes.messages
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
        <Navbar user={currentUser} setUser={setCurrentUser}/>
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup onSignup={handleSignups}/>}/>
            <Route path="/signin" element={<Signin onSignin={handleUpdateCurrentUser}/>}/>
            <Route path="/disclaimer" element={<Disclaimer/>}/>
            {/* <Route exact path="/chatrooms" element={<ChatroomList handleSubscr/>}/> */}
            {/* <Route exact path="/chatrooms/:id" element={}/> */}
            {currentUser&&<Route path="/chatrooms/:id" element={
            <RoomShow 
              users={allUsers}
              cableApp={cableApp}
              updateApp={updateAppStateRoom}
              getRoomData={getRoomData}
              roomData={currentRoom}
              currentUser={currentUser}
              />
            }/>}
            <Route exact path="/moods/:id" element={<Mood/>}></Route>
            </Routes>
      </div>
    </Router>
  )
}

export default App;
