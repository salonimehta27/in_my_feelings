import './App.css'; 
import Signup from './Signup';
import Signin from './Signin';
import Home from './Home';
import Navbar from './Navbar';
import {useState,useEffect} from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Disclaimer from './Disclaimer';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button,Alert,Breadcrumb,Card} from 'react-bootstrap'


function App() {
  const[user,setUser]=useState(null)
  const[users,setUsers]=useState([])
  console.log(user)
  useEffect(()=>{
    fetch("/me").then((r)=>{
      if(r.ok){
        r.json().then(user=>setUser(user))
      }
    })
  },[])
  function handleSignups(newUser){
    setUsers({...users,newUser})
  }

  // if(!user)return <Signin onSignin={setUser}/>
  return (
    <Router>
      <div className="App">
        <Navbar user={user} setUser={setUser}/>
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup onSignup={handleSignups}/>}/>
            <Route path="/signin" element={<Signin onSignin={setUser}/>}/>
            <Route path="/disclaimer" element={<Disclaimer/>}/>
            <Route path="/mood/happy"/>
            </Routes>
      </div>
    </Router>
  )
}

export default App;
