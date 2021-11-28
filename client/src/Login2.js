import React from 'react'
import './css/Signup.css'

function Login() {
    return (
        <form>

        <h3>Log in</h3>

        <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" placeholder="Enter username" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        {/* <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div> */}
        <br/>
        <button type="submit" style={{marginLeft:"120px"}} className="btn btn-dark btn-lg btn-block">Sign in</button>
        <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p>
    </form>
    )
}

export default Login
