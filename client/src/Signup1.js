import {useState} from 'react'
import './css/Signup.css'
import classNames from 'classnames'

function Signup1() {
    const[signupPanel,setSignupPanel]=useState(false)
    const[username,setUsername]=useState("")

    function handleSignIn(){

    }
    let containerClass=classNames('container','right-panel-active','flex-direction')
    let base=classNames('container','flex-direction')
    return (
        <>
    <div className={signupPanel?containerClass:base} id="container">
	    <div className={classNames('form-container', 'sign-up-container')}>
		        <form action="#">
			        <h1>Create Account</h1>
			        <input type="text" placeholder="Name" />
			        <input type="email" placeholder="Username" />
			        <input type="password" placeholder="Password" />
			        <button>Sign Up</button>
		        </form>
	        </div> 
	         <div className={classNames('form-container', 'sign-in-container')}>
		        <form action="#">
			        <h1>Sign in</h1>
			        <input type="email" placeholder="Username" />
			        <input type="password" placeholder="Password" />
			        <a href="#">Forgot your password?</a>
			        <button onClick={handleSignIn}>Sign In</button>
		        </form>
	        </div>
	    <div className="overlay-container">
		    <div className="overlay">
			    <div className={classNames('overlay-panel','overlay-left')}>
				    <h1>Welcome Back!</h1>
				    <p>To keep connected with us please login with your personal info</p>
				    <button className="ghost" onClick={()=>setSignupPanel(false)} id="signIn">Sign In</button>
			    </div>
			    <div className={classNames('overlay-panel','overlay-right')}>
				    <h1>Hi, there!</h1>
				    <p>Don't have an account? Please click on Signup to create one</p>
				    <button className="ghost" onClick={()=>setSignupPanel(true)} id="signUp">Sign Up</button>
			    </div>
		    </div>
	    </div>
    </div>
    </>

       
    )
}

export default Signup1
