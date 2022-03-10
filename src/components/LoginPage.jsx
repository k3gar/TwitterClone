import React from 'react'
import Buttons from './Buttons'
import ('../styles/loginPage.css')


const LoginPage = () => {
  const [value, setValue] = React.useState(false);
  
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
            <div>
            <h3>Sign in to Twitter</h3>
                <Buttons/>
                {/* <span className="or-divider">or</span> */}
                <label id='text_label' className='loginPage--form__input' htmlFor="text" onMouseUp={()=> {adding();}}>
                  Phone, email, or username
                  <input id='text' className='loginPage--form__area' type="text" />
                </label>
            </div>
        </section>
    </main>
  )
}

export default LoginPage