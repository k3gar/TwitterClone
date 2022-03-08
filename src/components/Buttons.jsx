import React from 'react'
import '../styles/loginButton.css';

const Buttons = () => {
  return (
    <React.Fragment>
        <button className="loginSection--loginButton" type="button">
            <div className="login--google logoLogin-style"></div> 
            <p>Sign up with Google</p>
        </button>

        
        <button className="loginSection--loginButton" type="button">
            <div className="login--apple logoLogin-style"></div>  
            <p className="bold">Sign up with Apple</p>
        </button>
    </React.Fragment>
  )
}

export default Buttons