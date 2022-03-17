import React from 'react';
import '../styles/aside.css';
import Search from './Search';

const Aside = () => {
  return (
    <React.Fragment>
        <div className="main--aside">
            <Search/>
            <div className="main--aside__container">
                    <div>
                        <h3>Trends for you</h3>
                    </div>
                    <div>
                    <h3>Who to follow</h3>
                    </div>
                    <nav aria-label="Footer" role="navigation" className="css-1dbjc4n r-18u37iz r-1w6e6rj r-ymttw5">
                        <a href="https://twitter.com/tos" dir="auto" rel="noopener noreferrer" target="_blank" role="link" className="css-4rbku5 css-18t94o4 css-901oao r-14j79pv r-1loqt21 r-37j5jr r-n6v787 r-16dba41 r-1cwl3u0 r-hrzydr r-bcqeeo r-j2kj52 r-qvutc0">
                            <span className="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">Terms of Service</span></a>
                        <a href="https://twitter.com/privacy" dir="auto" rel="noopener noreferrer" target="_blank" role="link" className="css-4rbku5 css-18t94o4 css-901oao r-14j79pv r-1loqt21 r-37j5jr r-n6v787 r-16dba41 r-1cwl3u0 r-hrzydr r-bcqeeo r-j2kj52 r-qvutc0">
                            <span className="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">Privacy Policy</span></a>
                        <a href="https://support.twitter.com/articles/20170514" dir="auto" rel="noopener noreferrer" target="_blank" role="link" className="css-4rbku5 css-18t94o4 css-901oao r-14j79pv r-1loqt21 r-37j5jr r-n6v787 r-16dba41 r-1cwl3u0 r-hrzydr r-bcqeeo r-j2kj52 r-qvutc0">
                            <span className="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">Cookie Policy</span></a>
                        <a href="https://help.twitter.com/resources/accessibility" dir="auto" rel="noopener noreferrer" target="_blank" role="link" className="css-4rbku5 css-18t94o4 css-901oao r-14j79pv r-1loqt21 r-37j5jr r-n6v787 r-16dba41 r-1cwl3u0 r-hrzydr r-bcqeeo r-j2kj52 r-qvutc0">
                            <span className="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">Accessibility</span></a>
                        <a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&amp;utm_source=twc&amp;utm_medium=web&amp;utm_campaign=ao&amp;utm_content=adsinfo" dir="auto" rel="noopener noreferrer" target="_blank" role="link" className="css-4rbku5 css-18t94o4 css-901oao r-14j79pv r-1loqt21 r-37j5jr r-n6v787 r-16dba41 r-1cwl3u0 r-hrzydr r-bcqeeo r-j2kj52 r-qvutc0">
                            <span className="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">Ads info</span></a>
        {/*                 <div aria-expanded="false" aria-haspopup="menu" aria-label="More" role="button" tabindex="0" className="css-18t94o4 css-1dbjc4n r-hrzydr r-j2kj52"><div dir="auto" className="css-901oao r-14j79pv r-37j5jr r-n6v787 r-16dba41 r-1cwl3u0 r-bcqeeo r-qvutc0"><span className="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">More</span><svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-ip8ujx r-dnmrzs r-1p4rafz r-bnwqim r-1plcrui r-lrvibr"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg></div></div> */}
                        <div dir="auto" className="css-901oao r-14j79pv r-37j5jr r-n6v787 r-16dba41 r-1cwl3u0 r-hrzydr r-bcqeeo r-j2kj52 r-qvutc0">
                        <span className="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">© 2022 Twitter, Inc.</span></div></nav>
                </div>
            </div>
    </React.Fragment>
  )
}

export default Aside