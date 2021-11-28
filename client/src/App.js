import './App.css'; 
import Signup from './Signup';
import Signin from './Signin';
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Disclaimer from './Disclaimer';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/disclaimer" element={<Disclaimer/>}/>
            <Route path="/mood/happy"/>
            </Routes>
      </div>
    </Router>
  )
}

export default App;
