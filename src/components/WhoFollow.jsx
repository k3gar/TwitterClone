import React, { useEffect } from 'react'
import '../styles/whoFollow.css'

const WhoFollow = () => {

  const [follower, setFollower] = React.useState([]);

  const getNewFollower = () =>{
    fetch('/follow.json')
    .then(response => response.json())
    .then(res => setFollower(res))
  };

  useEffect(() => {getNewFollower()});


  return (
    <div className='main--aside-follow'>
        <h3>Who to Follow</h3>
        <ul>
          {
            follower.map((item, index) => (
              <li key={index}>
                <img className='main--aside-follow-pic' src={item.pic} alt="profile pic" />
                <div className='main--aside-follow-textContainer'>
                  <div>
                    <h4 className='main--aside-trends_title'>{item.name}</h4>
                    <p>{item.username}</p>
                  </div>
                  <button>Follow</button>
                </div>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default WhoFollow