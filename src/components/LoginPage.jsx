import React from 'react'
import Buttons from './Buttons'
import { Link } from "react-router-dom";
import ('../styles/loginPage.css')


const LoginPage = () => {

  const adding = () =>{
    const Label = document.querySelector('#text_label');
    Label.classList.add('move')
    Label.classList.add('change-input-login')
  }
  const removing = () =>{
    const Label = document.querySelector('#text_label');
    Label.classList.remove('change-input-login')
    let inputArea = document.querySelector('#text').value;
    if(inputArea !== 0){
      Label.classList.add('change-input-login-text')
    }else{
      Label.classList.remove('change-input-login-text')
      Label.classList.add('move')

    }
  }

  return (
    <main className='loginPage'>
        <section className='loginPage--form' onMouseDown={() => {removing();}}>
            <Link className='react-router-link' to="/">
                <img className="loginSection-exitLogo" alt='Close icon' src="https://img.icons8.com/material-outlined/20/000000/delete-sign.png"/>
            </Link>
            
            <img alt='Twitter Bird icon' className="loginSection-logo" src="https://img.icons8.com/color/43/000000/twitter--v1.png"/>
            <div>
            <h3 className='loginPage--form__tittle'>Sign in to Twitter</h3>
                <Buttons/>
                <span className="or-divider">or</span>
                <label id='text_label' className='loginPage--form__input' htmlFor="text" onMouseUp={()=> {adding();}}>
                  Phone, email, or username
                  <input id='text' className='loginPage--form__area' type="text" />
                </label>
                <Link className='react-router-link' to="/HomePage">
                  <button className="loginSection--loginButton loginSection--black" type="button"> 
                    <p>Next</p>
                  </button>
                </Link>
                <button className="loginSection--loginButton loginSection--pass" type="button"> 
                  <p>Forgot password?</p>
                </button>
                <p className="loginSection--signup">Don't have an account?<Link to="/HomePage">Sign up</Link></p>
            </div>
        </section>
    </main>
  )
}

export default LoginPage