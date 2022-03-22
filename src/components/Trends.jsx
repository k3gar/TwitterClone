import React, { useEffect } from 'react'
import '../styles/trends.css'

const Trends = () => {

  const [trends, setTrends] = React.useState([]);


  const getTrends = () =>{
    fetch('/trends.json')
    .then(response => response.json())
    .then(res => setTrends(res))
  };
/*   const getTrends = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(res => console.log(res))
  }; */

  useEffect(() => {getTrends()});

  return (
    <div className='main--aside-trends'>
        <h3>Trends for you</h3>
        <ul>
          {
            trends.map((item, index) => (
              <li key={index}>
                <div>
                {item.location === "El Salvador" ? <p >Trending in El Salvador</p> : <p >{item.topic} · Trending</p>}
                <h4 className='main--aside-trends_title'>{item.title}</h4>
                <p>{item.scope}</p>
                </div>
                <div className='main--aside-trends-dots'>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr88 r-1hdv0qi"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>
                  <span className='main--aside-trends_alt'>More</span>
                </div>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default Trends