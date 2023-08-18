import React from 'react'
import '../styles/index.css'
import Buttons from './Buttons'
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div >
      <div className="App">
        <div className="login">
          <section className="loginSection">
            <div className="loginSection--content">
              <div className="loginSection-logo"></div>
              <h1>Happening now</h1>
              <h2>Join Twitter today.</h2>
              <div className="loginSection--options">
                
                <Buttons/>

                <span className="or-divider">or</span>

                <Link className='react-router-link' to="/LoginPage">
                  <button className="loginSection--loginButton loginSection--loginButton_other" type="button">Sign up with phone or email</button>
                </Link>

                <div className="loginSection--terms">
                  <p>By signing up, you agree to the <span>Terms of Service</span> and <br /> <span>Privacy Policy</span>, including <span>Cookie Use.</span></p>
                </div>


                <div className="loginSection--login">
                  <h3>Already have an account?</h3>
                  <button className="loginSection--loginButton loginSection--sigIn" type="button">Sign in</button>
                </div>
              </div>
            </div>
          </section>
          <div className="loginLogo-Container">
            <div className="loginLogo">
              <div className="loginLogo--bird">
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Pie de página" role="navigation" className="css-1dbjc4n">
      <a href="https://about.twitter.com" dir="auto" rel="noopener noreferrer" target="_blank" className="css-4rbku5"><span>About</span></a>
      <a href="https://help.twitter.com" dir="auto" rel="noopener noreferrer" target="_blank" className="css-4rbku5" ><span>Help Center</span></a>
      <a href="https://twitter.com/tos" dir="auto" rel="noopener noreferrer" target="_blank" className="css-4rbku5" ><span>Terms of Service</span></a>
      <a href="https://twitter.com/privacy" dir="auto" rel="noopener noreferrer" target="_blank" className="css-4rbku5" ><span>Privacy Policy</span></a>
      <a href="https://support.twitter.com/articles/20170514" dir="auto" rel="noopener noreferrer" target="_blank" className="css-4rbku5" ><span>Cookie Policy</span></a>
      <a href="https://help.twitter.com/resources/accessibility" dir="auto" rel="noopener noreferrer" target="_blank" className="css-4rbku5" ><span>
Accessibility</span></a>
      <a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&amp;utm_source=twc&amp;utm_medium=web&amp;utm_campaign=ao&amp;utm_content=adsinfo" dir="auto" rel="noopener noreferrer" target="_blank" className="css-4rbku5" ><span>
Ads info</span></a>
      <a href="https://blog.twitter.com" dir="auto" rel="noopener noreferrer" target="_blank" className="css-4rbku5" ><span>Blog</span></a>
      <a href="https://status.twitterstat.us" dir="auto" rel="noopener noreferrer" target="_blank" className="css-4rbku5" ><span>Status</span></a>
      <a href="https://careers.twitter.com" dir="auto" rel="noopener noreferrer" target="_blank" className="css-4rbku5" ><span>
Careers</span></a>
      <a href="https://about.twitter.com/press/brand-assets" dir="auto" rel="noopener noreferrer" target="_blank" className="css-4rbku5" ><span>Brand Resources</span></a>
      <a href="https://ads.twitter.com/?ref=gl-tw-tw-twitter-advertise" dir="auto" rel="noopener noreferrer" target="_blank" className="css-4rbku5 " ><span>Advertising</span></a>
      <a href="https://marketing.twitter.com" dir="auto" rel="noopener noreferrer" target="_blank" className="css-4rbku5" ><span>Marketing</span></a>
      <a href="https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&amp;utm_source=twc&amp;utm_medium=web&amp;utm_campaign=ao&amp;utm_content=twitterforbusiness" dir="auto" rel="noopener noreferrer" target="_blank" className="css-4rbku5" ><span>Twitter for Business</span></a>
      <a href="https://developer.twitter.com" dir="auto" rel="noopener noreferrer" target="_blank"  className="css-4rbku5 " ><span>Developers</span></a>
      <a href="https://twitter.com/i/directory/profiles" dir="auto" rel="noopener noreferrer" target="_blank" className="css-4rbku5 " ><span>Directory</span></a>
      <a href="/settings" dir="auto" className="css-4rbku5" ><span>Settings</span></a><div dir="auto" className="css-901oao css-4rbku5" ><span>© 2022 Twitter, Inc.</span></div></nav>
    </div>
  )
}

export default Login