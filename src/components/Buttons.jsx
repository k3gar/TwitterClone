import React from 'react'
import '../styles/loginButton.css';
import { Link } from "react-router-dom";


const Buttons = () => {
  return (
    <React.Fragment>
      <Link className='react-router-link' to="/LoginPage">
        <button className="loginSection--loginButton" type="button">
              <div className="login--google logoLogin-style"></div> 
              <p>Sign up with Google</p>
          </button>
      </Link>

      <Link className='react-router-link' to="/LoginPage">
        <button className="loginSection--loginButton" type="button">
            <div className="login--apple logoLogin-style"></div>  
            <p className="bold">Sign up with Apple</p>
        </button>
      </Link>

    </React.Fragment>
  )
}

export default Buttons