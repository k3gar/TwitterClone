import React from 'react'
import Buttons from './Buttons'
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
    if(inputArea != 0){
      Label.classList.add('change-input-login-text')
    }else{
      Label.classList.remove('change-input-login-text')
      Label.classList.add('move')

    }
  }

  return (
    <main className='loginPage'>
        <section className='loginPage--form' onMouseDown={() => {removing();}}>
            <img className="loginSection-exitLogo" src="https://img.icons8.com/material-outlined/20/000000/delete-sign.png"/>
            
            <img className="loginSection-logo" src="https://img.icons8.com/color/43/000000/twitter--v1.png"/>
            <div>
            <h3 className='loginPage--form__tittle'>Sign in to Twitter</h3>
                <Buttons/>
                <span className="or-divider">or</span>
                <label id='text_label' className='loginPage--form__input' htmlFor="text" onMouseUp={()=> {adding();}}>
                  Phone, email, or username
                  <input id='text' className='loginPage--form__area' type="text" />
                </label>
                <button className="loginSection--loginButton loginSection--black" type="button"> 
                  <p>Next</p>
                </button>
                <button className="loginSection--loginButton loginSection--pass" type="button"> 
                  <p>Forgot password?</p>
                </button>
                <p className="loginSection--signup">Don't have an account?<a href="#">Sign up</a></p>
            </div>
        </section>
    </main>
  )
}

export default LoginPage