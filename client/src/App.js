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


function App({cableApp}) {
  const[currentUser,setCurrentUser]=useState(null)
  const[allUsers,setAllUsers]=useState([])
  const[currentRoom,setCurrentRoom]=useState({
    chatroom:{},
    users: [],
    messages: []
  })
  const[messages,setMessages]=useState(null)

  useEffect(()=>{

    fetch("/me")
    .then((response) => {
      if (response.ok) {
        response.json().then((user) => setCurrentUser(user));
      }
    });
    
    fetch("/users")
    .then(r=>r.json())
    .then(users=>{
      setAllUsers(users)
    })
  },[])


  function handleSignups(newUser){
    setAllUsers({...allUsers,newUser})
  }

  function updateAppStateRoom(newRoom){
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

  return (
    <Router>
      <div className="App">
        <Navbar user={currentUser} setUser={setCurrentUser}/>
            <Routes>
            <Route exact path="/" element={<Home></Home>} />
            <Route path="/signup" element={<Signup onSignup={handleSignups}/>}/>
            <Route path="/signin" element={<Signin onSignin={handleUpdateCurrentUser}/>}/>
            <Route path="/disclaimer" element={<Disclaimer/>}/>
            {currentUser&&<Route path={currentUser?"/chatrooms/:id":"/signin"} element={
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
            }/>
              }
            <Route exact path="/moods/:id" element={<Mood currentUser={currentUser}/>}></Route>
            </Routes>
            <Footer/>
      </div>
    </Router>
  )
}

export default App;
