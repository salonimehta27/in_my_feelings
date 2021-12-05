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
import {Button,Alert,Breadcrumb,Card} from 'react-bootstrap'
import ChatroomList from './ChatroomList';


function App({cableApp}) {
  //1. based on blog i need current user state to be null which i already have as a user variable set to null
  //2. create a state for all the rooms and set that to empty array
  //3. set a state for the currentRoom{ chatroom: {},users:[],messages:[]}
  // const navigate=useNavigate()
  

  const[currentUser,setUser]=useState(null)
  const[users,setUsers]=useState([])
  const[chatrooms,setChatrooms]=useState([])
  const[currentRoom,setCurrentRoom]=useState({
    chatroom:{},
    users: [],
    messages: []
  })
  
  useEffect(()=>{
    fetch("/me").then((r)=>{
      if(r.ok){
        r.json().then(user=>setUser(user))
      }
    })
    fetch('/chatrooms')
  .then(resp=>resp.json())
  .then(chatrooms=>setChatrooms(chatrooms))
  },[])
  function handleSignups(newUser){
    setUsers({...users,newUser})
  }
  console.log(users)

  
  function updateAppStateRoom(newRoom){
    setCurrentRoom({...currentRoom,
      chatroom: newRoom.chatroom.data,
      users: newRoom.users,
      messages: newRoom.messages
    })
  }

  


  function getRoomData(id){
    fetch(`/chatrooms/${id}`)
    .then(res=>res.json())
    .then(result=>{
      setCurrentRoom({
        chatroom: result.data,
        users: result.data.attributes.users,
        messages: result.data.attributes.messages
      })
    })

  }
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
            <Route path="/mood/happy"/>
            {currentUser&& <Route exact path="/chatrooms/:id" element={<RoomShow 
              users={users}
              cableApp={cableApp}
              updateApp={updateAppStateRoom}
              getRoomData={getRoomData}
              roomData={currentRoom}
              currentUser={currentUser}
              />}/>}
            </Routes>
      </div>
    </Router>
  )
}

export default App;
