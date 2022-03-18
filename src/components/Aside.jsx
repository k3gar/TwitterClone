import React from 'react';
import '../styles/aside.css';
import Search from './Search';
import Trends from './Trends';
import WhoFollow from './WhoFollow';

const Aside = () => {
/*     function styleScroll() {
        var element = document.getElementById("stickyElement");
        var sticky = element.offsetTop;

        if (window.pageYOffset > sticky) {
            element.classList.add("sticky");
          } else {
            element.classList.remove("sticky");
          }
    } */

/*     window.onscroll = function() {myFunction()};

    var header = document.getElementById("stickyElement");
    var sticky = header.offsetTop;

    function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    }
    else if(window.pageYOffset > 371){
        header.classList.remove("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
    } */

  return (
    <React.Fragment>
        <div className="main--aside">
            <Search/>
            <div id='css-1db' className='css-1db'></div>
            <div id='stickyElement' className="main--aside__container">
                    <Trends/>
                    <WhoFollow/>
                    <nav aria-label="Footer" role="navigation" className="css-1dbjc4n">
                        <a href="https://twitter.com/tos" dir="auto" rel="noopener noreferrer" target="_blank" role="link" className="css-4rbku5 css-18t94o4 css-901oao r-14j79pv r-1loqt21 r-37j5jr r-n6v787 r-16dba41 r-1cwl3u0 r-hrzydr r-bcqeeo r-j2kj52 r-qvutc0">
                            <span className="css-901oao ">Terms of Service</span></a>
                        <a href="https://twitter.com/privacy" dir="auto" rel="noopener noreferrer" target="_blank" role="link" className="css-4rbku5 css-18t94o4 css-901oao r-14j79pv r-1loqt21 r-37j5jr r-n6v787 r-16dba41 r-1cwl3u0 r-hrzydr r-bcqeeo r-j2kj52 r-qvutc0">
                            <span className="css-901oao ">Privacy Policy</span></a>
                        <a href="https://support.twitter.com/articles/20170514" dir="auto" rel="noopener noreferrer" target="_blank" role="link" className="css-4rbku5 css-18t94o4 css-901oao r-14j79pv r-1loqt21 r-37j5jr r-n6v787 r-16dba41 r-1cwl3u0 r-hrzydr r-bcqeeo r-j2kj52 r-qvutc0">
                            <span className="css-901oao ">Cookie Policy</span></a>
                        <a href="https://help.twitter.com/resources/accessibility" dir="auto" rel="noopener noreferrer" target="_blank" role="link" className="css-4rbku5 css-18t94o4 css-901oao r-14j79pv r-1loqt21 r-37j5jr r-n6v787 r-16dba41 r-1cwl3u0 r-hrzydr r-bcqeeo r-j2kj52 r-qvutc0">
                            <span className="css-901oao ">Accessibility</span></a>
                        <a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&amp;utm_source=twc&amp;utm_medium=web&amp;utm_campaign=ao&amp;utm_content=adsinfo" dir="auto" rel="noopener noreferrer" target="_blank" role="link" className="css-4rbku5 css-18t94o4 css-901oao r-14j79pv r-1loqt21 r-37j5jr r-n6v787 r-16dba41 r-1cwl3u0 r-hrzydr r-bcqeeo r-j2kj52 r-qvutc0">
                            <span className="css-901oao ">Ads info</span></a>
                        <div aria-expanded="false" aria-haspopup="menu" aria-label="More" role="button" tabindex="0" className="css-18 css-1dbjc4n r-hrzydr r-j2kj52">
                            <div dir="auto" className="css-901oao">
                                <a className="css-901oao">More</a> <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-circles r-ip8ujx r-dnmrzs r-1p4rafz r-bnwqim r-1plcrui r-lrvibr"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg></div></div>
                        <div dir="auto" className="css-901oao r-14j79pv r-37j5jr r-n6v787 r-16dba41 r-1cwl3u0 r-hrzydr r-bcqeeo r-j2kj52 r-qvutc0">
                        <span className="css-901oao ">© 2022 Twitter, Inc.</span></div></nav>
                </div>
            </div>
    </React.Fragment>
  )
}

export default Aside