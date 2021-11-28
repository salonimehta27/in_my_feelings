import './App.css'; 
import Signup from './Signup';
import Signin from './Signin';
import Home from './Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes,Route,NavLink} from 'react-router-dom'

function App() {
  return (
    <Router>
      {/* <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
        
          <Link className="navbar-brand" to={"/"}>Home</Link>
          
          <Link className="navbar-brand" to={"/signup"}>Sign up</Link>
          
       
          <Link className="navbar-brand" to={"/login"}>Sign in</Link>
        
    
        </div>
      </nav>
    <div className="outer">
    <div className="inner"> */}
        <div className="App">
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                exact to="/signin"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/signup"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>

            {/* <div className="formTitle">
              <NavLink
                exact to="/signin"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/signup"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
              </NavLink>
            </div> */}
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/mood/happy"/>
            </Routes>
           
          </div>
        </div>
      
    </Router>
  )
}

export default App;
