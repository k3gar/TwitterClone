import React from 'react'
import Buttons from './Buttons'
import ('../styles/loginPage.css')


const LoginPage = () => {
  return (
    <main className='loginPage'>
        <section className='loginPage--form'>
            <div>
            <h3>Sign in to Twitter</h3>
                <Buttons/>
                {/* <span className="or-divider">or</span> */}
                <label className='loginPage--form__input' htmlFor="">
                  Phone, email, or username
                  <input onClick={() => {console.log('click')}} className='loginPage--form__area' type="text" />
                </label>
            </div>
        </section>
    </main>
  )
}

export default LoginPage