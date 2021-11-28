import React,{useState} from 'react'
import {Link,NavLink} from 'react-router-dom'
import {MdPassword} from 'react-icons/md'
import {BsPersonFill,BsPersonLinesFill} from 'react-icons/bs'
import PageSwitcher from './PageSwitcher'


function Signup() {
const[signupForm,setSignupForm]=useState({
    name:"",
    username:"",
    password:"",
    passwordConfirmation:"",
    hasAgreed: false
})

    function handleChange(event) {
        let target = event.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;
    
        setSignupForm({...signupForm,[name]:value});
      }
    
   function handleSubmit(e) {
        e.preventDefault();
      }
        return (

            <div className="appForm">
    
            <PageSwitcher/>
            <div className="formCenter">
            <form onSubmit={(e)=>handleSubmit(e)} className="formFields">
              <div className="formField">
                <label className="formFieldLabel" htmlFor="name">
                <BsPersonFill/>
                </label>
                <input
                  type="text"
                  id="name"
                  className="formFieldInput"
                  placeholder="Enter your first name"
                  name="name"
                  value={signupForm.name}
                  onChange={(e)=>handleChange(e)}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="username">
                <BsPersonLinesFill/>
                </label>
                <input
                  type="text"
                  id="username"
                  className="formFieldInput"
                  placeholder="Enter your username"
                  name="username"
                  value={signupForm.username}
                  onChange={(e)=>handleChange(e)}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="password">
                <MdPassword/>
                </label>
                <input
                  type="password"
                  id="password"
                  className="formFieldInput"
                  placeholder="Enter your password"
                  name="password"
                  value={signupForm.password}
                  onChange={(e)=>handleChange(e)}
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="password">
                <MdPassword/>
                </label>
                <input
                  type="password"
                  id="passwordConfirmation"
                  className="formFieldInput"
                  placeholder="Confirm your password"
                  name="passwordConfirmation"
                  value={signupForm.passwordConfirmation}
                  onChange={(e)=>handleChange(e)}
                />
              </div>
    
              <div className="formField">
                <label className="formFieldCheckboxLabel">
                  <input
                    className="formFieldCheckbox"
                    type="checkbox"
                    name="hasAgreed"
                    value={signupForm.hasAgreed}
                    onChange={(e)=>handleChange(e)}
                  />{" "}
                  I agree all statements in{" "}
                  <Link exact to="/disclaimer" className="formFieldTermsLink">
                    terms of service
                  </Link>
                </label>
              </div>
    
              <div className="formField">
                <button className="formFieldButton">Sign Up</button>{" "}
                <Link exact to="/signin" className="formFieldLink">
                  I'm already member
                </Link>
              </div>
            </form>
          </div>
          </div>
        );
   
}

export default Signup
