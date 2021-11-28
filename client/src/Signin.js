import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './css/Signin.css'

function Signin() {
const[username,setUsername]=useState("")
const[password,setPassword]=useState("")

    function handleChange(e){
        if(e.target.name==="username"){
        setUsername(e.target.value)
        }
        else
        {
            setPassword(e.target.value)
        }
    }

  function handleSubmit(e) {
    e.preventDefault();
    }

    return (
      <div className="formCenter">
        <form className="formFields" onSubmit={(e)=>handleSubmit(e)}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="formFieldInput"
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={(e)=>handleChange(e)}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={(e)=>handleChange(e)}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign In</button>{" "}
            <Link exact to="/signup" className="formFieldLink">
              Create an account
            </Link>
          </div>
        </form>
      </div>
  
    )
}

export default Signin
