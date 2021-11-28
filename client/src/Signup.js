import React,{useState} from 'react'
import {Link} from 'react-router-dom'
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
          <div className="formCenter">
            <form onSubmit={(e)=>handleSubmit(e)} className="formFields">
              <div className="formField">
                <label className="formFieldLabel" htmlFor="name">
                  Full Name
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
                  Username
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
                  Password
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
                  Password
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
                  <a href="null" className="formFieldTermsLink">
                    terms of service
                  </a>
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
        );
   
}

export default Signup
