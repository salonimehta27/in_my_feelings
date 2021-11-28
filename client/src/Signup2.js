import React from 'react'
import './css/Signup.css'

function Signup() {
    return (
        <form>
        <h3>Register</h3>

        <div className="form-group">
            <label>First name</label>
            <input type="text" className="form-control" placeholder="First name" />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" placeholder="Enter username" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <div className="form-group">
            <label>Confirm password</label>
            <input type="password" className="form-control" placeholder="Confirm your password" />
        </div>

        <button type="submit" style={{marginLeft:"120px"}}className="btn btn-dark btn-lg btn-block">Register</button>
        <p className="forgot-password text-right">
            Already registered <a href="/login">log in?</a>
        </p>
    </form>
    )
}

export default Signup
