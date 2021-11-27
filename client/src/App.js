import './App.css'; 
import Signup from './Signup';
import Home from './Home';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/mood/happy"/>
      </Routes>
    </Router>
  )
}

export default App;
